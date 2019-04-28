import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch, NavLink, withRouter } from 'react-router-dom';
import {
  AddPlant,
  Gallery,
  SinglePlant,
  EditPlant,
  Dashboard,
  LogIn,
} from '../components';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider } from '@material-ui/styles';
import { green } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// const theme = createMuiTheme({
//   palette: {
//     primary: green,
//   },
// });

const Root = props => {
  console.log(props);
  const { isLoggedIn } = props;
  return (
    <React.Fragment>
      <CssBaseline />
      {/* <MuiThemeProvider theme={theme}> */}
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
            <Route path="/login" component={LogIn} />
            <Route exact path="/plants/addPlant" component={AddPlant} />
            <Route
              exact
              path="/gallery/:plantId/editPlant"
              component={EditPlant}
            />
            <Route path="/gallery/:plantId" component={SinglePlant} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={Gallery} />
            {/* {isLoggedIn && (
              <Switch>
                <Route exact path="/plants/addPlant" component={AddPlant} />
                <Route
                  exact
                  path="/plants/:plantId/editPlant"
                  component={EditPlant}
                />
                <Route path="/gallery/:plantId" component={SinglePlant} />
                <Route path="/gallery" component={Gallery} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/" component={Gallery} />
              </Switch>
            )} */}
          </Switch>
        </main>
      </div>
      {/* </MuiThemeProvider> */}
    </React.Fragment>
  );
};

const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.userReducer.id,
  };
};

export default withRouter(
  connect(
    mapState,
    null
  )(Root)
);
