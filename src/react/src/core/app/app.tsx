import { ThemeProvider } from "~/core/theme";
import { Layout } from "~/layout";

import { Router } from "../router";

export const App = () => (
  <ThemeProvider>
    <Layout>
      <Router />
    </Layout>
  </ThemeProvider>
);
