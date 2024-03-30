"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { ReactNode } from "react";
import { SaasProvider, theme as baseTheme } from "@saas-ui/react";
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react";

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

const padding = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  /**
   * 5xs = "2px"
   */
  "5xs": "0.125rem",
  /**
   * 4xs = "4px"
   */
  "4xs": "0.25rem",
  /**
   * 3xs = "6px"
   */
  "3xs": "0.375rem",
  /**
   * 2xs = "8px"
   */
  "2xs": "0.5rem",
  /**
   * xs = "10px"
   */
  xs: "0.625rem",
  /**
   * sm = "12px"
   */
  sm: "0.75rem",
  /**
   * md = "16px"
   */
  md: "1rem",
  /**
   * lg = "20px"
   */
  lg: "1.25rem",
  /**
   * xl = "24px"
   */
  xl: "1.5rem",
  /**
   * 2xl = "32px"
   */
  "2xl": "2rem",
  /**
   * 3xl = "40px"
   */
  "3xl": "2.5rem",
  "4xl": "3rem",
  "5xl": "4rem",
};

export const theme = {
  colors,
  padding,
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

const saasTheme = extendTheme({ colors }, baseTheme);

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  return (
    <SaasProvider theme={saasTheme}>
      <EmotionThemeProvider theme={theme}>
        <ChakraProvider theme={chakraTheme}>{children}</ChakraProvider>
      </EmotionThemeProvider>
    </SaasProvider>
  );
};
