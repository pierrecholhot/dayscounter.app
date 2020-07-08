import createPersistedState from 'use-persisted-state'

export default () => {
  const useDataStore = createPersistedState('datastore')
  const [dataStore, setDataStore] = useDataStore()

  const addEntry = payload => {
    setDataStore(ds => [payload, ...ds])
  }

  const removeEntry = id => {
    setDataStore(ds => ds.filter(entry => entry.id !== id))
  }

  const findEntryData = id => {
    return dataStore.find(entry => entry.id === id)
  }

  const findEntryIndex = id => {
    return dataStore.findIndex(entry => entry.id === id)
  }

  const updateEntry = (id, payload) => {
    const entry = findEntryData(id)
    const index = findEntryIndex(id)
    const updatedEntry = { ...entry, ...payload }
    const updatedStore = [...dataStore]
    updatedStore[index] = updatedEntry
    setDataStore(updatedStore)
    return updatedEntry
  }

  return { dataStore, addEntry, removeEntry, findEntryData, updateEntry }
}
