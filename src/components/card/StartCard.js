import React from 'react';
import {Card , CardMedia , CardContent, Typography  , makeStyles, Button} from '@material-ui/core';
import {cardImage2} from '../coverImage/Images';

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
      textAlign:'center',
      backgroundColor: theme.myPalette.fontLight,
      [theme.breakpoints.down('sm')]: {
         height:'30vh',
      },

   },
   caption : {
      marginBottom:'2rem',
      [theme.breakpoints.down('sm')]: {
         fontSize: '1rem'
      },
      [theme.breakpoints.down('xs')]: {
         fontSize: '.85rem'
      }
   }

}))
const StartCard = () => {
   const classes = useStyles();

   return (
      <Card className={classes.card}>
         <CardMedia
            image={cardImage2}
            title='iran decorator rules'
            className={classes.cardMedia}
         />
         
         <CardContent className={classes.cardContent} >
      
            <Typography variant='h6' color='primary' gutterBottom={true}  className={classes.caption} data-aos="zoom-out">
                  تنها با گذراندن 5 دقیقه وب سایت اختصاصی خود را در ایران دکوراتور راه اندازی کنید
            </Typography>
               
               <Button variant="contained" size="large" color="primary" data-aos="zoom-in-down" > 
                  شروع کنید
               </Button>

         </CardContent>

      </Card>
   )
}

export default StartCard
