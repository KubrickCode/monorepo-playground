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
import { useState } from "react";

interface User {
  id: number;
  name: string;
}

export const App = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState<User[]>([]);

  const getData = async () => {
    const result = await axios.get("/api");
    setUsers(result.data);
  };

  const saveData = async () => {
    await axios.post("/api", { name });
  };

  return (
    <ChakraProvider>
      <Flex direction="column" gap={10}>
        <Box>
          <Button onClick={getData}>유저 불러오기</Button>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>id</Th>
                  <Th>name</Th>
                </Tr>
              </Thead>
              <Tbody>
                {users.map((user) => (
                  <Tr key={user.id}>
                    <Td>{user.id}</Td>
                    <Td>{user.name}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
        <Box>
          <Input onChange={(e) => setName(e.target.value)} placeholder="이름" />
          <Button onClick={saveData}>저장</Button>
        </Box>
      </Flex>
    </ChakraProvider>
  );
};
