import { PropsWithChildren } from "react";

import { AppShell } from "~/core/app-shell";
import { Box } from "~/core/layout";

import { LayoutSidebar } from "./sidebar";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <AppShell height="100vh" padding="1rem" sidebar={<LayoutSidebar />}>
      <Box as="main" overflowY="auto">
        {children}
      </Box>
    </AppShell>
  );
};
