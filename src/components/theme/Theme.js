const { createMuiTheme } = require("@material-ui/core");

export const theme = createMuiTheme({

   breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

   direction:'rtl',

   palette : {
      primary : {
         main:  '#303030',
      },
      secondary : {
         main : '#fafafa',
      },
   },

   myPalette : {
      main : '#303030',
      fontLight: '#fafafa',
      fontDark: '#212121'
   },

   typography:{
      fontFamily:'Vazir , Roboto'
   },
})