import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Grid,Typography} from '@material-ui/core';
import Box from '@material-ui/core/Box';
import {ProjectCard, TeamCard } from './components';

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

const ScrollableTabsButtonAuto = props => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const ProjectData = [
        {
            project_title: "Title 1"
        },
        { 
            project_title: "Title 2" 
        },
        { 
            project_title: "Title 3" 
        }
    ]

    return (
        <div className={classes.root}>
            <Typography className={classes.subTitle} variant="h3" component="h3">
                Courses
            </Typography>
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
                    <Tab label="Item One" {...a11yProps(0)} />
                    <Tab label="Item Two" {...a11yProps(1)} />
                    <Tab label="Item Three" {...a11yProps(2)} />
                    <Tab label="Item Four" {...a11yProps(3)} />
                    <Tab label="Item Five" {...a11yProps(4)} />
                    <Tab label="Item Six" {...a11yProps(5)} />
                    <Tab label="Item Seven" {...a11yProps(6)} />
                </Tabs>
            </AppBar>
            <TabPanel value={value} index={0}>
                <div style={styles.content}>
                    <Grid
                        container
                        spacing={3}
                    >
                        {ProjectData.map(p => (
                            <Grid
                                item
                                key={p.project_title}
                                lg={4}
                                md={6}
                                xs={12}
                            >
                                <ProjectCard project={p}/>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
                Item Three
            </TabPanel>
            <TabPanel value={value} index={3}>
                Item Four
            </TabPanel>
            <TabPanel value={value} index={4}>
                Item Five
            </TabPanel>
            <TabPanel value={value} index={5}>
                Item Six
            </TabPanel>
            <TabPanel value={value} index={6}>
                Item Seven
            </TabPanel>
            {/* <Typography variant="h2" component="h2">
                Teams
            </Typography> */}
        </div>
    );
}

export default ScrollableTabsButtonAuto;