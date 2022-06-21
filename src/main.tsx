import React from 'react'
// react-dom é adaptação do projeto para web
import ReactDOM from 'react-dom/client'
import App from './App'

import './styles/global.css'

// Método inicial que vai pegar a div de id 'root' do index.html e vai falar que tuda vai ser renderizado lá
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
