export default async registration => {
  if (registration && registration.waiting) {
    await registration.unregister()
    registration.waiting.postMessage({ type: 'SKIP_WAITING' })
    window.dispatchEvent(new Event('DaysCounterAppUpdate'))
  }
}
