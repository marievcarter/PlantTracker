import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
import { AddPlant, Gallery, SinglePlant, EditPlant, Dashboard } from '.';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

const styles = theme => ({});

const Root = () => {
  return (
    <React.Fragment>
      <CssBaseline />
      <div>
        <nav>
          <NavLink to={'/gallery'} className="navlink">
            GALLERY
          </NavLink>
          <NavLink to={'/dashboard'} className="navlink">
            SCHEDULE
          </NavLink>
          <NavLink to={'/dashboard'} className="navlink">
            TRENDS
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

export default withStyles(styles)(Root);
