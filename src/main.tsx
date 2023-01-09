import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import DisplayMusicProvider from './context/context'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <DisplayMusicProvider>
      <App />
    </DisplayMusicProvider>
    
  </React.StrictMode>,
)
