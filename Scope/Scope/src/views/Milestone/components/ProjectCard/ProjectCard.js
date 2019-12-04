import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MilestoneRequest from '../../../../API/Milestone/index';
import ProjectRequest from '../../../../API/Project/index'
import { fontSize } from '@material-ui/system';
import { ExpansionPanel } from './components'
import Button from '@material-ui/core/Button';
import TeamRequest from '../../../../API/Team';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 'auto',
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
}));

const profile_pic = ["/images/avatars/avatar_1.png", "/images/avatars/avatar_2.png", "/images/avatars/avatar_3.png", "/images/avatars/avatar_4.png", "/images/avatars/avatar_5.png",
    "/images/avatars/avatar_6.png", "/images/avatars/avatar_7.png", "/images/avatars/avatar_8.png", "/images/avatars/avatar_9.png"]

export default function ProjectCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [milestones, setMilestones] = React.useState(null);
    const [team, setTeam] = React.useState(null);
    const [member, setMember] = React.useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        async function getMilestone() {
            // GET project_id from props.location.state.project_id passed from the ProjectCard Component
            const result = await MilestoneRequest.fetchMilestone(props.project_id)
            setMilestones(result)
            const team_result = await TeamRequest.fetchInfo(props.project_id, props.team_number)
            setTeam(team_result)
            const member_result = await TeamRequest.fetchTeamMember(props.project_id, props.team_number)
            setMember(member_result)
        }
        if (milestones == null) {
            getMilestone()
        }
    });

    function getTeamDescription() {
        if (team != null) {
            return team[0].teamProject_description
        }
    }

    function getTeamTitle() {
        if (team != null) {
            return team[0].teamProject_name
        }
    }
    function getMilestone() {
        if (milestones != null && milestones.length != 0) {
            return <div><ExpansionPanel milestones={milestones} /></div>
        }
    }
    function getTeamMember() {
        if (member != null) {
            return member;
        }
    }
    const directReview = () => {
        props.history.push('/review', {
            project_id: props.project_id,
            team_number: props.team_number
        })
    }

    const directUpdate = () => {
        props.history.push('/project-update', {
            project_id: props.project_id,
            team_number: props.team_number
        })
    }
    return (
        <Card className={classes.card}>
            <CardHeader
                title={getTeamTitle()}
                subheader={"Team # " + props.team_number}
            />
            <Button variant="contained" style={{ marginLeft: 1000, marginTop: -80 }} onClick={() => {
                directReview()
            }}>REVIEW</Button>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {getTeamDescription()}
                </Typography>
                {/** Team Member List */}
                {getTeamMember() != null ? getTeamMember().map((m) => {
                    return <div style={{padding: 10}}><Avatar alt="Remy Sharp" src={profile_pic[Math.floor(Math.random() * profile_pic.length)]} /><Typography>{m.student_firstname + " " + m.student_lastname}</Typography> </div>
                        // <Typography>{m.student_firstname + " " + m.student_lastname}</Typography>  
                }) : null}
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon onClick={directUpdate}/>
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <div>
                        {getMilestone()}
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}
