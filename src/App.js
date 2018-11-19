import React, { Fragment } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './components/layout/Navbar';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Dashboard from './components/dashboard/Dashboard';
import Configurations from './components/configurations/Configurations';

const theme = createMuiTheme({
  palette: {
    type: 'light'
  },
  spacing: {
    unit: 16
  },
  shape: {
    borderRadius: 0
  },
  typography: {
    useNextVariants: true
  }
});

const App = () => (
  <BrowserRouter>
    <Fragment>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/configurations" component={Configurations} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </MuiThemeProvider>
    </Fragment>
  </BrowserRouter>
);

export default App;
