import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom';
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

const Root = () => {
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
            <Route exact path="/plants/addPlant" component={AddPlant} />
            <Route
              exact
              path="/plants/:plantId/editPlant"
              component={EditPlant}
            />
            <Route path="/gallery/:plantId" component={SinglePlant} />
            <Route path="/gallery" component={Gallery} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/" component={LogIn} />
          </Switch>
        </main>
      </div>
      {/* </MuiThemeProvider> */}
    </React.Fragment>
  );
};

export default Root;
