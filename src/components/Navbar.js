// @flow
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import * as React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import WbSunnyIcon  from '@material-ui/icons/WbSunny';
// $FlowFixMe
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {|
  changeTheme: () => void,
|};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    toolbar: {
      flex: 1,
      flexDirection: 'row-reverse',
      backgroundColor: theme.palette.background.default,
    }
  })
);

const Navbar = ({ changeTheme }: Props): React.Node => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton color="primary" onClick={changeTheme}>
          <WbSunnyIcon />
        </IconButton>
        <IconButton color="primary"href="https://github.com/ricglz0201/ricglz0201.github.io" target="_blank">
          <GithubIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
