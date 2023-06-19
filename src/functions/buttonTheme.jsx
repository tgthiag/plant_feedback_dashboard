import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
export const myTheme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: purple[500],
      },
      secondary: {
        main: '#000000',
        darker: '#053e85',
      },
    },
  });