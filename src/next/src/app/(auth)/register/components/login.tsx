"use client";

import { Button } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";

export const Login = () => {
  return (
    <>
      <Button onClick={() => signIn("google")}>로그인</Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </>
  );
};
