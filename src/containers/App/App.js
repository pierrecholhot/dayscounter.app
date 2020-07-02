import React from 'react'
import createPersistedState from 'use-persisted-state'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'

import DateCard from '../../components/DateCard'
import DateCardList from '../../components/DateCardList'
import EntryUpdater from '../../components/EntryUpdater'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

import examples from '../../constants/examples'

import backToTheFuture from '../../utils/backToTheFuture'
import formatDate from '../../utils/formatDate'
import normalizeDate from '../../utils/normalizeDate'
import today from '../../utils/today'
import useUpdateNotification from '../../utils/useUpdateNotification'
import { bigList, bigInt } from '../../utils/bigData'
import { sortDatesAsc, sortDatesDsc } from '../../utils/sortDates'

import useStyles from './App.styles.js'

const useDataStoreState = createPersistedState('datastore')

function App(props) {
  const classes = useStyles()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const updateNotification = useUpdateNotification()
  const [isCreatingEntry, setIsCreatingEntry] = React.useState(false)
  const [cardBeingEdited, setCardBeingEdited] = React.useState(null)
  const [deletedEntries, setDeletedEntries] = React.useState([])
  const [datastore, setDatastore] = useDataStoreState([])

  const showUpdateNotification = () => {
    updateNotification.show()
  }

  const handleRequestUndo = data => {
    setDeletedEntries(entries => entries.filter(entry => entry.id !== data.id))
    closeSnackbar(data.id)
  }

  const handleActualDelete = data => {
    const match = entry => entry.id !== data.id
    setDatastore(cds => cds.filter(match))
    setDeletedEntries(entries => entries.filter(match))
  }

  const handleRequestDuplicate = data => {
    handleRequestCreate({ ...data, id: Date.now() })
  }

  const handleRequestDelete = data => {
    setDeletedEntries(entries => [...entries, data])
    enqueueSnackbar(`Deleted « ${data.label || formatDate(data.date)} »`, {
      key: data.id,
      action: () => renderSnackbarUndo(data),
      onClose: (e, reason) => {
        if (reason !== 'instructed' && reason !== 'clickaway') {
          handleActualDelete(data)
        }
      },
    })
  }

  const handleRequestUpdate = data => {
    if (!data) {
      setCardBeingEdited(null)
      return
    }
    const idx = datastore.findIndex(el => el.id === data.id)
    const updatedDatastore = [...datastore]
    updatedDatastore[idx] = data
    setDatastore(updatedDatastore)
    setCardBeingEdited(null)
  }

  const handleRequestCreate = data => {
    if (data) {
      setDatastore(cds => [...cds, data])
    }
    setIsCreatingEntry(false)
  }

  const renderSnackbarUndo = data => (
    <Button color="primary" size="small" onClick={() => handleRequestUndo(data)}>
      Undo
    </Button>
  )

  const renderCard = data => {
    return (
      <DateCard
        data={data}
        key={data.id}
        onRequestEdit={() => setCardBeingEdited(data)}
        onRequestDuplicate={() => handleRequestDuplicate(data)}
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
      <DateCardList subheader="Some examples below">
        {[...examples]
          .map(entry => ({ ...entry, date: backToTheFuture(entry.date) }))
          .sort(sortDatesDsc)
          .map(entry => (
            <DateCard key={entry.id} data={entry} interactive={false} />
          ))}
      </DateCardList>
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

  const getTotalCount = data => {
    if (!bigList(data)) {
      return null
    }

    const total = data.length
    // exclude deleted entries from total
    if (deletedEntries.length) {
      const totalWithoutDeleted = total - deletedEntries.length
      return bigInt(totalWithoutDeleted) ? `(${totalWithoutDeleted})` : null
    }
    return `(${total})`
  }

  const renderCounters = (label, counters) => {
    if (!counters.length) {
      return null
    }

    if (deletedEntries.length) {
      const allDeleted = counters.every(counter => deletedEntries.find(de => de.id === counter.id))

      if (allDeleted) {
        return null
      }
    }

    return (
      <DateCardList
        className={classes.list}
        subheader={
          <React.Fragment>
            {label} Counters {getTotalCount(counters)}
          </React.Fragment>
        }
      >
        {counters.map(renderCard)}
      </DateCardList>
    )
  }

  const renderUpcomingCounters = () => {
    const data = datastore.filter(el => !normalizeDate(el.date).isBefore(today))
    const counters = sortDatesDsc(data)
    return renderCounters('Upcoming', counters)
  }

  const renderPastCounters = () => {
    const data = datastore.filter(el => normalizeDate(el.date).isBefore(today))
    const counters = sortDatesAsc(data)
    return renderCounters('Past', counters)
  }

  React.useEffect(() => {
    window.addEventListener('DaysCounterAppUpdate', showUpdateNotification, { once: true })
  }, [])

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Header className={classes.header} onRequestCreate={() => setIsCreatingEntry(true)} />
        {renderExamples()}
        {renderUpcomingCounters()}
        {renderPastCounters()}
        <Footer className={classes.footer} onRequestSwitchTheme={props.onRequestSwitchTheme} />
      </div>
      {renderCardCreator()}
      {renderCardEditor()}
    </React.Fragment>
  )
}

export default App
