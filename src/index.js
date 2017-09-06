import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { ApolloClient, ApolloProvider } from 'react-apollo';
import { networkInterface } from './graphql/networkInterface';
import Main from './Main';

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  <BrowserRouter><ApolloProvider client={client}><Main /></ApolloProvider></BrowserRouter>,
  document.getElementById('root'),
);
