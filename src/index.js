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
  onUpdate: () => {
    const event = new Event('DaysCounterAppUpdate')
    window.dispatchEvent(event)
  },
})

// serviceWorker.unregister()
