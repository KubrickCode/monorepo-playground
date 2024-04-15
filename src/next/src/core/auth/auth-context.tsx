"use client";

import { SessionProvider } from "next-auth/react";
import { PropsWithChildren } from "react";

export const AuthContext = ({ children }: PropsWithChildren) => (
  <SessionProvider>{children}</SessionProvider>
);
