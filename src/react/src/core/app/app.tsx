import { Router, Routes } from "./router";
import { ApolloProvider } from "@apollo/client";
import { client } from "../graphql/graphql";
import { ThemeProvider } from "../theme";

const App = () => {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Router>
          <Routes />
        </Router>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
