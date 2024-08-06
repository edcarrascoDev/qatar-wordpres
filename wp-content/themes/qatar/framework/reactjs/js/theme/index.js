import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  typography: {
    fontFamily: [
      'Montserrat',
      'Helvetica Neue Light',
      'Helvetica Neue',
      'Helvetica',
      'Arial',
      'sans-serif',
    ].join(','),
  },
  palette: {
    primary: {
      main: '#20232d',
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff3c00',
      contrastText: '#fff',
    },
  },
  components: {
    MuiSelect: {
      styleOverrides: {
        root: {
          borderRadius: 0,
        },
      },
    },
  },
});
