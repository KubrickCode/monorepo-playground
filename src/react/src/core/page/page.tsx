import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Page = ({ children }: Props) => {
  return <Box p={10}>{children}</Box>;
};
