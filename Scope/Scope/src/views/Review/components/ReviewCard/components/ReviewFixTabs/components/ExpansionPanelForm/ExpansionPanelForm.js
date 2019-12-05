import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MilestoneRequest from '../../../../../../../../API/Milestone/index';
import CheckCircleOutline from '@material-ui/icons/CheckCircleOutline';
// import Rating from '@material-ui/lab/Rating';
import UserRequest from '../../../../../../../../API/User/index';
import { ExpansionForm } from './components/index';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '16%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
        flexBasis: '40%',
    },
}));

const rating = ["Unsatisfactory", "Improvement needed", "Meets expectations", "Exceeds expectations"]

export default function ControlledExpansionPanels(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [milestone, setMilestone] = React.useState(null);
    const [myId, setMyID] = React.useState(null);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    useEffect(() => {
        async function getMilestone() {
            // GET project_id from props.location.state.project_id passed from the ProjectCard Component
            var result = await MilestoneRequest.fetchMilestone(props.project_id)
            setMilestone(result)
            result = await UserRequest.fetchUserInfo()
            setMyID(result[0].student_id)
        }
        if (milestone == null) {
            getMilestone()
        }
    });


    function getMilestone(index) {
        if (milestone != null) {
            return milestone[index].milestone_number
        }
    }
    function getReview(milestone_number) {
        var review = null;
        props.otherReview.map((r) => {
            if (r.reviewer == myId && r.reviewee == props.reviewee_id && r.milestone_number == milestone_number) {
                review = r;
            }
        })
        return review;
    }
    function getMilestoneTitle(index) {
        if (milestone != null) {
            return milestone[index].milestone_title
        }
    }

    function callback()
    {
        props.callback()
        setExpanded(false);
    }
    return (
        <div className={classes.root}>
            {milestone != null ? milestone.map((milestone, index) => {
                const panelName = "panel" + index + 1
                return <ExpansionPanel expanded={expanded === panelName} key={index} onChange={handleChange(panelName)}>
                    <ExpansionPanelSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography className={classes.heading}>{"Milestone # " + getMilestone(index)}</Typography>
                        <Typography className={classes.secondaryHeading}>{getMilestoneTitle(index)}</Typography>
                        <Typography className={classes.secondaryHeading}>{getReview(index + 1) != null ? rating[getReview(index + 1).rating - 1] : "NOT YET REVIEWED"}</Typography>
                        {getReview(index + 1)!= null && getReview(index+1).review_description !=null ? <CheckCircleOutline /> : null}
                    </ExpansionPanelSummary>
                    <ExpansionPanelDetails>
                        <ExpansionForm updateForm={callback} review_id = {getReview(index + 1) != null ? getReview(index + 1).review_id : null}reviewee_id= {props.reviewee_id}review_description= {getReview(index + 1) != null ? getReview(index + 1).review_description : null} milestone_number={getMilestone(index)}/>
                        <Typography>
                        </Typography>
                        {/* {getReview(index + 1) != null ? <Rating name="read-only" style={{ marginTop: 30, marginLeft: 600 }} max={4} value={getReview(index + 1).rating} readOnly /> : null} */}
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            }) : null}
        </div>
    );
}
