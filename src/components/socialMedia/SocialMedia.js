import React from 'react';
import {IconButton} from '@material-ui/core';
import {Telegram , WhatsApp , Instagram } from '@material-ui/icons';

const SocialMedia = () => {
   return (
      <div style={{display:'flex' , flexDirection:'column' , justifyContent:'center' , alignItems:'center' , width:'70%'}}>
         <h2>شبکه های اجتماعی</h2>
         <div style={{ display:'flex' , justifyContent:'space-evenly' , width:'100%' }}>
            <IconButton >
               <Telegram fontSize="large" color='primary'/>
            </IconButton>
            <IconButton>
               <WhatsApp fontSize="large" color='primary'/>
            </IconButton>
            <IconButton>
               <Instagram fontSize="large" color='primary'/>
            </IconButton>
         </div>
      </div>
   )
}

export default SocialMedia
