import React from 'react';
import {Card , CardMedia,CardContent, makeStyles, Typography,} from '@material-ui/core';
import {cardImage2} from '../../components/coverImage/Images';

const useStyles = makeStyles(theme => ({
   wrapper : {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      height:'75vh',
      width:'98%',
     
      [theme.breakpoints.down('sm')] : {
         height:'75vh',
      },
      [theme.breakpoints.down('xs')] : {
         height:'80vh',
      }

   },
   header : {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      width:'80%',
      height:'35vh',
      textTransform:'uppercase',
   },

   title : {
      textTransform:'uppercase',
      display:'flex',
      flexDirection:'column',
      textAlign:'center',
      fontSize:'3rem',
      width:'100%',
      height:'20vh',
      margin:'0',
      [theme.breakpoints.down('sm')] : {
         fontSize: '2.7rem',
         height:'23vh',
      }
   },

   titleUp : {
      borderBottom:'2px solid black',
      marginBottom: '0',
   },

   subtitle : {
      fontWeight:'bold',
      // margin:'0',
      textAlign:'center',
      [theme.breakpoints.down('sm')] : {
         margin:'.6rem 0',
         fontSize: '1rem',
      },
      [theme.breakpoints.down('xs')] : {
         margin:'.6rem 0',
         fontSize: '.8rem',
      },
      
      
   },

   card : {
      display:'flex',
      flexDirection:'row-reverse',
      alignItems:'center',
      width:'70%',
      height:'20vh',
      boxShadow: theme.shadows[18],
      [theme.breakpoints.down('sm')] : {
         width:'85%',
         marginBottom:'1rem',
         height:'20vh',
      }
   
   },
   cardMedia: {
      flex:'2',
      height:'100%',
      width:'100%',
      [theme.breakpoints.down('sm')] : {
         flex:'1',
      }
      
   },
   cardContent : {
      flex:'2',
   },

   caption : {
      fontSize:'.85rem',
      fontWeight:'500',

      [theme.breakpoints.down('md')] : {
         fontSize:'.7rem',
      },
      [theme.breakpoints.down('sm')] : {
         fontSize:'.8rem',
      },
      [theme.breakpoints.down('xs')] : {
         fontSize:'.6rem',
      },
  
   },
   

}))

const Introduce = () => {
   const classes = useStyles();

   return (
      <div className={classes.wrapper}>
   
         <header  className={classes.header} data-aos="zoom-in" data-aos-duration='700'>
            <h1 dir='ltr' className={classes.title}  >
               <span className={classes.titleUp}> iran </span>
               <span >Decorator</span>
            </h1>
            <p className={classes.subtitle}>ایران دکوراتور مکانی برای دیده شدن فعالین حوزه معماری و دکوراسیون</p>
         </header>


         <Card className={classes.card} data-aos="zoom-out" data-aos-duration='700' >
            <CardMedia 
               image={cardImage2}
               className={classes.cardMedia}
            />
            <CardContent className={classes.cardContent}>
                <Typography variant='caption' className={classes.caption} >
                     ایران دکوراتور محلی برای دیده شدن شرکت های معماری و دکوراسیون,مشاهده محصولات متنوع موجود در بازار و ارتباط با سازنده و فروشندگان آنهاست  
                </Typography>
            </CardContent>
         </Card>

      </div>
   )
}

export default Introduce
