"use client";

import { Button, Flex, FormLabel, Input } from "@chakra-ui/react";
import { FieldError, useMutationForm } from "@core/form";
import {
  HomePageDocument,
  HomePageUserCreateDocument,
  HomePageUserCreateMutation,
  UserCreateInput,
} from "@core/graphql";
import { FormProvider } from "react-hook-form";
import { z } from "zod";

export const CreateUserForm = () => {
  const { onSubmit, mutationResult, ...useFormReturn } = useMutationForm<
    UserCreateInput,
    HomePageUserCreateMutation
  >({
    defaultValues: {
      name: "abc",
    },
    mutation: HomePageUserCreateDocument,
    onComplete: (data) => {
      console.log(data?.userCreate.ok);
    },
    refetchQueries: [HomePageDocument],
    schema: {
      name: z.string().min(1),
    },
  });

  return (
    <FormProvider {...useFormReturn}>
      <Flex alignItems="center" as="form" onSubmit={onSubmit} width="md">
        <FormLabel minWidth="3rem">이름</FormLabel>
        <Input {...useFormReturn.register("name")} />
        <Button type="submit">생성</Button>
      </Flex>
      <FieldError name="name" />
    </FormProvider>
  );
};
