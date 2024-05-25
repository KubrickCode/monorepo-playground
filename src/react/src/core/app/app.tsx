import { ThemeProvider } from "~/core/theme";

import { Router } from "../router";

export const App = () => (
  <ThemeProvider>
    <Router />
  </ThemeProvider>
);
