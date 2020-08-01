import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';


import HelloComp from './components/hello/HelloComp';
import HeroList from './components/hero/HeroList';
import HeroDetail from './components/herodetail/HeroDetail';
import DashBoard from './components/dashboard/DashBoard';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact={true} path="/" component = {DashBoard} />
                <Route path = "/hello"       component = {HelloComp} />
                <Route path = "/dashboard"   component = {DashBoard} />
                <Route path = "/heroes"      component = {HeroList} />
                <Route path = "/hero/:id"    component = {HeroDetail} />
                {/* Not Found */}
                <Route component={() => <Redirect to="/" />} />
            </Switch>
        </BrowserRouter>
    );
};
  
export default Router;