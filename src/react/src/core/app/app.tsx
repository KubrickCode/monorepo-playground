import { ThemeProvider } from "~/core/theme";

import { Router } from "../router";
import { I18nProvider } from "../i18n/context";

export const App = () => (
  <I18nProvider>
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  </I18nProvider>
);
