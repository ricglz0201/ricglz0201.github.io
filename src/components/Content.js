// @flow
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import MyInfoContent from './MyInfoContent';
import Paper from '@material-ui/core/Paper';
import WorkExperienceContent from './WorkExperienceContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      height: 'calc(86% + 24px)',
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
      <Grid item xs={12} sm={6} md={4} xl={3}>
        <Paper elevation={10} className={classes.paper}>
          <MyInfoContent />
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={8} xl={9}>
        <Paper elevation={10} className={classes.paper}>
          <WorkExperienceContent />
        </Paper>
      </Grid>
    </Grid>
  )
};

export default Content;
