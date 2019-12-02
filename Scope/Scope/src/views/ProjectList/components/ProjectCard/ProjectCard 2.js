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
});


const ProjectCard = (props) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="/images/projects/project-card-bg.jpg"
                    title="Project Title"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.project.project_name}
          </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                       {props.project.project_description}
          </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    More
        </Button>
                <Button size="small" color="primary" variant="contained">
                    Delete
        </Button>
            </CardActions>
        </Card>
    );
}

export default ProjectCard;