import { Box, Button, Input, Text } from "@chakra-ui/react";

type Props = {
  saveData: () => void;
  setName: (name: string) => void;
};

export const CreateUser = ({ saveData, setName }: Props) => {
  return (
    <Box>
      <Text>유저 생성</Text>
      <Input
        onChange={(e) => setName(e.target.value)}
        placeholder="이름"
        w={40}
      />
      <Button onClick={saveData}>저장</Button>
    </Box>
  );
};
