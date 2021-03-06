import createPersistedState from 'use-persisted-state'

const usePersistedState = createPersistedState('datastore')

function useDataStore() {
  const [dataStore, setDataStore] = usePersistedState([])

  function addEntry(payload) {
    setDataStore(ds => [payload, ...ds])
  }

  function removeEntry(id) {
    setDataStore(ds => ds.filter(entry => entry.id !== id))
  }

  function cleanupEntries() {
    setDataStore(ds => ds.filter(entry => !entry.deleted))
  }

  function findEntryData(id) {
    return dataStore.find(entry => entry.id === id)
  }

  function findEntryIndex(id) {
    return dataStore.findIndex(entry => entry.id === id)
  }

  function updateEntry(id, payload) {
    const entry = findEntryData(id)
    const index = findEntryIndex(id)
    const updatedEntry = { ...entry, ...payload }
    const updatedStore = [...dataStore]
    updatedStore[index] = updatedEntry
    setDataStore(updatedStore)
    return updatedEntry
  }

  return {
    dataStore,
    addEntry,
    removeEntry,
    findEntryData,
    findEntryIndex,
    updateEntry,
    cleanupEntries,
  }
}

export default useDataStore
