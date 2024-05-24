import { BrowserRouter, Route, Routes } from "react-router-dom";

import { DataTableTestPage, HomePage } from "~/pages";

const PATH = {
  HOME: "/",
  DATA_TABLE_TEST: "/data-table-test",
};

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
      <Route path={PATH.DATA_TABLE_TEST} element={<DataTableTestPage />} />
    </Routes>
  </BrowserRouter>
);
