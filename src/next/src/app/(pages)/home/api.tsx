import { client } from "@/app/core/graphql/graphql";
import { HomePageDocument } from "@/app/core/graphql/generated";

export const getUsers = async () => {
  return await client.query({ query: HomePageDocument });
};
