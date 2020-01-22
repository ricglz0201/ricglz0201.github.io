// @flow
import * as React from 'react';
import CustomTypography from './CustomTypography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Project from './Project';
import WorkExperience from './WorkExperience';
import experienceData from './experienceData';
import projectData from './projectData';
import type { ProjectProps } from './Project';
import type { WorkExperienceProps } from './WorkExperience';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      padding: '0.8rem',
      marginBottom: '1rem',
      minHeight: '400px'
    },
    paperContent: {
      padding: '1rem',
      height: '100%',
    }
  })
);

type PaperContentType = ProjectProps | WorkExperienceProps;

type PaperContentProps = {|
  data: Array<PaperContentType>,
  name: string,
  render: (PaperContentType) => React.Node,
|}

const PaperContent = ({ data, name, render }: PaperContentProps) : React.Node => {
  const classes = useStyles();
  return (
    <Paper elevation={10} className={classes.paper}>
      <Grid container spacing={3} className={classes.paperContent}>
        <CustomTypography textAlign="center" fontSize="h5">{ name }</CustomTypography>
        { data.map(render) }
      </Grid>
    </Paper>
  )
};

const RightSide = () : React.Node => {
  const renderExperiences = (
    // $FlowFixMe
    (elem, index) => <WorkExperience key={index} {...elem} />
  )
  const renderProjects = (elem, index) => <Project key={index} {...elem} />

  return (
    <Grid item xs={12} sm={8} xl={9}>
      <PaperContent
        data={experienceData}
        name="Work Experience"
        render={renderExperiences}
      />
      <PaperContent
        data={projectData}
        name="Projects"
        render={renderProjects}
      />
    </Grid>
  )
};

export default RightSide;
