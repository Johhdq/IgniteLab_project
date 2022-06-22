import { ApolloProvider } from '@apollo/client'
import React from 'react'
// react-dom é adaptação do projeto para web
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apolo'

import './styles/global.css'

// Método inicial que vai pegar a div de id 'root' do index.html e vai falar que tuda vai ser renderizado lá
// O ApolloProvider é uma context Api

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
