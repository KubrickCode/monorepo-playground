import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "~/layout";
import { DataTableTestPage, HomePage } from "~/pages";

export const ROUTER_PATH = {
  HOME: "/",
  DATA_TABLE_TEST: "/data-table-test",
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
      </Routes>
    </Layout>
  </BrowserRouter>
);
