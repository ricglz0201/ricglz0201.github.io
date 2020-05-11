//@flow
import Avatar from '@material-ui/core/Avatar';
import CustomTypography from './CustomTypography';
import Grid from '@material-ui/core/Grid';
import LinkIconButton from './LinkIconButton';
import React from 'react';
import my_photo from '../assets/my_photo.png';
import type { Node } from 'react';
// $FlowFixMe
import { ReactComponent as GithubIcon } from '../assets/github-icon.svg';
// $FlowFixMe
import { ReactComponent as LinkedinIcon } from '../assets/linkedin.svg';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

type Style = {
  root: {
    padding: string,
    height: string,
  },
  image: {
    height: string,
    width: string,
  }
}

const useStyles = makeStyles((theme: Theme) : Style =>
  createStyles({
    root: {
      padding: '1rem',
      height: '100%',
    },
    image: {
      width: '170px',
      height: '170px',
    }
  })
);

type SectionProps = {|
  classes: Style,
|}

const AvatarSection = ({ classes }: SectionProps) => (
  <Grid container className={classes.root} spacing={3} justify="center">
    <Avatar
      className={classes.image}
      src={my_photo}
    />
  </Grid>
)

const BioSection = ({ classes }: SectionProps) => (
  <Grid container className={classes.root}>
    <CustomTypography>
      Junior Student from Tec de Monterrey, who is passionate about web
      and mobile technologies. Looking for experiences in these areas,
      or any other that challenge him.
    </CustomTypography>
  </Grid>
)

const SocialSection = ({ classes }: SectionProps) => (
  <Grid container spacing={3} className={classes.root} direction="row" justify="center">
    <Grid item>
      <LinkIconButton href="https://github.com/ricglz0201">
        <GithubIcon />
      </LinkIconButton>
    </Grid>
    <Grid item>
      <LinkIconButton href="https://linkedin.com/in/rjgcastillo">
        <LinkedinIcon />
      </LinkIconButton>
    </Grid>
  </Grid>
)

const MyInfoContent = () : Node => {
  const classes = useStyles();
  return (
    <>
      <AvatarSection classes={classes} />
      <BioSection classes={classes} />
      <SocialSection classes={ classes } />
    </>
  )
}

export default MyInfoContent;
