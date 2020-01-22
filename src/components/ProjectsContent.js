// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import CustomTypography from './CustomTypography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import projectData from './projectData';
import { createStyles, makeStyles } from '@material-ui/core/styles';

type Style = {
  root: {
    padding: string,
    height: string,
  },
};

type AchievementsProps = {|
  achievements: Array<string>,
|}

type ProjectProps = {|
  achievements: Array<string>,
  website: string,
  description: string,
  name: string,
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

const Achievements = ({ achievements }: AchievementsProps) => (
  <ul>
    { achievements.map(
      (achievement) => <li key={achievement}>{achievement}</li>
    ) }
  </ul>
);

const Project = ({
  name, period, description, technologies, achievements, website
}: ProjectProps) => (
  <Grid item xs={12}>
    <Typography component="div">
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Box fontSize="h6.fontSize" fontWeight="bold">{name}</Box>
        </Grid>
        <Grid item xs={12}>
          <Box fontWeight="lighter">
            {period} | <Link href={website}>Website</Link>
          </Box>
        </Grid>
        <Grid item xs={12}>
          {description}
          <Achievements achievements={achievements} />
        </Grid>
        <Grid item xs={12}>Technologies used:<b> {technologies}</b></Grid>
      </Grid>
    </Typography>
  </Grid>
)

const ProjectsContent = () : React.Node => {
  const classes = useStyles();
  return (
    <Grid container spacing={3} className={classes.root}>
      <CustomTypography textAlign="center" fontSize="h5">
        Projects
      </CustomTypography>
      {
        projectData.map(
          (experience, index) => <Project key={index} {...experience} />
        )
      }
    </Grid>
  )
};

export default ProjectsContent;

