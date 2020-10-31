const { createMuiTheme } = require("@material-ui/core");

export const theme = createMuiTheme({
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
      fontFamily:'Vazir',
   },
})