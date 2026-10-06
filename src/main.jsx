import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './tailwind.css'
import '../css/style.css'

const basePath = '/netdata-site'
const basename = window.location.pathname === basePath || window.location.pathname.startsWith(basePath + '/')
  ? basePath
  : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)
