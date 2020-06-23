import React from 'react'
import createPersistedState from 'use-persisted-state'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

import DateCard from '../../components/DateCard'
import EntryUpdater from '../../components/EntryUpdater'
import ListTitle from '../../components/ListTitle'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import examples from '../../constants/examples'

import backToTheFuture from '../../utils/backToTheFuture'
import formatDate from '../../utils/formatDate'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'
import { sortDatesAsc, sortDatesDsc } from '../../utils/sortDates'

import useStyles from './App.styles.js'

const useDataStoreState = createPersistedState('datastore')

function App(props) {
  const classes = useStyles()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [isCreatingEntry, setIsCreatingEntry] = React.useState(false)
  const [cardBeingEdited, setCardBeingEdited] = React.useState(null)
  const [deletedEntries, setDeletedEntries] = React.useState([])
  const [datastore, setDatastore] = useDataStoreState([])

  const showUpdateNotification = () => {
    const action = (
      <Button color="primary" size="small" onClick={() => window.location.reload(true)}>
        Update
      </Button>
    )
    enqueueSnackbar(`A new version of this app is available`, { key: 'DaysCounterAppUpdate', persist: true, action })
  }

  const handleRequestUndo = cardData => {
    setDeletedEntries(entries => entries.filter(entry => entry.id !== cardData.id))
    closeSnackbar(cardData.id)
  }

  const handleActualDelete = cardData => {
    const match = entry => entry.id !== cardData.id
    setDatastore(cds => cds.filter(match))
    setDeletedEntries(entries => entries.filter(match))
  }

  const handleRequestDelete = cardData => {
    setDeletedEntries(entries => [...entries, cardData])
    enqueueSnackbar(`Deleted « ${cardData.label || formatDate(cardData.date)} »`, {
      key: cardData.id,
      action: () => renderSnackbarUndo(cardData),
      onClose: (e, reason) => {
        if (reason !== 'instructed' && reason !== 'clickaway') {
          handleActualDelete(cardData)
        }
      },
    })
  }

  const handleRequestUpdate = data => {
    setDatastore(cds => cds.map(entry => (entry.id === cardBeingEdited.id ? { ...entry, ...data } : entry)))
    setCardBeingEdited(null)
  }

  const handleRequestCreate = cardData => {
    if (cardData) {
      setDatastore(cds => [...cds, cardData])
    }
    setIsCreatingEntry(false)
  }

  const renderSnackbarUndo = cardData => (
    <Button color="primary" size="small" onClick={() => handleRequestUndo(cardData)}>
      Undo
    </Button>
  )

  const renderCard = data => {
    return (
      <DateCard
        data={data}
        key={data.id}
        onRequestEdit={() => setCardBeingEdited(data)}
        onRequestDelete={() => handleRequestDelete(data)}
        isBeingDeleted={deletedEntries.find(entry => entry.id === data.id)}
      />
    )
  }

  const renderExamples = () => {
    if (datastore.length) {
      return null
    }
    return (
      <React.Fragment>
        <ListTitle className={classes.title}>Some examples below :</ListTitle>
        {examples
          .map(entry => ({ ...entry, date: backToTheFuture(entry.date) }))
          .sort(sortDatesDsc)
          .map(entry => (
            <DateCard key={entry.id} data={entry} interactive={false} />
          ))}
      </React.Fragment>
    )
  }

  const renderCardCreator = () => {
    if (!isCreatingEntry) {
      return null
    }
    return <EntryUpdater onRequestSave={handleRequestCreate} />
  }

  const renderCardEditor = () => {
    if (!cardBeingEdited) {
      return null
    }
    return <EntryUpdater data={cardBeingEdited} onRequestSave={handleRequestUpdate} />
  }

  const renderPastCounters = () => {
    const counters = datastore.sort(sortDatesAsc)
    const pastCounters = counters.filter(el => normalizeDate(el.date).isBefore(today))

    if (!pastCounters.length) {
      return null
    }
    return (
      <React.Fragment>
        <ListTitle className={classes.title}>Past Counters</ListTitle>
        {pastCounters.map(renderCard)}
      </React.Fragment>
    )
  }

  const renderUpcomingCounters = () => {
    const counters = datastore.sort(sortDatesDsc)
    const futureCounters = counters.filter(el => !normalizeDate(el.date).isBefore(today))
    return futureCounters.map(renderCard)
  }

  React.useEffect(() => {
    window.addEventListener('DaysCounterAppUpdate', showUpdateNotification, { once: true })
  }, [])

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header className={classes.header} onRequestCreate={() => setIsCreatingEntry(true)} />
        <div className={classes.list}>
          {renderExamples()}
          {renderUpcomingCounters()}
          {renderPastCounters()}
        </div>
        <Footer className={classes.footer} onRequestSwitchTheme={props.onRequestSwitchTheme} />
      </div>
      {renderCardCreator()}
      {renderCardEditor()}
    </React.Fragment>
  )
}

export default App
