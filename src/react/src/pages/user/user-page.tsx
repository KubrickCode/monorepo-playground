import { Flex } from "@chakra-ui/react";
import { useState } from "react";

import { CreateUser } from "./components/create-user";
import { UserTable } from "./components/user-table";
import { useUserApi } from "./user-api";
import { ApiSwtich } from "./components/api-switch";

export interface User {
  id: number;
  name: string;
}

export type ApiMode = "rest" | "graphql";

export const UserPage = () => {
  const [apiMode, setApiMode] = useState<ApiMode>("rest");
  const { deleteData, saveData, setName, setNewName, updateData, users } =
    useUserApi(apiMode);

  return (
    <Flex direction="column" gap={10}>
      <ApiSwtich setApiMode={setApiMode} />
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
