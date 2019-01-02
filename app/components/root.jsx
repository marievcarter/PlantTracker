import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Plants from './plants';
import SinglePlant from './singlePlant';
import AddPlant from './addPlant';
import EditPlant from './editPlant';
import Profile from './profile';

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/profile'} className="navlink">
          PLANT TRACK
        </NavLink>
        <NavLink to={'/profile'} className="navlink">
          HOME
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
          <Route path="/profile" component={Profile} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
