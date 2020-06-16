import React from 'react'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import createPersistedState from 'use-persisted-state'

import DateCard from '../../components/DateCard'
import ExamplesDialog from '../../components/ExamplesDialog'
import MicroButton from '../../components/MicroButton'
import CTA from '../../components/CTA'
import EntryUpdater from '../../components/EntryUpdater'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { sortDatesAsc, sortDatesDsc } from '../../utils/sortDates'
import formatDate from '../../utils/formatDate'
import useStyles from './App.styles.js'

const useDataStoreState = createPersistedState('datastore')

function App(props) {
  const classes = useStyles()

  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [isViewingExamples, setIsViewingExamples] = React.useState(false)
  const [isCreatingEntry, setIsCreatingEntry] = React.useState(false)
  const [cardBeingEdited, setCardBeingEdited] = React.useState(null)
  const [deletedEntries, setDeletedEntries] = React.useState([])
  const [datastore, setDatastore] = useDataStoreState([])

  const today = dayjs().startOf('day')

  const showUpdateNotification = () => {
    const action = (
      <Button color="primary" size="small" onClick={() => window.location.reload()}>
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

  const renderCard = currentCardData => {
    return (
      <DateCard
        data={currentCardData}
        key={currentCardData.id}
        onRequestEdit={() => setCardBeingEdited(currentCardData)}
        onRequestDelete={() => handleRequestDelete(currentCardData)}
        isBeingDeleted={deletedEntries.find(entry => entry.id === currentCardData.id)}
      />
    )
  }

  const renderShowExamples = () => {
    if (datastore.length) {
      return null
    }
    return (
      <div className={classes.examplesTrigger}>
        <MicroButton onClick={() => setIsViewingExamples(true)}>see some examples</MicroButton>
        <ExamplesDialog open={isViewingExamples} onClose={() => setIsViewingExamples(false)} />
      </div>
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
    const pastCounters = counters.filter(el => dayjs(el.date).startOf('day').isBefore(today))

    if (!pastCounters.length) {
      return null
    }
    return (
      <React.Fragment>
        <Typography variant="overline" className={classes.title}>
          Past
        </Typography>
        {pastCounters.map(renderCard)}
      </React.Fragment>
    )
  }

  const renderFutureCounters = () => {
    const counters = datastore.sort(sortDatesDsc)
    const futureCounters = counters.filter(el => !dayjs(el.date).startOf('day').isBefore(today))
    return futureCounters.map(renderCard)
  }

  React.useEffect(() => {
    window.addEventListener('DaysCounterAppUpdate', showUpdateNotification, { once: true })
  })

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.create}>
        <CTA onClick={() => setIsCreatingEntry(true)} />
        {renderCardCreator()}
        {renderShowExamples()}
      </div>
      <div className={classes.list}>
        {renderFutureCounters()}
        {renderPastCounters()}
      </div>
      <Footer isDarkTheme={props.isDarkTheme} onRequestSwitchTheme={props.onRequestSwitchTheme} />
      {renderCardEditor()}
    </div>
  )
}

export default App
