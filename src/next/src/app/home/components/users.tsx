"use client";

import { useSuspenseQuery } from "@apollo/client";
import { HomePageDocument } from "@core/graphql";

export const Users = () => {
  const { data } = useSuspenseQuery(HomePageDocument);

  return data.users.map((user) => (
    <div key={user.id}>
      <p>{user.name}</p>
    </div>
  ));
};
