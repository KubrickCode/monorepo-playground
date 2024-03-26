import axios from "axios";
import { client } from "@/app/core/graphql/graphql";
import { HomePageDocument } from "@/app/core/graphql/generated";

export const HomeAPI = async () => {
  const { data: users } = await axios.get("http://localhost:3001/api/users");
  const { data: gqlUsers } = await client.query({ query: HomePageDocument });

  return { users, gqlUsers };
};
