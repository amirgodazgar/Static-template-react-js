import React from 'react';
import {AppBar, makeStyles, Tabs , Tab, Toolbar, Box} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const useStyles = makeStyles(theme => ({

   navbarContainer : {
      width: '100%',
      flex:'3',
      
      [theme.breakpoints.down('xs')]: {
         height: '5rem'
      },
   },
   
   appBar : {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: 'white',
      color: 'black',
      boxShadow:'none',

      [theme.breakpoints.down('xs')]: {
         flexDirection:'row',
         alignItems: 'center',
         justifyContent: 'space-evenly',
      },
   },

   toolbar : {
      flex:'4',
      [theme.breakpoints.down('xs')]: {
      },
      
   },

   tabs: {
      [theme.breakpoints.down('xs')]: {
         width : '100%',
      },
   },

   tab : {
      margin: '.5rem .2rem',
      borderRadius: '5rem',

      [theme.breakpoints.down('xs')]: {
         fontSize: '.7rem',
      },
   },

   iconButton : {
      marginLeft: 'auto',
      height:'100%',
      flex:'1'
   }


}))

const Navbar = () => {
   const classes = useStyles();
   const [rotation, setRotation] = React.useState('vertical');
   

   React.useEffect(() => {
      const changeRotation = () => {

         if (window.screen.width < 600) {
            setRotation('horizontal');

         }else if (window.screen.width >= 600) {
            setRotation('vertical');
         }
      };
         window.addEventListener('resize', changeRotation);

         return _ => {
            window.removeEventListener('resize' , changeRotation);
         }
   }, []);  


   return (
     <div className={classes.navbarContainer}>
     <AppBar position='static' className={classes.appBar}>

         <Box className={classes.iconButton}>
            <Logo/>
         </Box>

         <Toolbar variant="regular" disableGutters className={classes.toolbar}>
         
           <Tabs orientation={rotation} variant="fullWidth" value={false} className={classes.tabs}>
               <Tab label="قوانین"  className={classes.tab} />
               <Tab label="تماس با ما"  className={classes.tab} />
               <Tab label="درباره ما"  className={classes.tab} />
           </Tabs>

         </Toolbar>


     </AppBar>
     </div>
   )
}

export default Navbar
