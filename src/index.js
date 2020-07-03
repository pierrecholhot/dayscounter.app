import React from 'react'
import ReactDOM from 'react-dom'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import advancedFormat from 'dayjs/plugin/advancedFormat'

import Root from './containers/Root'
import * as serviceWorker from './serviceWorker'
import broadcastSWUpdate from './utils/broadcastSWUpdate'

import { name, version } from '../package.json'

dayjs.extend(advancedFormat)
dayjs.extend(relativeTime)

ReactDOM.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.register({ onUpdate: broadcastSWUpdate })

console.log(name, version)
