// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import CustomTypography from './CustomTypography';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import experienceData from './experienceData';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type Style = {
  root: {
    padding: string,
    height: string,
  },
  image: {
    height: string,
    width: string,
  }
};

type WorkExperienceProps = {|
  city: string,
  company: string,
  description: string,
  period: string,
  technologies: string,
|};

const useStyles = makeStyles(() : Style =>
  createStyles({
    root: {
      padding: '1rem',
      height: '100%',
    }
  })
);

const WorkExperience = ({
  company, period, description, technologies, city
}: WorkExperienceProps) => (
  <Grid item xs={12}>
    <Typography component="div">
      <Grid container spacing={1}>
        <Grid item xs={12}><Box fontSize="h6.fontSize" fontWeight="bold">{company}</Box></Grid>
        <Grid item xs={12}><Box fontWeight="lighter">{period} | {city}</Box></Grid>
        <Grid item xs={12}>{description}</Grid>
        <Grid item xs={12}>Technologies used:<b> {technologies}</b></Grid>
      </Grid>
    </Typography>
  </Grid>
)

const WorkExperienceContent = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <CustomTypography textAlign="center" fontSize="h5">
        Work experience
      </CustomTypography>
      {
        experienceData.map(
          (experience, index) => <WorkExperience key={index} {...experience} />
        )
      }
    </Grid>
  )
};

export default WorkExperienceContent;
