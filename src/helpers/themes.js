// @flow
import lightBlue from '@material-ui/core/colors/lightBlue';
import amber from '@material-ui/core/colors/amber';
import { createMuiTheme, Theme } from '@material-ui/core/styles';

export const lightTheme: Theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: lightBlue,
  }
});

export const darkTheme: Theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: amber,
  }
});
