import { useAuthState } from "@/app/core/store";
import { Button } from "@chakra-ui/react";

export const LoginButton = () => {
  const { login } = useAuthState();
  return (
    <Button colorScheme="primary" onClick={login}>
      Login
    </Button>
  );
};
