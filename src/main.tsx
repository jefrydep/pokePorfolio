import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
 
import './index.css'
import { PokeApp } from './PokeApp'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
    <PokeApp/>
      </BrowserRouter>
  </React.StrictMode>
)
