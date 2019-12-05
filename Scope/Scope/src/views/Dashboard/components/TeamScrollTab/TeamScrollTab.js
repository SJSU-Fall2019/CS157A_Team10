import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { Grid, Typography } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import { TeamCard } from './components';

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

    // const ProjectData = [
    //     {
    //         project_title: "Title 1"
    //     },
    //     {
    //         project_title: "Title 2"
    //     },
    //     {
    //         project_title: "Title 3"
    //     }
    // ]

    return (
        <div className={classes.root}>
            <Typography className={classes.subTitle} variant="h3" component="h3">
                Teams
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
                    {/** Construct list of Team tab */}
                    {props.team_list.map((team, index) => {
                        return <Tab label={team.team_name} value={index} key ={index} {...a11yProps(index)} />
                    })}
                </Tabs>
            </AppBar>
            {/** Construct list of project TabPanel */}
            {props.team_list.map((team, index) => {
                return <TabPanel value={value} key ={index} index={index}>
                    <div style={styles.content}>
                        <Grid
                            container
                            spacing={3}
                        >
                            <TeamCard team={team} history={props.history} project_id ={props.project_id}/>
                        </Grid>
                    </div>
                </TabPanel>
            })}
        </div>
    );
}

export default ScrollableTabsButtonAuto;