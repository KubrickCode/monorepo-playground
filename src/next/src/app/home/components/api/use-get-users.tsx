import { useSuspenseQuery } from "@apollo/client";
import { HomePageDocument } from "@core/graphql";

export const useGetUsers = () => {
  const { data } = useSuspenseQuery(HomePageDocument);
  return data.users;
};
