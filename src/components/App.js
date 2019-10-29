// @flow
import 'typeface-roboto';
import WbSunnyIcon  from '@material-ui/icons/WbSunny';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../helpers/themes';

function App() {
  const [theme, setTheme] = React.useState(lightTheme);
  const changeTheme = React.useCallback(() => {
    setTheme(prevTheme => {
      if(prevTheme === lightTheme) return darkTheme;

      return lightTheme;
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <IconButton color="primary" onClick={changeTheme}>
        <WbSunnyIcon />
      </IconButton>
    </ThemeProvider>
  );
}

export default App;
