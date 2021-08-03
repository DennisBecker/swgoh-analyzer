import React from "react";
import { Switch, Redirect } from "react-router-dom";
import MainLayoutRoute from "../../layout/MainLayout";
import HomePage from "../../pages/HomePage";
import F2PGuide from "../../pages/F2PGuide";

const Router = () => (
  <Switch>
    <Redirect exact={true} from={"/"} to={"/home"}/>
    <MainLayoutRoute path="/home" component={HomePage} />
    <MainLayoutRoute path="/f2pguide" component={F2PGuide} />
  </Switch>
);

export default Router;