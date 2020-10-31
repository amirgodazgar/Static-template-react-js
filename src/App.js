import { CssBaseline, StylesProvider, ThemeProvider , jssPreset } from '@material-ui/core';

import React from 'react';
import './App.css';
import LandingPage from './layout/LandingPage';
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
        <LandingPage/>

      </StylesProvider>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
