import React from 'react'
import ReactDOM from 'react-dom'

import DaysCounterApp from './containers/Root'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <React.StrictMode>
    <DaysCounterApp />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register({
  onUpdate: async registration => {
    if (registration && registration.waiting) {
      await registration.unregister()
      registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      window.dispatchEvent(new Event('DaysCounterAppUpdate'))
    }
  },
})
