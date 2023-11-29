import React from 'react'
import ReactDOM from 'react-dom/client'

/*  Importaçãodo primeiro/principal componente, arquivo em que carregamos os elementos da pagina */
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
