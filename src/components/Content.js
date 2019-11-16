// @flow
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import MyInfoContent from './MyInfoContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      height: '100%',
    },
    paper: {
      padding: '0.8rem',
    },
    image: {
      height: 'auto',
      width: '100%',
    }
  })
);

const Content = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3} alignItems="center">
      <Grid item xs={6}>
        <Paper className={classes.paper}>
          <MyInfoContent />
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>hola</Paper>
      </Grid>
    </Grid>
  )
};

export default Content;
