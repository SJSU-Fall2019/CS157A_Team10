import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

// import { ProductsToolbar, ProductCard } from './components';
import { ProjectToolbar, ProjectCard } from './components';
import mockData from './data';


// const useStyles = makeStyles(theme => ({
//     root: {
//         padding: theme.spacing(3)
//     },
//     content: {
//         marginTop: theme.spacing(2)
//     },
//     pagination: {
//         marginTop: theme.spacing(3),
//         display: 'flex',
//         alignItems: 'center',
//         justifyContent: 'flex-end'
//     }
// }));

const styles = {
    root: {
        padding: 10,
    },
    content: {
        marginTop: 20,
    },
    pagination: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    }
}

/*
* Represent a Project List component
*/
class ProjectList extends React.Component {
    state = {
        project: [],
    }

    async fetchProject() {
        await fetch('http://localhost:8001/user/project',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token')
                },

            }).then((response) => {
                response.json()
                    .then((responseJson) => {
                        this.setState(
                            {
                                project: responseJson
                            }
                        )
                    })
            })
            .catch((error) => {
                throw error
            });
    }

    componentDidMount() {
        this.fetchProject()
    }

    render() {
        return (
            <div style={styles.root}>
                <ProjectToolbar />
                <div style={styles.content}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {this.state.project.map(p => (
                            <Grid
                                item
                                key={p.project_id}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <ProjectCard project={p} props={this.props} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
                {/* <div style={styles.pagination}>
           <Typography variant="caption">1-6 of 20</Typography>
           <IconButton>
             <ChevronLeftIcon />
           </IconButton>
           <IconButton>
             <ChevronRightIcon />
           </IconButton>
         </div> */}
            </div>

        )
    }
}

export default ProjectList;
