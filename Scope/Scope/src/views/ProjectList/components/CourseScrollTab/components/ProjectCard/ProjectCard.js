import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


// import { ProductsToolbar, ProductCard } from './components';
// import mockData from './data';


const useStyles = makeStyles({
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    subTitle: {
        padding: 20,
        fontWeight: 300,
    }
});




const ProjectCard = (props) => {
    const classes = useStyles();

    const directMilestone = () => {
        props.history.push('/milestone', {
            project_id: props.project.project_id,
            team_number: props.project.team_number
        })
    }
    // console.log(props.project)

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
                        Team # {props.project.team_number}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        {/* {props.project.project_name} */}
                        {props.project.teamProject_name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {/* {props.project.project_description} */}
                        Project Description : {props.project.teamProject_description.slice(0,50) + " ..."}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions align="right">
                <Button size="small" color="primary" onClick={directMilestone}>
                    More
                </Button>
                
            </CardActions>
        </Card>
    );
} 

export default ProjectCard;