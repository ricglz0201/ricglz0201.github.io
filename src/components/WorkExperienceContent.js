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
      <Box fontSize="h6.fontSize" fontWeight="bold">{company}</Box>
      <Box fontWeight="lighter">{period} | {city}</Box>
      <span>{description} Technologies used:<b> {technologies}</b></span>
    </Typography>
  </Grid>
)

const WorkExperienceContent = () : React.Node => {
  const classes = useStyles();
  const fbDescription = `Work with the save and collections team in the
                         development of new features for the product of the
                         team, working both in the back and frontend.`
  const ukkoDescription = `Developed primarly web applications. Tooked
                           leadership of some projects in their early stages.`
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
        city="Monterrey, Mex"
        company="Ukko Solutions"
        period="May 2018 - Present"
        description={ukkoDescription}
        technologies="Ruby on Rails, JQuery, Golang, SASS, Python, Docket"
      />
    </Grid>
  )
};

export default WorkExperienceContent;
