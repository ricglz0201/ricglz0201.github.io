// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import CustomTypography from './CustomTypography';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
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
};

type WorkExperienceProps = {|
  city: string,
  company: string,
  description: string,
  period: string,
  technologies: string,
|};

const useStyles = makeStyles((theme: Theme) : Style =>
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
const fbDescription = `Worked with the save and collections team in the
                       development of new features for the product of the
                       team, working both in the back and frontend.`
const ukkoDescription = `Developed primarily web applications. Took
                         leadership over some projects in their early stages.`

const WorkExperienceContent = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <CustomTypography textAlign="center" fontSize="h5">
        Work experience
      </CustomTypography>
      <WorkExperience
        city="Menlo Park, CA."
        company="Facebook Inc."
        description={fbDescription}
        period="Jun - Aug 2019"
        technologies="React, React Native, Hack (PHP), Graphql"
      />
      <WorkExperience
        city="Monterrey, MEX."
        company="Ukko Solutions"
        period="May 2018 - Present"
        description={ukkoDescription}
        technologies="Ruby on Rails, JQuery, Golang, SASS, Python, Docket"
      />
    </Grid>
  )
};

export default WorkExperienceContent;
