import { Flex, Switch, Text } from "@chakra-ui/react";

import { ApiMode } from "../user-page";

type Props = {
  setApiMode: (mode: ApiMode) => void;
};

export const ApiSwtich = ({ setApiMode }: Props) => (
  <Flex gap={3}>
    <Text>Rest API</Text>
    <Switch
      size="lg"
      onChange={(e) => {
        setApiMode(e.target.checked ? "graphql" : "rest");
      }}
    />
    <Text>GraphQL</Text>
  </Flex>
);
