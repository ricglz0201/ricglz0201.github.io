// @flow
import 'typeface-roboto';
import * as React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Wrapper from './Wrapper';
import { ThemeProvider } from '@material-ui/core/styles';
import { lightTheme, darkTheme } from '../helpers/themes';

function App(): React.Node {
  const [theme, setTheme] = React.useState(lightTheme);
  const changeTheme = React.useCallback(() => {
    setTheme(prevTheme => {
      if(prevTheme === lightTheme) return darkTheme;

      return lightTheme;
    });
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Navbar changeTheme={changeTheme} />
        <Content />
      </Wrapper>
    </ThemeProvider>
  );
}

export default App;
