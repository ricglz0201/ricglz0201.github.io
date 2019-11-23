// @flow
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import MyInfoContent from './MyInfoContent';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'sticky',
      padding: '0.8rem',
      top: '0.8rem',
    }
  })
);

const LeftSide = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={4} xl={3}>
      <Paper elevation={10} className={classes.paper}>
        <MyInfoContent />
      </Paper>
    </Grid>
  )
};

export default LeftSide;
