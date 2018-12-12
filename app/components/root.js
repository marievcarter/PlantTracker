import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Plants from './plants.js';

const Root = () => {
  return (
    <div>
      <NavLink to={'/plants'} className="navlink">
        PLANT TRACKER
      </NavLink>
      <NavLink to={'/'} className="navlink">
        PROFILE
      </NavLink>
      <main>
        <Switch>
          <Route path="/plants" component={Plants} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
