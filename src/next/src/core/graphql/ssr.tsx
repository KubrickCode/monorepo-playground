"use client";

import { ApolloLink, HttpLink } from "@apollo/client";
import {
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  NextSSRApolloClient,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const httpLink = new HttpLink({
  uri: "http://127.0.0.1:3003/graphql",
  fetchOptions: { cache: "no-store" },
});

const makeClient = () =>
  new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });

export const ApolloWrapper = ({ children }: React.PropsWithChildren) => (
  <ApolloNextAppProvider makeClient={makeClient}>
    {children}
  </ApolloNextAppProvider>
);
