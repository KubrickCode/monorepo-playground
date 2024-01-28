import {
  Button,
  Input,
  Box,
  Table,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Flex,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export const RestPage = () => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    const result = await axios.get("/api");
    setUsers(result.data);
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
      <Box>
        <Text>유저 생성</Text>
        <Input
          onChange={(e) => setName(e.target.value)}
          placeholder="이름"
          w={40}
        />
        <Button onClick={saveData}>저장</Button>
      </Box>
      <Box>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>이름</Th>
                <Th>수정</Th>
                <Th>삭제</Th>
              </Tr>
            </Thead>
            <Tbody>
              {users.map((user) => (
                <Tr key={user.id}>
                  <Td>{user.id}</Td>
                  <Td>{user.name}</Td>
                  <Td>
                    <Input
                      placeholder="이름"
                      w={40}
                      onChange={(e) => setNewName(e.target.value)}
                    />
                    <Button onClick={() => updateData(user.id)}>저장</Button>
                  </Td>
                  <Td>
                    <Button
                      colorScheme="red"
                      onClick={() => deleteData(user.id)}
                    >
                      삭제
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
