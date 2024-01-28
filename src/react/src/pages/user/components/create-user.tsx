import { Button, Flex, FormLabel, Input, Text } from "@chakra-ui/react";

type Props = {
  saveData: () => void;
  setName: (name: string) => void;
};

export const CreateUser = ({ saveData, setName }: Props) => {
  return (
    <Flex gap={3}>
      <Input
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        w={40}
      />
      <Button onClick={saveData}>데이터 생성</Button>
    </Flex>
  );
};
