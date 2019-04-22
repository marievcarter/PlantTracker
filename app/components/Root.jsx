import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import {
  AddPlant,
  Gallery,
  SinglePlant,
  EditPlant,
  Dashboard,
} from '../components';
import CssBaseline from '@material-ui/core/CssBaseline';

const Root = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <nav>
          <NavLink to={'/dashboard'} className="navlink">
            DASHBOARD
          </NavLink>
          <NavLink to={'/gallery'} className="navlink">
            GALLERY
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
            <Route path="/gallery" component={Gallery} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Gallery} />
          </Switch>
        </main>
      </div>
    </React.Fragment>
  );
};

export default Root;
