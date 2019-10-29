import { blue, grey, yellow } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

export const lightTheme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
  }
});

export const darkTheme = createMuiTheme({
  palette: {
    primary: yellow,
    secondary: grey,
  }
});
