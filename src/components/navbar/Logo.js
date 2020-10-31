import React from 'react';
import {makeStyles} from '@material-ui/core';
import {navbarLogo} from '../coverImage/Images';

const useStyles = makeStyles(theme => ({
   logoContainer : {
      flex:'1',
      width:'100%',
      height:'100%',
      display: 'flex',
      justifyContent:'center',
      alignItems:'center',

      [theme.breakpoints.down('xs')]: {
        flex: '0 0 20%',
      },
   },

   logoIcon : {
      height: '100%',
      width: '100%',
   }
}))

const Logo = () => {

   const classes = useStyles();

   return (
      <div className={classes.logoContainer}>
         <img className={classes.logoIcon} src={navbarLogo} alt="iran decorator logo"/>
      </div>
   )
}

export default Logo
