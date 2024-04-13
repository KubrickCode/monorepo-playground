"use client";

import { Button, Flex, FormLabel } from "@chakra-ui/react";
import { Field, FieldError, Input, Label, useMutationForm } from "@core/form";
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
      <Flex as="form" direction="column" gap={2} onSubmit={onSubmit} width="sm">
        <Field>
          <Label>이름</Label>
          <Input name="name" />
        </Field>
        <Button type="submit">생성</Button>
      </Flex>
    </FormProvider>
  );
};
