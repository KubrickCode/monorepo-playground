import { client } from "@/core/graphql/graphql";
import { HomePageDocument } from "@/core/graphql/generated";

export const getUsers = async () => {
  return await client.query({ query: HomePageDocument });
};
