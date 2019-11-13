import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// import { ProductsToolbar, ProductCard } from './components';
import { ProjectToolbar, ProjectCard } from './components';
import mockData from './data';


const useStyles = makeStyles(theme => ({
    root: {
        padding: theme.spacing(3)
    },
    content: {
        marginTop: theme.spacing(2)
    },
    pagination: {
        marginTop: theme.spacing(3),
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}));


const ProjectList = () => {

    const classes = useStyles();

    const [projects] = useState(mockData);
    
    return (
        <div className={classes.root}>
            <ProjectToolbar />
            <div className={classes.content}>
                <Grid
                    container
                    spacing={3}
                >
                    {projects.map(project => (
                        <Grid
                            item
                            key={project.id}
                            lg={4}
                            md={6}
                            xs={12}
                        >
                            <ProjectCard project={project} />
                        </Grid>
                    ))}
                </Grid>
            </div>
            <div className={classes.pagination}>
                <Typography variant="caption">1-6 of 20</Typography>
                <IconButton>
                    <ChevronLeftIcon />
                </IconButton>
                <IconButton>
                    <ChevronRightIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default ProjectList;