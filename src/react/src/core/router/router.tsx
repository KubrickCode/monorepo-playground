import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "~/layout";
import { DataTableTestPage, HomePage, I18nTestPage } from "~/pages";

export const ROUTER_PATH = {
  HOME: "/",
  DATA_TABLE_TEST: "/data-table-test",
  I18N_TEST: "/i18n-test",
};

export const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route path={ROUTER_PATH.HOME} element={<HomePage />} />
        <Route
          path={ROUTER_PATH.DATA_TABLE_TEST}
          element={<DataTableTestPage />}
        />
        <Route path={ROUTER_PATH.I18N_TEST} element={<I18nTestPage />} />
      </Routes>
    </Layout>
  </BrowserRouter>
);
