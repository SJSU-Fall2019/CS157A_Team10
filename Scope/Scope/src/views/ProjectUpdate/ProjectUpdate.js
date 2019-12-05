import React, { Component } from 'react';
import TeamRequest from '../../API/Team/index';
import ReviewRequest from '../../API/Review/index';
import UserRequest from '../../API/User/index';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team_name: '',
            team_description: '',
        }
    }

    async componentDidMount() {
        const team_result = await TeamRequest.fetchInfo(this.props.location.state.project_id, this.props.location.state.team_number)
        this.setState(
            {
                team_name: team_result[0].teamProject_name,
                team_description: team_result[0].teamProject_description
            }
        )
    }
    updateTeamName = (event, value) => {
        this.setState(
            {
                team_name: event.target.value
            })
    }

    updateTeamDescription = (event, value) => {
        this.setState(
            {
                team_description: event.target.value
            })
    }

    updateTeam = async () => {
        await TeamRequest.updateTeam(this.props.location.state.project_id, this.props.location.state.team_number, this.state.team_name, this.state.team_description)
        this.props.history.push('/dashboard', {
        })
    }

    render() {
        return (

            <div className='wrapper' style={styles.content}>
                <Card className={'card_container'}>
                    <CardContent>
                        <div>
                            <Typography align="left" gutterBottom variant="h5" component="h2">Team Name</Typography>
                        </div>
                        <div>
                            <TextField
                                id="team_name"
                                type="search"
                                className={"team_name"}
                                margin="normal"
                                onChange={this.updateTeamName}
                                value={this.state.team_name}
                            />
                        </div>
                        <div style={{ marginTop: 50 }}>
                            <Typography align="left" gutterBottom variant="h5" component="h2">Team Description</Typography>
                        </div>
                        <div>
                            <TextField
                                fullWidth
                                margin="dense"
                                name="teamDescription"
                                multiline
                                rows='4'
                                style={{ width: 600 }}
                                required
                                onChange={this.updateTeamDescription}
                                value={this.state.team_description}
                                variant="outlined"
                            />
                        </div>
                        <Button variant="contained" color="primary" style={{ marginTop: 20 }} onClick={this.updateTeam}>
                            Update Team
                </Button>
                    </CardContent>

                </Card>

            </div>
        )
    }
}

const styles = {
    content: {
        padding: 30,
    },
}

export default Testing;
