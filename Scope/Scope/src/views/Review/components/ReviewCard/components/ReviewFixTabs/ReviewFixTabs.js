import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Divider from '@material-ui/core/Divider';

import Avatar from '@material-ui/core/Avatar';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { ExpansionPanel, ExpansionPanelForm } from './components/index';
import TeamRequest from '../../../../../../API/Team/index';
import ReviewRequest from '../../../../../../API/Review/index';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
    },
    subTitle: {
        padding: 10,
        fontWeight: 300,
    }
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
    const [myReview, setMyReview] = React.useState(null);
    const [otherReview, setOtherReview] = React.useState(null);
    const [team_members, setTeamMembers] = React.useState(null);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = index => {
        setValue(index);
    };

    useEffect(() => {
        async function getReviewInfo() {
            // GET project_id from props.location.state.project_id passed from the ProjectCard Component
            var result = await ReviewRequest.fetchMyReview(props.project_id, props.team_number)
            setMyReview(result)
            result = await ReviewRequest.fetchOtherReview(props.project_id, props.team_number)
            setOtherReview(result)
            result = await TeamRequest.fetchTeamMember(props.project_id, props.team_number)
            setTeamMembers(result)
        }
        if (myReview == null) {
            getReviewInfo()
        }
    });

    async function callback() {
        const  result = await ReviewRequest.fetchOtherReview(props.project_id, props.team_number)
        setOtherReview(result)
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="My Review" {...a11yProps(0)} />
                    <Tab label="Review Team Members" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    {team_members != null ? team_members.map((t) => {
                        return <div key={t.student_id}>
                            <Typography className={classes.subTitle} variant="h4" component="h4">
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccountCircle />
                                        </Avatar>
                                    </ListItemAvatar>
                                    {/* <ListItemText primary="Course Name" /> */}
                                    Reviewer - {t.student_firstname} {t.student_lastname}
                                </ListItem>
                            </Typography>
                            <Divider />
                            <ExpansionPanel key={t.student_id} reviewer_id={t.student_id} project_id={props.project_id} team_number={props.team_number} myReview={myReview} />
                            <Divider />
                        </div>
                    }) : null}
                    {/* Item One */}
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    {team_members != null ? team_members.map((t) => {
                        return <div key={t.student_id}>
                            <Typography className={classes.subTitle} variant="h4" component="h4">
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <AccountCircle />
                                        </Avatar>
                                    </ListItemAvatar>
                                    {/* <ListItemText primary="Course Name" /> */}
                                    Reviewee - {t.student_firstname} {t.student_lastname}
                                </ListItem>
                            </Typography>
                            <Divider />
                            <ExpansionPanelForm callback={callback} key={t.student_id} reviewee_id={t.student_id} project_id={props.project_id} team_number={props.team_number} otherReview={otherReview} />
                            <Divider />
                        </div>
                    }) : null}
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
