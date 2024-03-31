"use client";

import { useAuthState } from "@/app/core/store";

export const LoginStatus = () => {
  const {
    authInfo: { isLogin },
  } = useAuthState();
  return <h2>{isLogin ? "Logged In" : "Logged Out"}</h2>;
};
