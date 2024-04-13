import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useFormContext } from "react-hook-form";

export type SubmitButtonProps = Omit<ButtonProps, "children"> & {
  children?: ReactNode;
};

export const SubmitButton = ({ children, ...otherProps }: ButtonProps) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <Button
      colorScheme="primary"
      isDisabled={isSubmitting}
      isLoading={isSubmitting}
      type="submit"
      width="full"
      {...otherProps}
    >
      {children || "저장"}
    </Button>
  );
};
