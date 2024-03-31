"use client";

import { useAuthState } from "@/app/core/store";
import { LoginButton } from "./_components/login-button";
import { LogOutButton } from "./_components/logout-button";

const LoginPage = () => {
  const {
    authInfo: { isLogin },
  } = useAuthState();

  return (
    <>
      <>Login Page</>
      <h2>{isLogin ? "Logged In" : "Logged Out"}</h2>
      <LoginButton />
      <LogOutButton />
    </>
  );
};

export default LoginPage;
