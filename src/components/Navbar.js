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
  children: React.Node,
|};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
      backgroundColor: theme.palette.primary.main,
    },
    toolbar: {
      flex: 1,
      flexDirection: 'row-reverse'
    }
  })
);

const Navbar = ({ changeTheme, children }: Props): React.Node => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <IconButton color="secondary" onClick={changeTheme}>
            <WbSunnyIcon />
          </IconButton>
          <IconButton color="secondary" href="https://github.com/ricglz0201/ricglz0201.github.io" target="_blank">
            <GithubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      { children }
    </div>
  )
};

export default Navbar;
