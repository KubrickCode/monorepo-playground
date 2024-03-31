"use client";

import { useAuthState } from "@core/store";
import { Button } from "@chakra-ui/react";

export const SignButton = () => {
  const {
    authInfo: { isLogin },
    login,
    logout,
  } = useAuthState();

  return (
    <Button colorScheme="primary" onClick={isLogin ? logout : login}>
      {isLogin ? "LogOut" : "LogIn"}
    </Button>
  );
};
