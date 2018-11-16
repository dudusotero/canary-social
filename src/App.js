import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Navbar from './components/navigation/Navbar';
import Dashboard from './components/dashboard/Dashboard';

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
  <Fragment>
    <CssBaseline />
    <MuiThemeProvider theme={theme}>
      <Navbar />
      <Dashboard />
    </MuiThemeProvider>
  </Fragment>
);

export default App;
