import React from 'react';

import {TextField ,makeStyles , Button, Typography, SvgIcon} from '@material-ui/core';

const useStyles = makeStyles(theme =>({

   form : {
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      width:'100%',
      padding:'1rem',
   },
   
   inputBox : {
      width:'100%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      margin:'0',
      [theme.breakpoints.up('sm')] : {
         flexDirection:'column',
         width:'85%',
      },
   },

   inputField : {
      width:'45%',
      [theme.breakpoints.up('sm')] : {
         width:'90%',
         margin:'.25rem '
      },
   },
 
   input : {
      color: theme.palette.primary.main,
   },
   
   inputLabel : {
      color: theme.palette.grey[500],
      fontSize:'.75rem ',
      [theme.breakpoints.up('sm')] : {
         fontSize:'.85rem ',
      },
      [theme.breakpoints.up('md')] : {
         fontSize:'1rem ',
      }
   },
   
   button : {
      margin: '1.5rem auto',
      color: theme.myPalette.fontLight,
      width: '30%',
      [theme.breakpoints.up('sm')] : {
         width: '50%',
         margin: '2rem auto',
      },
   },

   externalLogin : {
      margin: '.5rem auto',
      color: theme.myPalette.fontDark,
      width: '75%',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',

      [theme.breakpoints.up('sm')] : {
         width: '85%',
      },
      [theme.breakpoints.up('md')] : {
         width: '65%',
      },
   },

   svgIcon : {
      height:'2rem',
      width : '2rem',
   },
   
   header : {
      fontSize:'1.2rem',
      fontWeight:'bold',
      margin : "1.3rem 0",
      [theme.breakpoints.up('sm')] : {
         fontSize:'1.3rem',
      },
      [theme.breakpoints.up('md')] : {
         fontSize:'1.5rem',
      },
   },

}))

const RegisterForm = () => {
   const classes = useStyles();

   return ( 
      <form className={classes.form} 
      
            data-aos="zoom-out"
            data-aos-duration="900"
      >

         <div data-aos="zoom-in" >
            <Typography className={classes.header} variant='h3' gutterBottom={true}> ثبت نام در ایران دکوراتور </Typography>
         </div>

         <div className={classes.inputBox}  >
          <TextField 
            className={classes.inputField}
            color='primary' 
            InputProps={{className : classes.input}}
            InputLabelProps={{className: classes.inputLabel}} 
            type='text' label="نام"  
            />
          <TextField
            className={classes.inputField}
            color='primary'
            className={classes.inputField}
            InputProps={{className : classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            type='text' label="نام خانوادگی"
            />
         </div>

         <div className={classes.inputBox}  >
          <TextField 
            className={classes.inputField}
            color='primary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='email' label="ایمیل"  />
          <TextField
            className={classes.inputField}
            color='primary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='tel' label="شماره موبایل"  />
         </div>

         <div className={classes.inputBox} >
          <TextField 
            className={classes.inputField}
            color='primary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='email' label="رمز"  />
          <TextField
            className={classes.inputField}
            color='primary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='tel' label=" تکرار رمز"  />
         </div>
         
          <Button className={classes.button} variant="contained" color='primary' >ثبت نام</Button>

          <Button className={classes.externalLogin} variant="contained">

            <Typography variant='body2'>
               ثبت نام از طریق گوگل 
            </Typography>

            <svg viewBox="0 0 533.5 544.3" xmlns="http://www.w3.org/2000/svg" className={classes.svgIcon}>
               <path d="M533.5 278.4c0-18.5-1.5-37.1-4.7-55.3H272.1v104.8h147c-6.1 33.8-25.7 63.7-54.4 82.7v68h87.7c51.5-47.4 81.1-117.4 81.1-200.2z" fill="#4285f4"/>
               <path d="M272.1 544.3c73.4 0 135.3-24.1 180.4-65.7l-87.7-68c-24.4 16.6-55.9 26-92.6 26-71 0-131.2-47.9-152.8-112.3H28.9v70.1c46.2 91.9 140.3 149.9 243.2 149.9z" fill="#34a853"/>
               <path d="M119.3 324.3c-11.4-33.8-11.4-70.4 0-104.2V150H28.9c-38.6 76.9-38.6 167.5 0 244.4l90.4-70.1z" fill="#fbbc04"/>
               <path d="M272.1 107.7c38.8-.6 76.3 14 104.4 40.8l77.7-77.7C405 24.6 339.7-.8 272.1 0 169.2 0 75.1 58 28.9 150l90.4 70.1c21.5-64.5 81.8-112.4 152.8-112.4z" fill="#ea4335"/>
            </svg>
           
           </Button>
      </form>
   )
}

export default RegisterForm
