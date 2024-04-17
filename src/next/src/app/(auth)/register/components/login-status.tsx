"use client";

import { Text } from "@chakra-ui/react";
import { useSession } from "next-auth/react";

export const LoginStatus = () => {
  const { data: session } = useSession();
  return (
    <>
      <Text>유저 정보</Text>
      <Text>{session?.user?.name}</Text>
      <Text>{session?.user?.email}</Text>
      <Text>{session?.user?.image}</Text>
      <Text>{session?.expires}</Text>
    </>
  );
};
