import React, { Component } from 'react';
import TeamRequest from '../../API/Team/index';
import ReviewRequest from '../../API/Review/index';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Array of user info in this team
            team_member: [],
            // Array of reviews in this project+team
            reviews: [],
        }
    }

    async componentDidMount() {
        const teamResult = await TeamRequest.fetchTeamMember(this.props.location.state.project_id, this.props.location.state.team_number)
        const reviewResult = await ReviewRequest.fetchReview(this.props.location.state.project_id, this.props.location.state.team_number)
        this.setState(
            {
                team_member: teamResult,
                reviews: reviewResult,
            })
        
    }
    render() {
        return (
            <div className='wrapper' style={styles.content}>
                Team Member: 
                {JSON.stringify(this.state.team_member)}
                Reviews: 
                {JSON.stringify(this.state.reviews)}
            </div>
        )
    }
}

const styles = {
    content: {
        paddingTop: 150,
    },
    image:
    {
        marginTop: 50,
        display: 'inline-block',
        maxWidth: '100%',
        width: 560
    }
}

export default Testing;
