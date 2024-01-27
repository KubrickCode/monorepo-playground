import { ChakraProvider, Button } from "@chakra-ui/react";

export const App = () => {
  return (
    <ChakraProvider>
      <Button>Chakra Button</Button>
    </ChakraProvider>
  );
};
