import React from 'react';
import {Card , CardMedia , CardContent, Typography  , makeStyles} from '@material-ui/core';
import {cardImage1} from '../coverImage/Images';

const useStyles = makeStyles( theme => ({
   card : {
      borderRadius: '0',
      width:'100%',
      boxShadow: theme.shadows[0],
   },
   cardMedia : {
      height: '60vh',
   },
   cardContent : {
      paddingTop: '2rem',
      height:'40vh',
      backgroundColor: theme.myPalette.main,
      [theme.breakpoints.down('sm')]: {
         height:'40vh',
      },

   },
   caption : {
      lineHeight:'2',
      fontSize: '.85rem',
      
      [theme.breakpoints.down('md')]: {
         fontSize: '.8rem',
      },
      [theme.breakpoints.down('sm')]: {
         fontSize: '.9rem',
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: '.65rem',
      }
   }

}));

const RulesCard = () => {
   const classes = useStyles();

   return (
      <Card className={classes.card}>
         <CardMedia
            image={cardImage1}
            title='iran decorator rules'
            className={classes.cardMedia}
         />
         
         <CardContent className={classes.cardContent} >
            <Typography variant="h5" gutterBottom={true} color='secondary' data-aos="zoom-in-down">
               قوانین ایران دکوراتور
            </Typography>
            <Typography variant='body2' color='secondary' className={classes.caption} data-aos="zoom-in-up" >
                  اطلاعات درج شده در پروفایل اهالی فن شامل (سابقه کار , گارانتی , بیمه , عکس , پروژه ها, لیست قیمت های اعلام شده, شماره تماس,  تلگرام , نام مدیر فروش شرکت , دامنه کسب و کار , مناطق و شهرهای تحت سرویس دهی) میبایست دقیق باشند
                  در صورت مغایرت اطلاعات مسئولیت مشکلات احتمالی در آینده در تعامل بین مشتری و اهالی فن بر عهده مشتری خواهد بود
            </Typography>
         </CardContent>

      </Card>
   )
}

export default RulesCard
