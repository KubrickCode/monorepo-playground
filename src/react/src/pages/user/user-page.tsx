import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { CreateUser } from "./components/create-user";
import { UserTable } from "./components/user-table";
import { useUserApi } from "./user-api";
import { ApiSwtich } from "./components/api-switch";
import axios from "axios";

export interface User {
  id: number;
  name: string;
}

export type ApiMode = "rest" | "graphql";

export const UserPage = () => {
  const [apiMode, setApiMode] = useState<ApiMode>("rest");
  const { deleteData, saveData, setName, setNewName, updateData, users } =
    useUserApi(apiMode);

  const getGoData = async () => {
    const { data } = await axios.get("/go");
    console.log(data);
  };

  return (
    <Flex direction="column" gap={10}>
      <Button onClick={getGoData}>Go 테스트</Button>
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
