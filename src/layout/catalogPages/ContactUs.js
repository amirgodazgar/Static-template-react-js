import React from 'react';
import {Box, Typography, IconButton , makeStyles } from '@material-ui/core';
import {QueryBuilder , PhoneInTalk , LocationOn  } from '@material-ui/icons';
import {v1 as uniqueId} from 'uuid';

const content = [
   {icon: <LocationOn color='primary'/> , title : 'نشانی ' , context: 'کرمانشاه , خیابان دارایی , کوی شهید اسکندری , فرعی خرم , پلاک 13' } ,
   {icon: <PhoneInTalk color='primary'/> , title : 'تلفن تماس' , context: '08337272855' } ,
   {icon: <QueryBuilder color='primary'/> , title : 'ساعت کاری' , context: 'با ما می توانید از شنبه تا پنجشنبه از ساعت 9 الی 5 بعدرظهر در تماس باشید' },
];

const useStyles = makeStyles(theme => ({
   
   header : {
      fontWeight:'bolder',
      fontSize:'3rem',
      marginBottom:'.5rem',
      textAlign:'center',
      [theme.breakpoints.down('md')] : {
         fontSize:'2rem'
      },
      [theme.breakpoints.down('sm')] : {
         fontSize:'1.5rem',
      }
   },
   
   infoWrapper : {
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      alignItems:'flex-start',
      width:'100%',
      flex:'1',
      borderBottom:'1px solid rgba(0, 0, 0, 0.15)',

      [theme.breakpoints.down('sm')] : {
         borderBottom: 'none',
         height:'33vh',
      }

   },

   iconWrapper : {
      display:'flex',
      justifyContent:'flex-start',
      alignItems:'center',
      width:'100%',
   },

   iconBtn : {
      flex:'0',
      [theme.breakpoints.down('sm')] : {
         padding: '.4rem',
      }
   },

   title : {
      flex:'1',
      margin:'0 1rem',
      [theme.breakpoints.down('md')] : {
         fontSize:'1rem'
      },
   },

   textWrapper : {
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
   },

   text : {
      margin :'0 2rem',
      [theme.breakpoints.down('md')] : {
         fontSize:'.9rem'
      },
      [theme.breakpoints.down('sm')] : {
         fontSize:'.7rem'
      }
   }

}))


const ContactUs = () => {
   const classes = useStyles();

   return (
      <Box height="80%" width='90%' display='flex' flexDirection='column' justifyContent='center' alignItems='center' >

            <Typography className={classes.header} variant='h3' gutterBottom={true} align='right' data-aos="zoom-out" >با ما در تماس باشید</Typography>

         <Box component='address' display='flex' flexDirection='column' justifyContent='space-around' alignItems='center'  >
         {
            content.map(item => (
               <Box className={classes.infoWrapper} key={uniqueId()}>
                  
                  <Box className={classes.iconWrapper}  >
                     <IconButton className={classes.iconBtn} data-aos="zoom-out-right">
                        {item.icon}
                     </IconButton>
                     <Typography variant='h6' className={classes.title} data-aos="zoom-in-right" >
                        {item.title}
                     </Typography>
                  </Box>

                  <Box  className={classes.textWrapper} >
                     <Typography variant='body1' className={classes.text} data-aos="zoom-in-up">
                        {item.context}
                     </Typography>
                  </Box>

               </Box>

            ))
         }

         </Box>
      </Box>
   )
}

export default ContactUs
