import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { hot } from 'react-hot-loader'
import App from './App'

const MyApp = hot(module)(App)
ReactDOM.render(<MyApp />, document.getElementById('app'))
