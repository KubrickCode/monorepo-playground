"use client";

import { useGetUsersQuery } from "./api";

export const Users = () => {
  const users = useGetUsersQuery();

  return users.map((user) => (
    <div key={user.id}>
      <p>{user.name}</p>
    </div>
  ));
};
