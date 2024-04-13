"use client";

import { Field, Form, Input, Label, SubmitButton } from "@core/form";
import { FormProvider } from "react-hook-form";
import { useCreateUserMutation } from "./api";

export const CreateUserForm = () => {
  const { onSubmit, ...useFormReturn } = useCreateUserMutation();

  return (
    <FormProvider {...useFormReturn}>
      <Form onSubmit={onSubmit} width="sm">
        <Field>
          <Label>이름</Label>
          <Input name="name" />
        </Field>
        <SubmitButton />
      </Form>
    </FormProvider>
  );
};
