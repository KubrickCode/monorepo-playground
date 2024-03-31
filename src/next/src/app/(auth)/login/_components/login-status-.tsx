"use client";

import { useAuthState } from "@/core/store";

export const LoginStatus = () => {
  const {
    authInfo: { isLogin },
  } = useAuthState();
  return <h2>{isLogin ? "Logged In" : "Logged Out"}</h2>;
};
