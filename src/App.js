import React from "react";
import { DialogRegister } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appRoutes } from "./routes";

/**
 * Komponen App untuk basic routing pada web/app
 */
const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          {appRoutes.map((route, index) => {
            return (
              <Route
                key={index}
                title={route.title}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            );
          })}
        </Switch>
        <DialogRegister />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
