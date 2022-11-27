import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { ApolloClient,InMemoryCache} from "@apollo/client";
import { ApolloProvider } from "react-apollo";
import {BrowserRouter} from "react-router-dom"
import "./style/style.css"

const client = new ApolloClient({
  uri: 'http://localhost:4000/',
  cache: new InMemoryCache(),
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);

