"use client";

import { Button } from "@chakra-ui/react";
import { signIn, signOut } from "next-auth/react";
import router from "next/router";

export const Login = () => {
  return (
    <>
      <Button
        onClick={() =>
          signIn("google").then(() => {
            router.push("/register");
          })
        }
      >
        로그인
      </Button>
      <Button onClick={() => signOut()}>로그아웃</Button>
    </>
  );
};
