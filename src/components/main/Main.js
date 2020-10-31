import React  from 'react';
import { Grid, makeStyles} from '@material-ui/core';
import Navbar from '../navbar/Navbar';
import {pagesComponents} from './PagesComponents';
import SuggestionsForm from '../forms/SuggestionsForm';
import SocialMedia from '../socialMedia/SocialMedia';
import RulesCard from '../card/RulesCard';

const useStyles = makeStyles( theme => ({

   main : {

      [theme.breakpoints.up('xs')]: {
         display : 'flex',
         flexDirection:'row',
         justifyContent:'center',
         height: '100%',

      },

      [theme.breakpoints.down('xs')]: {

         display:'grid',
         gridTemplateColumns:'repeat(1, 1fr)',
         gridTemplateRow:'repeat(2, 1fr)',
         columnGap: '.5rem',
         justifyItems: 'center',
         alignItems: 'center',
         height: '100%',
         
      },
      
      background: '#eeeeee',
   },

   navbarCol : {
   
      display : 'flex',
      flexDirection:'column',
      justifyContent: 'center',
      alignItems:'center',
      flex : '1',
      height: '100vh',

      position: 'sticky',
      top: '0',

     
      [theme.breakpoints.down('xs')]: {
         flexDirection:'row',
         justifyContent: 'space-evenly',
         alignItems:'center',
         height:'5rem',
         position:'relative',
      },
     
   },

   dynamicCol : {
      flex : '4',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      
      [theme.breakpoints.down('xs')]: {
   
         flexDirection:'column',
         justifyContent: 'center',
         alignItems:'center',
         
      },
     
   },

   PageContainer : {
      display: 'flex',
      flexDirection: 'row',
      height:'100vh',
      flexWrap: 'nowrap',

      [theme.breakpoints.down('xs')]: {
         flex:'4',
         flexDirection:'column',
         justifyContent: 'center',
         alignItems:'center',
      },
   },

   firstCol: {
      flex:'1',
      [theme.breakpoints.down('xs')]: {
       flex:'1',
       width: '100%',
      },
   },

   secondCol : {
      background: theme.palette.grey[800],
      flex:'2',
      [theme.breakpoints.down('xs')]: {
         flex:'1',
         width: '100%',
      },
   },

   colStyle : {
     display:'flex',
     flexDirection:'column',
     justifyContent:'center',
     alignItems:'center',
   },

   imgCover : {
      height:'100%',
      width: '100%',
   },

   suggestionsForm : {
      color: theme.palette.grey[50],
   },

   information : {
      display:'flex',
      flexDirection:'column',
   },

   address : {
      padding:'1.2rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      alignItems:'flex-start',
      height:'15rem'
   },


}))

const Main = () => {

   const classes = useStyles();

   return (
      


      // main container
      <Grid container  className={classes.main}>

         {/*static navbar column */}
         <Grid container className={classes.navbarCol}  >
   
               <Navbar/>
            
         </Grid>

         {/* dynamic column */}

         <Grid container  className={classes.dynamicCol}>

            {
               pagesComponents.map(page => (

                     <Grid container className={classes.PageContainer}>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle}`}>
                           <img src={page.firstCol} className={classes.imgCover}/>
                        </Grid>

                        <Grid item className={`${classes.secondCol}  ${classes.colStyle}`}>
                           {page.secondCol}
                        </Grid>
                     </Grid>

               ))
            }

            
                     <Grid container className={classes.PageContainer}>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle}`}>
                           <RulesCard/>
                        </Grid>

                        <Grid item className={`${classes.secondCol}  ${classes.colStyle}`}>
                           col 2
                        </Grid>
                     </Grid>

                  
                     <Grid container className={classes.PageContainer}>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle} ${classes.information}`}>
                           <h2>با ما در تماس باشید</h2>
                           <address className={classes.address}>
                              <p>
                             
                               نشانی :  کرمانشاه , خیابان دارایی , کوی شهید اسکندری , فرعی خرم , پلاک 13
                              </p>
                              <p>
                                 تلفن تماس : 08337272855
                              </p>
                              <p>
                                 با ما می توانید از شنبه تا پنجشنبه از ساعت 9 الی 5 بعدرظهر در تماس باشید
                              </p>
                           </address>

                           <SocialMedia/>

                        </Grid>

                        <Grid item className={`${classes.secondCol}  ${classes.colStyle} ${classes.suggestionsForm}`}>
                           <h2>پیشنهادات و انتقادات</h2>
                           <p>برای بهبود و ارتقای سطح کیفی خدمت رسانی ایران دکوراتور , نظرات و پیشنهادات خود را با ما درمیان بگذارید</p>
                           <SuggestionsForm/>
                        </Grid>
                      </Grid>



         </Grid>
      </Grid>
   )
}

export default Main
