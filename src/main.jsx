import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/global.css'
import './assets/css/nucleo-icons.css'
import './assets/css/nucleo-svg.css'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from './app/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)
