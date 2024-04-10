"use client";

import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { useMutationForm } from "@core/form";
import { HomePageDocument, HomePageUserCreateDocument } from "@core/graphql";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1),
});

export const CreateUserForm = () => {
  const { onSubmit, ...useFormReturn } = useMutationForm({
    mutation: HomePageUserCreateDocument,
    refetchQueries: [HomePageDocument],
    schema,
  });

  return (
    <FormProvider {...useFormReturn}>
      <Flex alignItems="center" as="form" onSubmit={onSubmit} width="md">
        <FormLabel minWidth="3rem">이름</FormLabel>
        <Input {...useFormReturn.register("name")} />
        <Button type="submit">생성</Button>
      </Flex>
    </FormProvider>
  );
};
