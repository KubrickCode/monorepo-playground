import {
  ChakraProvider,
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
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
}

export const App = () => {
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    const result = await axios.get("/api");
    setUsers(result.data);
  };

  const saveData = async () => {
    await axios.post("/api", { name });
  };

  const updateData = async (id: number) => {
    if (!newName) alert("이름을 입력해주세요");
    await axios.put(`/api/${id}`, { name: newName });
    await getData();
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <ChakraProvider>
      <Flex direction="column" gap={10}>
        <Box>
          <Button onClick={getData}>유저 불러오기</Button>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>ID</Th>
                  <Th>이름</Th>
                  <Th>수정</Th>
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
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Input
            onChange={(e) => setName(e.target.value)}
            placeholder="이름"
            w={40}
          />
          <Button onClick={saveData}>저장</Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
