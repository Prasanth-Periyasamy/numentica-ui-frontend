import { ApolloClient, InMemoryCache } from '@apollo/client';
import { apiUrl } from './api.config';

const client = new ApolloClient({
  uri: `${apiUrl}/graphql`,
  cache: new InMemoryCache(),
  defaultOptions: {
    query: {
      fetchPolicy: 'no-cache',
    },
    watchQuery: {
      fetchPolicy: 'no-cache',
    },
  },
});

export default client;
