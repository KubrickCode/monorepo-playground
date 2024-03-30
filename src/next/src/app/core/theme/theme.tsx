"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";

const colors = {
  primary: {
    "50": "#f7f7fe",
    "100": "#e0ddfa",
    "200": "#c4c0f5",
    "300": "#a39cf0",
    "400": "#9088ed",
    "500": "#766ce9",
    "600": "#635aca",
    "700": "#4f48a3",
    "800": "#433d89",
    "900": "#302c63",
  },
};

const chakraTheme = extendTheme({
  colors,
  styles: {
    global: {
      body: {
        backgroundColor: "white",
        fontSize: "md",
        color: "gray.800",
      },
    },
  },
  components: {
    Input: {
      defaultProps: {
        focusBorderColor: "primary.500",
      },
    },
    Button: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
    Radio: {
      defaultProps: {
        colorScheme: "primary",
      },
    },
  },
});

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>;
};
