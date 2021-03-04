import React from 'react';
import {Card , CardContent , CardMedia , Typography , makeStyles} from '@material-ui/core';
import {cardImage2} from '../coverImage/Images';


const useStyles = makeStyles( theme => ({
   card : {
      height:'100%',
      minWidth:'100%',
      borderRadius:'0',
      display:'flex',
      flexDirection:'column',
      boxShadow:'none',
      backgroundColor: theme.palette.grey[50],
   },
   
   cardMedia : {
      height:'100%',
   },
   
   cardContent : {
      height:'40%',
      padding: '.3rem',
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'space-evenly'
   },

   title : {
      fontSize: '.9rem',
      fontWeight: "bold",
      textAlign:'center',
      margin:'.5rem auto',
      [theme.breakpoints.up('sm')] : {
         fontSize:'1.5rem',
      },
      [theme.breakpoints.up('xs')] : {
         fontSize:'1rem',
      },
   },
   
   caption : {
      fontSize: '.6rem',
      margin:'.2rem auto',
      [theme.breakpoints.up('sm')] : {
         fontSize:'1rem',
      },
      [theme.breakpoints.up('xs')] : {
         fontSize:'.7rem',
      },
   }

}));

const RegisterCard = () => {
   const classes = useStyles();

   return (
      <Card className={classes.card} >

      <CardMedia
         image={cardImage2}
         title='register info'
         className={classes.cardMedia}

         data-aos="zoom-out"
         data-aos-duration="900"
      />

   </Card>
   )
}

export default RegisterCard
