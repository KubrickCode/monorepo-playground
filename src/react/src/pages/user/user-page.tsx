import { Flex } from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

import { CreateUser } from "./components/create-user";
import { UserTable } from "./components/user-table";

export interface User {
  id: number;
  name: string;
}

export const UserPage = () => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    const { data } = await axios.get("/api");
    setUsers(data);
  };

  const saveData = async () => {
    await axios.post("/api", { name });
    await getData();
  };

  const updateData = async (id: number) => {
    if (!newName) alert("이름을 입력해주세요");
    await axios.put(`/api/${id}`, { name: newName });
    await getData();
  };

  const deleteData = async (id: number) => {
    await axios.delete(`/api/${id}`);
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

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
