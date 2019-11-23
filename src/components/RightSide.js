// @flow
import * as React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import WorkExperienceContent from './WorkExperienceContent';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '0.8rem',
      marginBottom: '1rem',
      minHeight: '400px'
    },
  })
);

const RightSide = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid item xs={12} sm={8} xl={9}>
      <Paper elevation={10} className={classes.paper}>
        <WorkExperienceContent />
      </Paper>
    </Grid>
  )
};

export default RightSide;
