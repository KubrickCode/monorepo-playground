import { useAuthState } from "@/app/core/store";
import { Button } from "@chakra-ui/react";

export const LogOutButton = () => {
  const { logout } = useAuthState();
  return (
    <Button colorScheme="primary" onClick={logout}>
      LogOut
    </Button>
  );
};
