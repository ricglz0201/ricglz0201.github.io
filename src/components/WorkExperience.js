// @flow
import * as React from 'react';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

export type WorkExperienceProps = {|
  city: string,
  company: string,
  description: string,
  period: string,
  technologies: string,
|};

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

export default WorkExperience;
