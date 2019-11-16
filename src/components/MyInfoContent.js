//@flow
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import my_photo from '../assets/my_photo.png';
import type { Node } from 'react';
// $FlowFixMe
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
// $FlowFixMe
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: '1rem',
      height: '100%',
    },
    image: {
      height: 'auto',
      width: '100%',
    }
  })
);

const MyInfoContent = () : Node => {
  const classes = useStyles();
  return (
    <>
      <Grid container className={classes.root} spacing={3} justify="center">
        <Grid item xs={10} sm={6} md={4}>
          <Avatar
            className={classes.image}
            src={my_photo}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <Typography component="div">
            <Box m={1}>
              Junior Student from Tec de Monterrey, who is passionate in web
              and mobile technologies. Looking for experiences in these areas,
              or any other that challenges him.
            </Box>
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={3} className={classes.root} direction="row" justify="center">
        <Grid item>
          <IconButton
            color="primary"
            href="https://github.com/ricglz0201"
            target="_blank"
          >
            <GithubIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton
            color="primary"
            href="https://linkedin.com/in/rjgcastillo"
            target="_blank"
          >
            <LinkedinIcon />
          </IconButton>
        </Grid>
      </Grid>
    </>
  )
}

export default MyInfoContent;
