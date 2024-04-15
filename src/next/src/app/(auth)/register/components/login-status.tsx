"use client";

import { useSession } from "next-auth/react";

export const LoginStatus = () => {
  const { data: session } = useSession();
  console.log(session)
  return <>123</>;
};
