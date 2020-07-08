import { dispatchUpdateEvent } from './useUpdateNotification'

async function broadcastSWUpdate(registration) {
  if (registration?.waiting) {
    await registration.unregister()
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    dispatchUpdateEvent()
  }
}

export default broadcastSWUpdate
