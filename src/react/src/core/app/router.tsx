import _ from "lodash";
import { createElement } from "react";
import * as ReactRouter from "react-router-dom";

import RestPage from "../../pages/rest";

const routes = {
  "/rest": RestPage,
};

export const Routes = () => {
  return (
    <ReactRouter.Routes>
      {_.map(routes, (component, path) => (
        <ReactRouter.Route
          key={path}
          path={path}
          element={createElement(component)}
        />
      ))}
    </ReactRouter.Routes>
  );
};

export const Router = ReactRouter.BrowserRouter;
