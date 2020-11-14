import React from "react";
import { DialogRegister } from "./components";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { appRoutes } from "./routes";

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
                render={(routeProps) => {
                  return (
                    <route.component title={route.title} {...routeProps} />
                  );
                }}
                exact={route.exact}
              />
            );
          })}
        </Switch>
      </BrowserRouter>
      <DialogRegister />
    </React.Fragment>
  );
};

export default App;
