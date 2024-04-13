import { PropsWithChildren } from "react";

import { FormLabel, FormLabelProps } from "@chakra-ui/react";

export const labelStyle = {
  alignItems: "center",
  display: "flex",
  fontSize: "xs",
  fontWeight: "semibold",
  height: 6,
  margin: 0,
};

export type LabelProps = FormLabelProps & PropsWithChildren;

export const Label = ({ children, ...otherProps }: LabelProps) => {
  return (
    <FormLabel {...labelStyle} {...otherProps}>
      {children}
    </FormLabel>
  );
};
