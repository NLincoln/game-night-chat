import React from 'react';
import { ApolloProvider } from 'react-apollo';
import { client } from './apollo/client';

const App = () => (
  <ApolloProvider client={client} >
    <div> </div>
  </ApolloProvider>
);

export default App;
