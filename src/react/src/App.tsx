import { ChakraProvider, Button } from "@chakra-ui/react";
import axios from "axios";

export const App = () => {
  const getData = async () => {
    const result = await axios.get("/api");
    console.log(result.data);
  };

  return (
    <ChakraProvider>
      <Button onClick={getData}>Chakra Button</Button>
    </ChakraProvider>
  );
};
