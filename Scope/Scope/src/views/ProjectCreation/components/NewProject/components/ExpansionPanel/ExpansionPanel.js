import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MilestoneRequest from '../../../../../../API/Milestone/index';
import {
    Grid,
    Button,
    TextField
} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

export default function ControlledExpansionPanels(props) {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [values, setValues] = useState({
        milestone_title: '',
        milestone_description: '',
    });

    const [milestoneId, setID] = React.useState([]);

    const handleChange = panel => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleInputChange = (event) => {
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    const createMilestones = async () => {
        const result = await MilestoneRequest.createMilestone(values.milestone_title, values.milestone_description);
        const milestone_id = result.insertId
        var copy = milestoneId
        copy.push(milestone_id)
        setID(copy)
        props.setMilestone_id(copy)
        setExpanded(false)
    }
    return (
        <div className={classes.root} style={{ width: 700 }}>
            <div className="expansionPanel">
                {props.milestones.map((milestone, index) => {
                    const panelName = "panel" + index + 1
                    return <ExpansionPanel expanded={expanded === panelName} onChange={handleChange(panelName)}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>Milestone # {index + 1}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Grid
                                item
                                md={6}
                                xs={12}
                            >
                                <TextField
                                    fullWidth
                                    label="Milestone Title"
                                    margin="dense"
                                    name="milestone_title"
                                    onChange={handleInputChange}
                                    required
                                    value={values.milestone_title}
                                    variant="outlined"
                                />
                                <TextField
                                    fullWidth
                                    label="Milestone Description"
                                    margin="dense"
                                    name="milestone_description"
                                    multiline
                                    rows='4'
                                    style={{ width: 600 }}
                                    onChange={handleInputChange}
                                    required
                                    value={values.milestone_description}
                                    variant="outlined"
                                />
                                <Button
                                    color="primary"
                                    variant="contained"
                                    onClick={createMilestones}
                                    style={{ marginBottom: 10, marginLeft: 500 }}
                                >
                                    Submit
          </Button>
                            </Grid>
                        </ExpansionPanelDetails>
                    </ExpansionPanel>
                })}
            </div>
        </div>
    );
}
