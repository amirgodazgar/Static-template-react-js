import React from 'react';
import {TextField ,makeStyles , Button, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme =>({

   form : {
      display:'flex',
      flexDirection: 'column',
      justifyContent:'center',
      alignItems: 'center',
      width:'90%',
      padding:'1rem',
   },
   
   inputBox : {
      margin: '1rem',
      width:'75%',
      display:'flex',
      justifyContent:'space-between',

      [theme.breakpoints.down('xs')]: {
         flexDirection:'column',
         margin:'0'
      }
   },
 
   input : {
      color: theme.palette.grey[50],
   },

   inputLabel : {
      color: theme.palette.grey[400],
   },
   
   button : {
      margin: '2rem 0',
      color: theme.myPalette.fontDark,
      width: '20%'
   },
   
   header : {
      [theme.breakpoints.down('xs')]: {
         fontSize:'1.8rem',
      }
   },

   subTitle : {
      [theme.breakpoints.down('xs')]: {
         fontSize:'.7rem',
      }
   },

}));


const SuggestionsForm = () => {
   const classes = useStyles();

   return ( 
      <form className={classes.form} >
        
            <Typography className={classes.header} variant='h3' gutterBottom={true} data-aos="zoom-up" >پیشنهادات و انتقادات</Typography>
            <Typography className={classes.subTitle} variant='subtitle2' gutterBottom={true} data-aos="zoom-out" >برای بهبود و ارتقای سطح کیفی خدمت رسانی ایران دکوراتور , نظرات و پیشنهادات خود را با ما درمیان بگذارید</Typography>

         <div className={classes.inputBox} data-aos="flip-up">
          <TextField 
            color='secondary' 
            InputProps={{className : classes.input}}
            InputLabelProps={{className: classes.inputLabel}} 
            type='text' label="نام"  
            />

          <TextField color='secondary'
            InputProps={{className : classes.input}}
            InputLabelProps={{className: classes.inputLabel}}
            type='text' label="نام خانوادگی"
            />
         </div>

         <div className={classes.inputBox} data-aos="flip-up">
          <TextField 
            color='secondary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='email' label="ایمیل"  />
          <TextField color='secondary' 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='tel' label="شماره موبایل"  />
         </div>
          <TextField 
            color='secondary' 
            multiline 
            InputProps={{className : classes.input}} 
            InputLabelProps={{className: classes.inputLabel}} 
            type='text' fullWidth={true}  label="متن پیام" 
            data-aos="flip-up"
             />

          <Button className={classes.button} variant="contained" data-aos="flip-down">ارسال</Button>
      </form>
   )
}

export default SuggestionsForm
