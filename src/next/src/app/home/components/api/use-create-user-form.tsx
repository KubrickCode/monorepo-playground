import { useMutationForm } from "@core/form";
import {
  HomePageDocument,
  HomePageUserCreateDocument,
  HomePageUserCreateMutation,
  UserCreateInput,
} from "@core/graphql";
import { z } from "zod";

export const useCreateUserForm = () => {
  return useMutationForm<UserCreateInput, HomePageUserCreateMutation>({
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
};
