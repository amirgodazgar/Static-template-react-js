import React from 'react';
import {IconButton ,makeStyles} from '@material-ui/core';
import {Telegram , WhatsApp , Instagram } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
   wrapper : {
      display:'flex', 
      flexDirection:'column' , 
      justifyContent:'center' , 
      alignItems:'center' , 
      width:'50%',
      [theme.breakpoints.down('sm')] : {
         width:'40%',
      },
      [theme.breakpoints.down('xs')] : {
         width:'90%',
      }
   }
}))
const SocialMedia = () => {
   const classes = useStyles();
   return (
      <div  className={classes.wrapper} data-aos="zoom-out">
         <h2 >شبکه های اجتماعی</h2>
         <div style={{ display:'flex' , justifyContent:'space-evenly' , width:'100%' }}>
            <IconButton >
               <Telegram fontSize="large" color='primary'/>
            </IconButton>
            <IconButton >
               <WhatsApp fontSize="large" color='primary'/>
            </IconButton>
            <IconButton >
               <Instagram fontSize="large" color='primary'/>
            </IconButton>
         </div>
      </div>
   )
}

export default SocialMedia
