"use client";

import { useMutation } from "@apollo/client";
import { Button, FormLabel, Input } from "@chakra-ui/react";
import { HomePageDocument, HomePageUserCreateDocument } from "@core/graphql";
import { useState } from "react";

export const CreateUserForm = () => {
  const [name, setName] = useState("");
  const [mutate] = useMutation(HomePageUserCreateDocument);

  return (
    <>
      <FormLabel>유저 이름</FormLabel>
      <Input onChange={(e) => setName(e.target.value)} />
      <Button
        onClick={() => {
          mutate({
            variables: {
              input: { name },
            },
            refetchQueries: [HomePageDocument],
            awaitRefetchQueries: true,
          });
        }}
      >
        생성
      </Button>
    </>
  );
};
