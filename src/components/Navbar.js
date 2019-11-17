// @flow
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import IconButton from '@material-ui/core/IconButton';
import LinkIconButton from './LinkIconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon  from '@material-ui/icons/WbSunny';
// $FlowFixMe
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {|
  changeTheme: () => void,
|};

const useStyles = makeStyles((theme: Theme) => createStyles({
  toolbar: {
    flex: 1,
    flexDirection: 'row-reverse',
    backgroundColor: theme.palette.background.default,
  },
  textWrapper: {
    flex: 1,
    textAlign: 'center',
    color: theme.palette.text.primary
  }
}));

const Navbar = ({ changeTheme }: Props): React.Node => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <IconButton color="primary" onClick={changeTheme}>
          <WbSunnyIcon />
        </IconButton>
        <LinkIconButton
          href="https://github.com/ricglz0201/ricglz0201.github.io"
        >
          <GithubIcon />
        </LinkIconButton>
        <Typography className={classes.textWrapper} component="div">
          <Box fontSize="h5.fontSize" m={1} letterSpacing={6}>
            Ricardo Gonzalez
          </Box>
        </Typography>
      </Toolbar>
    </AppBar>
  )
};

export default Navbar;
