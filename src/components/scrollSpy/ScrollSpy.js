import React from 'react';
import {Hidden, makeStyles} from '@material-ui/core';
import {Link} from 'react-scroll';

const useStyles = makeStyles({
   nav : {
      width :'2rem',
      height: '8rem',
      // border:'1px solid black',
      margin:'0',

      position:'fixed',
      top:'40%',
      right:'1rem',
   },
   listItems : {
      height:'100%',
      width : '100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      listStyle:'none',
      margin:'0',
      padding:'0',
     
   },

   button :{
      borderRadius:'50%',
      border:'1px solid #30303085',
      backgroundColor: '#fafafa75',
      margin:'.1rem 0',
      padding:'.5rem',
      outline:'none',
      
      '&&:hover' : {
         cursor:'pointer',
         backgroundColor:'#30303075',
         border:'1px solid #fafafa85',

      }
   }

});

const ScrollSpy = () => {
   const classes = useStyles();

   return (
      <Hidden only={['xs','sm']}>
         <nav className={classes.nav}>
            <ul className={classes.listItems}>

            <Link
            className={classes.button}
            activeClass="active" to="introduce" spy={true} smooth={true} duration={1000}
            />

            <Link
            className={classes.button}
            activeClass="active" to="exhibition" spy={true} smooth={true} duration={1000}
            />

            <Link
            className={classes.button}
            activeClass="active" to="advantages" spy={true} smooth={true} duration={1000}
            />

            <Link
            className={classes.button}
            activeClass="active" to="rules" spy={true} smooth={true} duration={1000}
            />

            <Link
            className={classes.button}
            activeClass="active" to="contactUs" spy={true} smooth={true} duration={1000}
            />

            </ul>
         </nav>
      </Hidden>
   )
}

export default ScrollSpy
