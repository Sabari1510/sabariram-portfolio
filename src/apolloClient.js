import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: `https://graphql.contentful.com/content/v1/spaces/prfgtj5q7sxx`,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer usxgkxCs2jNoBPOfpQDb0aenTp7EWNOq-Bl6CTcOoQk`,
  },
});

export default client;