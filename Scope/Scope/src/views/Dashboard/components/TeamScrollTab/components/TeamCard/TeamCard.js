import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PeopleIcon from '@material-ui/icons/People';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TeamRequest from '../../../../../../API/Team/index';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        width: 345,
    },
    media: {
        height: 140,
    },
    subTitle: {
        padding: 10,
        fontWeight: 300,
    }
});


const TeamCard = (props) => {
    const classes = useStyles();
    const directMilestone = () => {
        props.history.push('/milestone', {
            project_id: props.project_id,
            team_number: props.team.team_number
        })
    }
    /** JOIN TEAM API Request */
    const joinTeam = () => {
        TeamRequest.JoinTeam(props.project_id, props.team.team_number)
        return true;
    }
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
        joinTeam();
    };

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/images/projects/project-card-bg.jpg"
                    title="Project Title"
                />
                <CardContent>
                    <Typography className={classes.subTitle} align="right" gutterBottom variant="h5" component="h2">
                        {/* {props.project.project_name} */}
                        Team # {props.team.team_number}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {/* {props.project.project_name} */}
                        {props.team.teamProject_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {props.project.project_description} */}
                        Project Description : {props.team.teamProject_description.slice(0,50) + " ..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions align="right">
                {/* <Button size="small" color="primary">
                    Team Members
                </Button> */}
                <IconButton aria-label="add to favorites" onClick={handleClickOpen}>
                    <PeopleIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <Button size="small" color="primary" onClick={directMilestone}>
                    More
                </Button>
            </CardActions>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title" style={{ alignSelf: 'center' }}>{"JOIN TEAM #" + props.team.team_number}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Later
          </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Yes
          </Button>
                </DialogActions>
            </Dialog>
        </Card>
    );
}

export default TeamCard;