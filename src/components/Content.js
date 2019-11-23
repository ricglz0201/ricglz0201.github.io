// @flow
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import LeftSide from './LeftSide';
import RightSide from './RightSide';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      height: 'calc(86% + 24px)',
    },
  })
);

const Content = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      <LeftSide />
      <RightSide />
    </Grid>
  )
};

export default Content;
