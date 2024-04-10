"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { DocumentNode } from "graphql";
import { DeepPartial, FieldValues, useForm } from "react-hook-form";
import { useMutation } from "@apollo/client";

export type UseMutationFormOptions = {
  defaultValues?: DeepPartial<FieldValues>;
  mutation: DocumentNode;
  refetchQueries?: (string | DocumentNode)[];
  schema?: any;
};

export const useMutationForm = ({
  defaultValues,
  mutation,
  refetchQueries,
  schema,
}: UseMutationFormOptions) => {
  const [mutate, mutationResult] = useMutation(mutation);

  const { handleSubmit, setError, ...otherProps } = useForm({
    defaultValues,
    ...(schema && {
      resolver: zodResolver(schema),
    }),
  });

  const onValid = async (input: unknown) => {
    await mutate({
      variables: {
        input,
      },
      refetchQueries,
    });
  };

  return {
    handleSubmit,
    mutationResult,
    onSubmit: handleSubmit(onValid),
    setError,
    ...otherProps,
  };
};
