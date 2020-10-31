import React from 'react';
import {TextField ,makeStyles , Button} from '@material-ui/core';

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
   }
}))


const SuggestionsForm = () => {
   const classes = useStyles();

   return (
      <form className={classes.form} >
         <div className={classes.inputBox}>
          <TextField className={classes.input} color='secondary' InputLabelProps={{className: classes.inputLabel}} type='text' label="نام"  />
          <TextField className={classes.input} color='secondary' InputLabelProps={{className: classes.inputLabel}} type='text' label="نام خانوادگی"  />
         </div>

         <div className={classes.inputBox}>
          <TextField className={classes.input} color='secondary' InputLabelProps={{className: classes.inputLabel}} type='email' label="ایمیل"  />
          <TextField className={classes.input} color='secondary' InputLabelProps={{className: classes.inputLabel}} type='tel' label="شماره موبایل"  />
         </div>
          <TextField className={classes.input} color='secondary' multiline InputLabelProps={{className: classes.inputLabel}} type='text' fullWidth={true}  label="متن پیام"  />
          <Button className={classes.button} variant="contained">ارسال</Button>
      </form>
   )
}

export default SuggestionsForm
