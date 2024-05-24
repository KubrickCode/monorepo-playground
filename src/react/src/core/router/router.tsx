import { BrowserRouter, Route, Routes } from "react-router-dom";

import { HomePage } from "~/pages";

const PATH = {
  HOME: "/",
};

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path={PATH.HOME} element={<HomePage />} />
    </Routes>
  </BrowserRouter>
);
