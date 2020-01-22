// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

type AchievementsProps = {|
  achievements: Array<string>,
|}

export type ProjectProps = {|
  achievements: Array<string>,
  description: string,
  name: string,
  period: string,
  technologies: string,
  website: string,
|};

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

export default Project;
