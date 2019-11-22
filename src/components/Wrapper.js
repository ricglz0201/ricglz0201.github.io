// @flow
import * as React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Props = {|
  children: React.Node | [React.Node],
|};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: '100%',
    },
  })
);

const Wrapper = ({children}: Props): React.Node => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      { children }
    </div>
  )
};

export default Wrapper;
