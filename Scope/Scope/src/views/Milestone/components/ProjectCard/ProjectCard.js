import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MilestoneRequest from '../../../../API/Milestone/index';
import ProjectRequest from '../../../../API/Project/index'
import { fontSize } from '@material-ui/system';
import { ExpansionPanel } from './components'
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: 'auto',
        height: 600,
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

export default function ProjectCard(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(true);
    const [milestones, setMilestones] = React.useState(null);
    const [project, setProject] = React.useState(null);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    useEffect(() => {
        async function getMilestone() {
            // GET project_id from props.location.state.project_id passed from the ProjectCard Component
            const result = await MilestoneRequest.fetchMilestone(props.project_id)
            setMilestones(result)
            const project = await ProjectRequest.ProjectInfo(props.project_id)
            setProject(project[0])
        }
        if (milestones == null) {
            getMilestone()
        }
    });

    function getDescription() {
        if (project != null) {
            return project.project_description
        }
    }

    function getProjectTitle() {
        if (project != null) {
            return project.project_name
        }
    }
    function getMilestone() {
        if (milestones != null && milestones.length!=0) {
            return <div><ExpansionPanel milestones={milestones} /></div>
        }
    }
    const directReview = () => {
        props.history.push('/review', {
            project_id: props.project_id,
            team_number: props.team_number
        })
    }
    return (
        <Card className={classes.card}>
            <CardHeader
                title={getProjectTitle()}
                subheader={"Team # " + props.team_number}
            />
            <Button variant="contained" style={{ marginLeft: 1000, marginTop: -80 }} onClick={() => {
                directReview()
            }}>REVIEW</Button>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {getDescription()}
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
                    <div>
                        {getMilestone()}
                    </div>
                </CardContent>
            </Collapse>
        </Card>
    );
}
