"use client";

import { useGetUsers } from "./api/use-get-users";

export const Users = () => {
  const users = useGetUsers();

  return users.map((user) => (
    <div key={user.id}>
      <p>{user.name}</p>
    </div>
  ));
};
