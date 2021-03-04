import React from 'react';
import './App.css';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import { CssBaseline, StylesProvider, ThemeProvider , jssPreset } from '@material-ui/core';
import LandingPage from './layout/LandingPage';
import Register from '../src/layout/Register';

import {theme} from './components/theme/Theme';

//Jss for Rtl configuration
import { create } from 'jss';
import rtl from 'jss-rtl';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
//----------------------------------------------------------------

function App() {
  return (
    <React.Fragment>

      <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
      <CssBaseline/>

    <Router>
    <Switch>
     
      <Route path="/" exact component={LandingPage}/>
      <Route path="/register" component={Register}/>

    </Switch>
    </Router>
    
      </StylesProvider>
      </ThemeProvider>

    </React.Fragment>
  );
}

export default App;
