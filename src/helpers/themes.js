// @flow
import { blue, yellow} from '@material-ui/core/colors';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const lightTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eeeeee'
    },
    secondary: blue,
  }
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#222222'
    },
    secondary: yellow,
  }
});
