import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { Controller } from "react-hook-form";

import { FieldError } from "./field-error";

export type InputProps = ChakraInputProps & {
  name: string;
  showFieldError?: boolean;
};

export const Input = ({
  name,
  showFieldError = true,
  ...otherProps
}: InputProps) => {
  return (
    <Controller
      name={name}
      render={({
        field: { onChange, onBlur, ref, value },
        fieldState: { invalid },
      }) => {
        return (
          <>
            <ChakraInput
              isInvalid={invalid}
              onChange={onChange}
              value={typeof value !== "undefined" ? value : ""}
              {...otherProps}
            />
            {showFieldError && <FieldError name={name} />}
          </>
        );
      }}
    />
  );
};
