"use client";

import { Field, Form, Input, Label, SubmitButton } from "@core/form";
import { FormProvider } from "react-hook-form";
import { useCreateUserForm } from "./api/use-create-user-form";

export const CreateUserForm = () => {
  const { onSubmit, ...useFormReturn } = useCreateUserForm();

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
