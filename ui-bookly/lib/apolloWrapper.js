"use client";
/************************************************
 * 
 * for making requests from a client component
 * 
************************************************/
import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import { ApolloNextAppProvider, NextSSRInMemoryCache, SSRMultipartLink, NextSSRApolloClient } from "@apollo/experimental-nextjs-app-support/ssr";

function makeClient() {
  const httpLink = new HttpLink({
      uri: "http://localhost:4000",
  });

  return new NextSSRApolloClient({
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
}

export function ApolloWrapper({ children }) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
