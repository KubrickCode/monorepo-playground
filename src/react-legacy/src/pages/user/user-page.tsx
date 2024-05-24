import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { Page } from "~/core/page";

import { CreateUser } from "./components/create-user";
import { UserTable } from "./components/user-table";
import { useUserApi } from "./user-api";
import { ApiSwtich } from "./components/api-switch";

export interface User {
  id: number;
  name: string;
}

export type ApiMode = "restNest" | "graphqlNest" | "restFiber";

export const UserPage = () => {
  const [apiMode, setApiMode] = useState<ApiMode>("restNest");
  const { deleteData, saveData, setName, setNewName, updateData, users } =
    useUserApi(apiMode);

  return (
    <Page>
      <Flex direction="column" gap={10}>
        <Link to="/">
          <Button w="full">Go To Main</Button>
        </Link>
        <ApiSwtich apiMode={apiMode} setApiMode={setApiMode} />
        <CreateUser saveData={saveData} setName={setName} />
        <UserTable
          deleteData={deleteData}
          setNewName={setNewName}
          updateData={updateData}
          users={users}
        />
      </Flex>
    </Page>
  );
};
