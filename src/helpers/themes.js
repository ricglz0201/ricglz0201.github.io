// @flow
import amber from '@material-ui/core/colors/amber';
import lightBlue from '@material-ui/core/colors/lightBlue';
import { createMuiTheme, Theme } from '@material-ui/core/styles';
import { useState, useCallback } from 'react';
import { useLocalStorage } from './custom_hooks';

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

type useThemeReturnType = [Theme, () => void];

export const useTheme = () : useThemeReturnType => {
  const [storedValue, setStoredValue] = useLocalStorage('theme', 'light');
  const preferredTheme = storedValue === 'light' ? lightTheme : darkTheme;
  const [theme, setTheme] = useState(preferredTheme);
  const changeTheme = useCallback(() => {
    setTheme(prevTheme => prevTheme === lightTheme ? darkTheme : lightTheme);
    setStoredValue( prevValue => prevValue === 'light' ? 'dark' : 'light' );
  }, [setStoredValue]);
  return [theme, changeTheme];
}
