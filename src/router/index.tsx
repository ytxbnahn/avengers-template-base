import React, { lazy, Suspense } from "react";
import { Route, withRouter,Switch,Redirect } from "react-router-dom";

const Demo = lazy(() => import("../containers/demo/index"));

const RouterMap: React.FC = () => {
  return (
    <Suspense fallback={<div style={{ height: "200px", width: "100%" }} />}>
        <Switch>
            <Route path="/demo" component={Demo}></Route>
            <Route path="/404" component={()=><div>404</div>}></Route>
            <Redirect to="/404"></Redirect>
        </Switch>
    </Suspense>
  );
};
export default withRouter(RouterMap);
