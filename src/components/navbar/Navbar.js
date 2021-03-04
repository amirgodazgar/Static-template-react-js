import React from 'react';
import {AppBar, makeStyles, Tabs , Tab, Toolbar, Hidden} from '@material-ui/core';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import {Link as SpyLink} from 'react-scroll';


console.log(SpyLink);


const useStyles = makeStyles(theme => ({
   
   navbarContainer : {
      width: '100%',
      flex:'3',
      
      [theme.breakpoints.down('sm')]: {
         height: '5rem'
      },
      
      [theme.breakpoints.down('xs')]: {
         height: '4rem'
      },
   },
   
   appBar : {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      backgroundColor: theme.palette.grey[50],
      color: theme.palette.primary.main,
      boxShadow:'none',
      
      [theme.breakpoints.down('sm')]: {
         flexDirection:'row',
         alignItems: 'center',
         justifyContent: 'space-evenly',
      },
   },
   
   toolbar : {
      flex:'4',
      [theme.breakpoints.down('sm')]: {
         fontWeight:'bold',
         flex:'1'
      },
      
   },
   
   tabs: {
      
      [theme.breakpoints.down('sm')]: {
         width : '100%',
      },
   },
   
   tab : {
      margin: '.5rem .3rem',
      borderRadius: '2rem',
      fontSize:'1rem',
      fontWeight:'bolder',
      padding:'0',
      opacity:'1',
      [theme.breakpoints.down('sm')]: {
         margin: '0 .1rem',
         fontSize: '.9rem',
         borderRadius: '5px',
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: '.7rem',
         margin: '0 .2rem',
      },
   },
   
   signUpTab : {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
   },
   
   iconButton : {
      height:'100%',
      flex:'1'
   }

   
}))

const Navbar = () => {
   const classes = useStyles();
   const [rotation, setRotation] = React.useState('vertical');
   
   React.useEffect(() => {
      const changeRotation = () => {
         
         if (window.screen.width < 960) {
            setRotation('horizontal');
            
         }else if (window.screen.width >= 960) {
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

         <Hidden only={['sm' , 'xs']} className={classes.iconButton}>
            <Logo/>
         </Hidden>

         <Toolbar variant="regular" disableGutters className={classes.toolbar}>
         
           <Tabs orientation={rotation} variant="fullWidth" value={false} className={classes.tabs}>
               <Tab 
               component={SpyLink} 
               to='getStart' activeClass="active" to="rules" spy={true} smooth={true} duration={1000}
               label="قوانین"  
               className={classes.tab} />

               <Tab 
               component={SpyLink} 
               to='getStart' activeClass="active" to="contactUs" spy={true} smooth={true} duration={1000}
               label="تماس با ما"  
               className={classes.tab} />

               <Tab 
               component={SpyLink} 
               to='getStart' activeClass="active" to="contactUs" spy={true} smooth={true} duration={1000}
               label="درباره ما"  
               className={classes.tab} />

               <Tab 
               to='/register' 
               component={Link} 
               label="ثبت نام"  
               className={`${classes.tab} ${classes.signUpTab}`} />

           </Tabs>

         </Toolbar>


     </AppBar>
     </div>
   )
}

export default Navbar
