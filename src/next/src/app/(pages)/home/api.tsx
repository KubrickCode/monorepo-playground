import axios from "axios";
import { gql } from "@apollo/client";
import { client } from "@/app/core/graphql/graphql";

const query = gql`
  query Home {
    users {
      name
    }
  }
`;

export const HomeAPI = async () => {
  const { data: users } = await axios.get("http://localhost:3001/api/users");
  const { data: gqlUsers } = await client.query({ query });

  return { users, gqlUsers };
};
