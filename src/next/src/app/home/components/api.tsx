import { useSuspenseQuery } from "@apollo/client";
import { useMutationForm } from "@core/form";
import {
  HomePageDocument,
  HomePageUserCreateDocument,
  HomePageUserCreateMutation,
  UserCreateInput,
} from "@core/graphql";
import { z } from "zod";

export const useCreateUserMutation = () => {
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

export const useGetUsersQuery = () => {
  const { data } = useSuspenseQuery(HomePageDocument);
  return data.users;
};
