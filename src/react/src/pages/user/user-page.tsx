import { Flex } from "@chakra-ui/react";

import { CreateUser } from "./components/create-user";
import { UserTable } from "./components/user-table";
import { useUserApi } from "./user-api";

export interface User {
  id: number;
  name: string;
}

export const UserPage = () => {
  const { deleteData, saveData, setName, setNewName, updateData, users } =
    useUserApi();

  return (
    <Flex direction="column" gap={10}>
      <CreateUser saveData={saveData} setName={setName} />
      <UserTable
        deleteData={deleteData}
        setNewName={setNewName}
        updateData={updateData}
        users={users}
      />
    </Flex>
  );
};
