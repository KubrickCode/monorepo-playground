import { client, HomePageDocument } from "@core/graphql";

export const getUsers = async () => {
  return await client.query({ query: HomePageDocument });
};
