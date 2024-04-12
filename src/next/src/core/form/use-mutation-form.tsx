"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentNode } from "graphql";
import { DefaultValues, FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";
import { z, ZodTypeAny } from "zod";

type ZodSchemaFromType<T> = {
  [P in keyof T]: ZodTypeAny;
};

export type UseMutationFormOptions<
  FormValues extends FieldValues,
  MutationResult
> = {
  defaultValues?: DefaultValues<FormValues>;
  mutation: DocumentNode;
  onComplete: (value?: MutationResult | null) => void;
  refetchQueries?: (string | DocumentNode)[];
  schema: ZodSchemaFromType<FormValues>;
};

export const useMutationForm = <
  FormValues extends FieldValues,
  MutationResult
>({
  defaultValues,
  mutation,
  onComplete,
  refetchQueries,
  schema,
}: UseMutationFormOptions<FormValues, MutationResult>) => {
  const [mutate, mutationResult] = useMutation<MutationResult>(mutation);

  const { handleSubmit, setError, ...otherProps } = useForm<FormValues>({
    defaultValues,
    ...(schema && {
      resolver: zodResolver(z.object(schema)),
    }),
  });

  const onValid = async (input: unknown) => {
    const { data, errors } = await mutate({
      variables: {
        input,
      },
      refetchQueries,
    });

    if (errors) {
      for (const error of errors) {
        switch (error.extensions?.code) {
          case "BAD_USER_INPUT":
            setError(error.extensions.field as any, {
              type: "manual",
              message: error.message,
            });
            break;
        }
      }
    } else {
      onComplete(data);
    }
  };

  return {
    handleSubmit,
    mutationResult,
    onSubmit: handleSubmit(onValid),
    setError,
    ...otherProps,
  };
};
