import { ChakraProvider } from "@chakra-ui/react";
import { Router, Routes } from "./router";

const App = () => {
  return (
    <ChakraProvider>
      <Router>
        <Routes />
      </Router>
    </ChakraProvider>
  );
};

export default App;
