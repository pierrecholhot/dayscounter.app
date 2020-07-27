import React from 'react'
import { useSnackbar } from 'notistack'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

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
import useDataStore from '../../utils/useDataStore'
import { bigList } from '../../utils/bigData'
import { sortDatesAsc, sortDatesDsc } from '../../utils/sortDates'

import useStyles from './App.styles.js'

function App(props) {
  //eslint-disable-next-line no-unused-vars
  const updateNotification = useUpdateNotification()

  const classes = useStyles()
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()
  const [isCreatingEntry, setIsCreatingEntry] = React.useState(false)
  const [cardBeingEdited, setCardBeingEdited] = React.useState(null)
  const { dataStore, addEntry, removeEntry, updateEntry, cleanupEntries } = useDataStore()

  React.useEffect(() => {
    cleanupEntries()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleRequestColorChange = (data, colorIndex) => {
    const payload = { ...data, color: colorIndex }
    handleRequestUpdate(payload)
  }

  const handleRequestUndo = data => {
    const payload = { ...data, deleted: false }
    handleRequestUpdate(payload)
    closeSnackbar(data.id)
  }

  const handleActualDelete = data => {
    removeEntry(data.id)
  }

  const handleRequestDuplicate = data => {
    handleRequestCreate({ ...data, id: Date.now() })
  }

  const handleRequestDelete = data => {
    const payload = { ...data, deleted: true }
    handleRequestUpdate(payload)
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
    if (data) {
      updateEntry(data.id, data)
    }
    setCardBeingEdited(null)
  }

  const handleRequestCreate = data => {
    if (data) {
      addEntry(data)
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
        onRequestColorChange={idx => handleRequestColorChange(data, idx)}
        onRequestDuplicate={() => handleRequestDuplicate(data)}
        onRequestDelete={() => handleRequestDelete(data)}
      />
    )
  }

  const renderExamples = () => {
    if (dataStore.length) {
      return null
    }
    const withDates = examples.map(entry => ({
      ...entry,
      date: backToTheFuture(entry.date),
    }))
    return (
      <div className={classes.examples}>
        <DateCardList subheader="Some examples below">
          {sortDatesDsc(withDates).map(entry => (
            <DateCard key={entry.id} data={entry} interactive={false} />
          ))}
        </DateCardList>
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

  const getTotalCount = data => {
    if (!bigList(data)) {
      return null
    }
    return `(${data.length})`
  }

  const renderCounters = (label, counters) => {
    if (!counters.length) {
      return null
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

  const renderTodaysDate = () => {
    if (!dataStore.length) {
      return null
    }
    return (
      <Typography component="div" align="right" color="textSecondary" variant="overline" paragraph>
        {today.format('dddd, MMMM D, YYYY (UTC Z)')}
      </Typography>
    )
  }

  const renderTotalCounters = () => {
    if (!dataStore.length || !bigList(dataStore)) {
      return null
    }
    return (
      <Typography component="div" align="right" color="textSecondary" variant="overline">
        You have {dataStore.length} counters in total
      </Typography>
    )
  }

  const renderUpcomingCounters = () => {
    const data = dataStore.filter(el => !normalizeDate(el.date).isBefore(today))
    const counters = sortDatesDsc(data)
    return renderCounters('Upcoming', counters)
  }

  const renderPastCounters = () => {
    const data = dataStore.filter(el => normalizeDate(el.date).isBefore(today))
    const counters = sortDatesAsc(data)
    return renderCounters('Past', counters)
  }

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid item xs={12} xl={1} />
          <Grid item xs={12} lg={5} xl={4} className={classes.headers} container justify="center" alignItems="center">
            <div>
              <Header className={classes.header} onRequestCreate={() => setIsCreatingEntry(true)} />
              <Hidden only={['xs', 'sm', 'md']} implementation="css">
                <Footer className={classes.footer} />
              </Hidden>
            </div>
          </Grid>
          <Grid item xs={12} lg={6} xl={5}>
            <div className={classes.content}>
              {renderTodaysDate()}
              {renderExamples()}
              {renderUpcomingCounters()}
              {renderPastCounters()}
              {renderTotalCounters()}
            </div>
            <Hidden only={['lg', 'xl']} implementation="js">
              <Footer className={classes.footer} />
            </Hidden>
          </Grid>
        </Grid>
      </div>
      {renderCardCreator()}
      {renderCardEditor()}
    </React.Fragment>
  )
}

export default App
