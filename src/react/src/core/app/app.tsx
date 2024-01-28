import { ChakraProvider } from "@chakra-ui/react";
import { Router, Routes } from "./router";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/graphql";

const App = () => {
  return (
    <ChakraProvider>
      <ApolloProvider client={client}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </ChakraProvider>
  );
};

export default App;
