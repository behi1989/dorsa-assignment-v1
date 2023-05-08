import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router} from 'react-router-dom'
import {Provider} from 'react-redux'
import {registerSW} from 'virtual:pwa-register'

import {store} from '@/store'

import App from '@/App.tsx'
import ErrorBoundary from '@/errors/ErrorBoundary'

import './index.css'

// add this to prompt for a refresh
if ('serviceWorker' in navigator) {
  const updateSW = registerSW({
    onNeedRefresh() {
      if (confirm('New content available. Reload?')) {
        updateSW(true)
      }
    },
  })
  // registerSW()
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <App />
        </Router>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
)
