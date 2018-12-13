import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import Plants from './plants.js';
import SinglePlant from './singlePlant.js';
import AddPlant from './addPlant.js';

const Root = () => {
  return (
    <div>
      <nav>
        <NavLink to={'/plants'} className="navlink">
          PLANT TRACKER
        </NavLink>
        <NavLink to={'/'} className="navlink">
          PROFILE
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/plants/addPlant" component={AddPlant} />
          <Route path="/plants/:plantId" component={SinglePlant} />
          <Route path="/plants" component={Plants} />
        </Switch>
      </main>
    </div>
  );
};

export default Root;
