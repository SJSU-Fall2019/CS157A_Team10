import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { ProjectCard, TeamCard } from './components';
import Button from '@material-ui/core/Button';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}
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

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    subTitle: {
        padding: 20,
        fontWeight: 300,
    }
}));

const ScrollableTabsButtonAuto = (props) => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        // newValue is a index number for the TabPanel
        props.onChangeCourse(props.course_list[newValue].course_id)
        setValue(newValue);
    };


    return (
        <div className={classes.root}>
            <Typography className={classes.subTitle} variant="h3" component="h3">
                Courses
            </Typography>
            <Button variant="contained" color="primary" style={{ marginLeft: 1000, marginTop: -90 }} className={classes.button}
                onClick={() => {
                    props.history.push({
                        pathname: '/create-project',
                        state: { course_id: props.course_list[value].course_id }
                    })
                }}>
                Add Project
                </Button>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="scrollable"
                    scrollButtons="auto"
                    aria-label="scrollable auto tabs example"
                >
                    {/** Construct list of course Tab */}
                    {props.course_list.map((course, index) => {
                        return <Tab label={course.course_name} value={index} key={index} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {/** Construct list of project TabPanel */}
            {props.course_list.map((course, index) => {
                return <TabPanel value={value} index={index} key={index} >
                    <div style={styles.content}>
                        <Grid
                            container
                            spacing={3}
                        >
                            {props.project_list.map((p, index) => (
                                <Grid
                                    item
                                    key={index}
                                    lg={4}
                                    md={6}
                                    xs={12}
                                >
                                    <ProjectCard project={p} onChangeProject={props.onChangeProject}
                                        onDeleteProject={props.onDeleteProject} history={props.history} />
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                </TabPanel>
            })}
        </div>
    ); 
}

export default ScrollableTabsButtonAuto;