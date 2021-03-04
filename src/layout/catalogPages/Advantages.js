import React from 'react';
import {Box, Typography, IconButton , makeStyles } from '@material-ui/core';
import {Person , Search , Assignment  } from '@material-ui/icons';
import {v1 as uniqueId} from 'uuid';

const content = [
   {icon:  <Assignment fontSize='large' color='secondary'/> , context : 'کنترل پنل ساده و آسان دارد و نیاز به هیچگونه آشنایی با برنامه نویسی و یا تخصص کامپیوتری ندارد'} ,
   {icon:  <Person fontSize='large' color='secondary'/> , context : '  رایگان و بدون ریسک است , شما میتوانید با انتخاب سرویس پایه از خدمات ما رایگان و با اطمینان خاطر استفاده کنید'} ,
   {icon: <Search fontSize='large' color='secondary'/> , context : ' بهینه بودن ساختار وب سایت ایران دکوراتور مطابق الگوریتم گوگل موجب شده که همواره در کایدواژه های مرتبط نتایج ابتدایی را در اختیار داشته باشد. این شزایط برای فعالین عضو در ایران دکوراتور نیز صادق است و کافیست با گذراندن اندکی وقت در کامل نمودن اطلاعات و مطالب صفجه تان شاهد حضور خود در صفحه اول گوگل باشید '},
];

const useStyles = makeStyles( theme => ({
   container : {
      height:"60%",
      width:'90%'
   },

   BoxWrapper : {
      display : 'flex' ,
      flexDirection : 'column' ,
      justifyContent : 'center' ,
      alignItems : 'center' ,
      height : '100%' ,
   },

   title : {
      textAlign:'right',
      fontWeight:'bold',
      [theme.breakpoints.down('sm')]: {
         textAlign:'center',
         fontSize:'2rem',
         margin:'.5rem 0',

      }
   },

   box : {
      display : 'flex' ,
      flexDirection : 'row' ,
      justifyContent : 'flex-start' ,
      padding : '1rem', 
      alignItems : 'center' ,
      width : '100%' ,
      flex:'1',
   },

   content : {
      lineHeight:'2',
      [theme.breakpoints.down('sm')]: {
         fontSize:'.9rem',
         margin:'.5rem',
      }
   }

}))

const Advantages = () => {
   const classes = useStyles();

   return (
      <Box className={classes.container} >
         <Box className={classes.BoxWrapper} >
            <Typography variant='h3' className={classes.title} align='right' gutterBottom={true} data-aos="zoom-out" >چرا ایران دکوراتور</Typography>
         {
            content.map(item => (
               <Box className={classes.box} key={uniqueId()} >
                  <IconButton style={{backgroundColor:'#303030', margin:'0 .5rem'}} data-aos="flip-left">
                     {item.icon}
                  </IconButton>
                  <Typography variant='body1' gutterBottom={true} className={classes.content} data-aos="flip-right" >
                     {item.context}
                  </Typography>
               </Box>

            ))
         }

         </Box>
      </Box>
   )
}

export default Advantages
