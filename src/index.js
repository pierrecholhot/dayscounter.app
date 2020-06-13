import React from 'react'
import ReactDOM from 'react-dom'

import DaysCounterApp from './containers/Root'
import * as serviceWorker from './serviceWorker'

if (process.env.NODE_ENV === 'production' && window.location.hostname !== 'www.dayscounter.app') {
  window.location.replace('https://www.dayscounter.app')
}

ReactDOM.render(
  <React.StrictMode>
    <DaysCounterApp />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register({
  onUpdate: () => {
    const event = new Event('DaysCounterAppUpdate')
    window.dispatchEvent(event)
  },
})

// serviceWorker.unregister()
