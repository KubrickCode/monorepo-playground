import { ApolloClient, HttpLink, InMemoryCache, from } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "http://localhost:3001/graphql",
});

const link = from([httpLink]);

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  link,
});
