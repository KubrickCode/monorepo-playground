import {
  Button,
  Flex,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import { User } from "../user-page";

type Props = {
  deleteData: (id: number) => void;
  setNewName: (name: string) => void;
  updateData: (id: number) => void;
  users: User[];
};

export const UserTable = ({
  deleteData,
  setNewName,
  updateData,
  users,
}: Props) => {
  return (
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
                <Flex gap={3}>
                  <Input
                    placeholder="이름"
                    w={40}
                    onChange={(e) => setNewName(e.target.value)}
                  />
                  <Button onClick={() => updateData(user.id)}>저장</Button>
                </Flex>
              </Td>
              <Td>
                <Button
                  backgroundColor="red.400"
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
  );
};
