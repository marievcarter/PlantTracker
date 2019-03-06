import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Plants from './plants';
import SinglePlant from './singlePlant';
import AddPlant from './addPlant';
import EditPlant from './editPlant';
import Dashboard from './dashboard';

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/dashboard'} className="navlink">
          DASHBOARD
        </NavLink>
        <NavLink to={'/plants'} className="navlink">
          COLLECTION
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/plants/addPlant" component={AddPlant} />
          <Route
            exact
            path="/plants/:plantId/editPlant"
            component={EditPlant}
          />
          <Route path="/plants/:plantId" component={SinglePlant} />
          <Route path="/plants" component={Plants} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Dashboard} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
