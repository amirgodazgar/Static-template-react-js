import React from 'react';
import { Box , CardMedia, makeStyles, Card ,CardContent, Typography} from '@material-ui/core';
import {cardImage3 , cardImage4} from '../../components/coverImage/Images';
import {v1 as uniqueId} from 'uuid';


const useStyles = makeStyles( theme => ({
   wrapper : {
      display:'flex',
      justifyContent:'center',
      width:'100%',
      height:'100%',

      [theme.breakpoints.down('sm')] : {
         flexDirection:'column',
      }
   },

   cardWrapper : {
      width : "60%",
      height : "100vh" ,
      display : 'flex' ,
      flexDirection : 'column' ,
      alignItems : 'center' ,
      justifyContent : 'space-around',

      [theme.breakpoints.down('sm')] : {
         width : "100%",
         height : "50vh",
         flexDirection:'row',
         justifyContent : 'space-between',
         padding:'.4rem'
      }
   },

   card : {
      display:'flex',
      flexDirection:'column-reverse',
      height:'40%',
      width:'78%',
      boxShadow: theme.shadows[10],
      borderRadius:'1px',
      [theme.breakpoints.down('sm')] : {
         height : "85%",
         width:'49%',
      }
   },
   
   cardMedia : {
      height:'88%',
   },

      
   cardContent : {
      height: '10%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      paddingTop:'1.5rem',
    
      backgroundColor:theme.palette.grey[50],
     
      
   },

   caption : {
      fontWeight:'500',
      fontSize:'1rem',
      [theme.breakpoints.down('sm')] : {
         fontSize:'.8rem',
      },
      [theme.breakpoints.down('xs')] : {
         fontSize:'.65rem',
      }
   },

   sideColumn : {
      width : "40%",
      height : "100vh",
      display : 'flex',
      alignItems : 'flex-start' ,
      justifyContent : 'center' ,
      backgroundColor : '#303030' ,
      color : '#fafafa' ,
      padding : '1rem' ,

      [theme.breakpoints.down('sm')] : {
         width : "100%",
         height : "35vh",
         alignItems : 'center' ,
      },
      [theme.breakpoints.down('xs')] : {
         width : "100%",
         height : "50vh",
      }

   },

   sideContent : {
      lineHeight:'2',
      padding: '1.8rem',
      textAlign : 'left',
      marginTop: '2.5rem',
      [theme.breakpoints.down('sm')] : {
        fontSize : '.85rem',
        lineHeight:'1.8',
        padding: '1rem',
        marginTop: '0',
      },
   },


}));

const cardDetail = [{image:cardImage3 , caption:'پروژه هایتان را معرفی کنید'} , {image:cardImage4 , caption:'کاتالوگ محصولات را منتشر کنید'} ]

const Exhibition = () => {

   const classes = useStyles();

   return (
      <div className={classes.wrapper}>

         <Box className={classes.cardWrapper} >
            {
               cardDetail.map(card => (
                 
                     <Card className={classes.card} data-aos="zoom-in-up" key={uniqueId()} >
                        <CardMedia
                           image={card.image}
                           className={classes.cardMedia}
                        />
                        <CardContent className={classes.cardContent}>
                           <Typography variant='caption' className={classes.caption}>
                              {card.caption}
                           </Typography>
                        </CardContent>
                     </Card>

               ))
            }
               
         </Box>

         <Box className={classes.sideColumn} >
            <Typography variant='body2' className={classes.sideContent} data-aos="zoom-out" >
            طراحان , معماران و تولیدکنندگان می توانند با انتشار تصاویر پروژه ها و محصولات خود , ارتباط راحت تری با مشتریال و مراجعه کنندگان داشته باشند .
              شما می توتنید تنها با گذراندن ده دقیقه , اطلاعات لازم پروفایل خود را تکمیل کنید تا از سرویس اختصاصی بهرمند شوید.
            </Typography>
         </Box>

      </div>
   )
}

export default Exhibition
