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
import MilestoneRequest from '../../../../API/Milestone/index'
import { fontSize } from '@material-ui/system';
import { ExpansionPanel } from './components'
import Button from '@material-ui/core/Button';


import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
//import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 'auto',
        height: 'auto',
    },
    subTitle: {
        padding: 20,
        fontWeight: 300,
    },
    stuTitle: {
        paddingLeft: 50,
        paddingTop: 10,
        fontWeight: 300,
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

export default function ReviewCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [milestones, setMilestones] = React.useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        async function getMilestone() {
            // GET project_id from props.location.state.project_id passed from the ProjectCard Component
            const result = await MilestoneRequest.fetchMilestone(props.project_id)
            setMilestones(result)
        }
        if (milestones == null) {
            getMilestone()
        }
    });

    function getDescription() {
        if (milestones != null) {
            return milestones[0].project_description
        }
    }

    function getProjectTitle() {
        if (milestones != null) {
            return milestones[0].project_name
        }
    }

    function getCourseName() {
        if (milestones != null) {
            return milestones[0].course_name
        }
    }

    function getMilestone() {
        if (milestones != null) {
            return <div><ExpansionPanel milestones={milestones} /></div>
        }
    }

    const directReview = () => {
        props.history.push('/testing', {
            project_id: props.project_id,
            team_number: props.team_number
        })
    }
    return (
        <Card className={classes.card}>
            <Typography className={classes.subTitle} variant="h3" component="h3">
                Review
            </Typography>
            <Divider />
            <List className={classes.root}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Student Name" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <WorkIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Course Name" />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>
                            <BeachAccessIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Team Number"/>
                </ListItem>
                <Divider variant="inset" component="li" />
            </List>


            <CardHeader
                title= 'Rivew '
                subheader="Subheader"
            />
            {/* <Button variant="contained" style={{ marginLeft: 1000, marginTop: -80 }} onClick={() => {
                directReview()
            }}>REVIEW</Button> */}
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    Course Name
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
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
                        <ExpansionPanel/>
                </CardContent>
            </Collapse>
        </Card>
    );
}
