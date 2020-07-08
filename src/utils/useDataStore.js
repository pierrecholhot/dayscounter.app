import createPersistedState from 'use-persisted-state'

const useLocalDataStore = createPersistedState('datastore')

function useDataStore() {
  const [dataStore, setDataStore] = useLocalDataStore()

  function addEntry(payload) {
    setDataStore(ds => [payload, ...ds])
  }

  function removeEntry(id) {
    setDataStore(ds => ds.filter(entry => entry.id !== id))
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
  }
}

export default useDataStore
