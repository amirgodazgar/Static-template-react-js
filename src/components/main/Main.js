import React  from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import Navbar from '../navbar/Navbar';
import {pagesComponents} from './PagesComponents';
import SuggestionsForm from '../forms/SuggestionsForm';
import SocialMedia from '../socialMedia/SocialMedia';
import RulesCard from '../card/RulesCard';
import StartCard from '../card/StartCard';
import ContactUs from '../../layout/catalogPages/ContactUs';
import {v1 as uniqueId} from 'uuid';
import ScrollSpy from '../scrollSpy/ScrollSpy';


const useStyles = makeStyles( theme => ({

   main : {



      [theme.breakpoints.up('sm')]: {
         display : 'flex',
         flexDirection:'row',
         justifyContent:'center',
         height: '100%',

      },

      [theme.breakpoints.down('sm')]: {

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
      flex : '.5',
      height: '100vh',

      position: 'sticky',
      top: '0',

     
      [theme.breakpoints.down('sm')]: {
         flexDirection:'row',
         justifyContent: 'space-evenly',
         alignItems:'center',
         height:'5rem',
         position:'relative',
      },

      [theme.breakpoints.down('xs')]: {
         height: '4rem'
      },
     
   },

   dynamicCol : {
      flex : '4',
      display:'flex',
      flexDirection:'row',
      justifyContent:'center',
      overflow:'hidden',

      [theme.breakpoints.down('sm')]: {
   
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

      [theme.breakpoints.down('sm')]: {
         flex:'4',
         flexDirection:'column',
         justifyContent: 'center',
         alignItems:'center',
      },
   },

   firstCol: {
      flex:'1.2',
      borderRight:'1px solid rgba(0, 0, 0, 0.15)',
   
      [theme.breakpoints.down('sm')]: {
       flex:'1',
       width: '100%',
      },
   },

   secondCol : {
      flex:'2',
      [theme.breakpoints.down('sm')]: {
         flex:'1',
         width: '100%',
      },
   },
   
   colStyle : {
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      borderBottom:'1px solid rgba(0, 0, 0, 0.15)',
      margin:'0',
      padding:'0'
   },
   
   introduce : {
      background: theme.palette.secondary.main,
   },


   imgCover : {
      height:'100%',
      width: '100%',
   },

   suggestionsForm : {
      color: theme.palette.grey[50],
      backgroundColor: theme.palette.primary.main,
      
   },

   information : {
      display:'flex',
      flexDirection:'column',
      backgroundColor: theme.palette.secondary.main,
      padding:'1rem'
   },

   address : {
      padding:'1.2rem',
      margin:'0 1rem',
      display:'flex',
      flexDirection:'column',
      justifyContent:'space-evenly',
      alignItems:'flex-start',
      height:'50%',
   },


}))

const Main = () => {

   const classes = useStyles();

   return (
      


      // main container
      <Grid container  className={classes.main}>

         <ScrollSpy/>

         {/*static navbar column */}
         <Grid container className={classes.navbarCol}  >
   
            <Navbar/>
            
         </Grid>

         {/* dynamic column */}

         <Grid container  className={classes.dynamicCol}>

            {
               pagesComponents.map(page => (

                     <Grid container className={classes.PageContainer} key={uniqueId()} id={page.id}>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle}`}>
                           <img src={page.firstCol} className={classes.imgCover}/>
                        </Grid>
                                 
                        <Grid item className={`${classes.secondCol}  ${classes.colStyle} ${classes.introduce}`}>
                           {page.secondCol}
                        </Grid>
                     </Grid>

               ))
            }

            
                     <Grid container className={classes.PageContainer} id='rules'>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle}`}>

                           <RulesCard/>

                        </Grid>

                        <Grid item className={`${classes.secondCol}  ${classes.colStyle}`}>
                           
                           <StartCard/>

                        </Grid>
                     </Grid>

                  
                     <Grid container className={classes.PageContainer} id='contactUs'>
                        <Grid item className={`${classes.firstCol}  ${classes.colStyle} ${classes.information}`}>
                          
                           <ContactUs/>
                           
                           <SocialMedia/>

                        </Grid>

                        <Grid item className={`${classes.secondCol}  ${classes.colStyle} ${classes.suggestionsForm}`}>
                        
                           <SuggestionsForm/>
                        </Grid>
                      </Grid>



         </Grid>
      </Grid>
   )
}

export default Main
