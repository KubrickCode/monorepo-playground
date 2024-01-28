import { Flex, Radio, RadioGroup } from "@chakra-ui/react";

import { ApiMode } from "../user-page";

type Props = {
  apiMode: ApiMode;
  setApiMode: (mode: ApiMode) => void;
};

export const ApiSwtich = ({ apiMode, setApiMode }: Props) => (
  <RadioGroup onChange={setApiMode} value={apiMode}>
    <Flex gap={3}>
      <Radio value="restNest">Rest API - Nest</Radio>
      <Radio value="graphqlNest">GraphQL - Nest</Radio>
      <Radio value="restFiber">Rest API - Fiber</Radio>
    </Flex>
  </RadioGroup>
);
