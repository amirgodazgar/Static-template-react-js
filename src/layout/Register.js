import React from 'react';
import {Button, makeStyles , AppBar} from '@material-ui/core';
import RegisterCard from '../components/card/RegisterCard';
import RegisterForm from '../components/forms/RegisterForm';
import {Link} from 'react-router-dom';


const useStyles = makeStyles(theme => ({

   container : {
      overflow:'hidden',
      border:'1px solid black',
      backgroundColor: theme.palette.primary.main,
      minHeight:'100vh',
      width:'100%',
      display:'flex',
      flexDirection:'column',
      justifyContent:'flex-end',
      alignItems:'center',
      [theme.breakpoints.up('sm')] : {
         justifyContent:'center',
      }
      
   },
   registerWrapper : {
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      backgroundColor: theme.palette.grey[50],
      overflow:'hidden',
      boxShadow: theme.shadows[15],
      borderRadius:'0',
      minHeight:'93vh',
      minWidth:'100%',
      margin:'0 auto',

      [theme.breakpoints.up('sm')] : {
         minHeight:'80vh',
         minWidth:'95%',
         flexDirection:'row',
         borderRadius:'5px',
         margin:'7vh auto .5rem auto',
      },
      [theme.breakpoints.up('md')] : {
         minWidth:'85%',
         margin:'7vh auto .5rem auto',
      }
   },
   infoBox : {
      height:'30vh',
      width:'100%',
      borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
      [theme.breakpoints.up('sm')] : {
         height:'85vh',
         width:'50%',
         borderRight: '1px solid rgba(0, 0, 0, 0.15)',
         borderBottom: 'none',
      },
   },
   registerBox : {
      height:'63vh',
      width:'100%',
      [theme.breakpoints.up('sm')] : {
         height:'85vh',
         width:'50%',
      },
   },

   appBar : {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      height:'7vh',
   },

   linkButton : {
      width:'50%',
      [theme.breakpoints.up('sm')] : {
         width:'30%',
      },
   }
}));

const Register = () => {
   const classes = useStyles();

   return (
      <div className={classes.container} >
         
         <AppBar color='primary' className={classes.appBar} >
            <Button component={Link} to="/" color="secondary" variant='outlined' size='medium' className={classes.linkButton}>برگشت به صفحه اصلی</Button>
         </AppBar>

         <div className={classes.registerWrapper} data-aos="zoom-in" data-aos-duration="1000">

            <div className={classes.infoBox}>
               <RegisterCard/>
            </div>

            <div className={classes.registerBox}>
               <RegisterForm/>
            </div>

         </div>
      </div>
   )
}

export default Register
