import { Box, BoxProps } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

export type FieldProps = BoxProps & PropsWithChildren;

export const Field = ({ children, ...otherProps }: FieldProps) => {
  return <Box {...otherProps}>{children}</Box>;
};
