import * as React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import my_photo from '../assets/my_photo.png';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

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
          <Grid container className={classes.root} spacing={3} justify="center">
            <Grid item xs={4}>
              <Avatar
                className={classes.image}
                src={my_photo}
              />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Paper className={classes.paper}>hola</Paper>
      </Grid>
    </Grid>
  )
};

export default Content;
