import React from 'react';
import { ReviewCard } from './components/index'
import TeamRequest from '../../API/Team/index';
import ReviewRequest from '../../API/Review/index';
import UserRequest from '../../API/User/index';


const styles = {
    cardStyle:
    {
        margin: 20,
    }
}

/**
 * Page displays a list of milestone
 */
class Review extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            student_id: 0,
            milestones: undefined,
            // Array of user info in this team
            team_member: [],
            // Array of reviews in this project+team
            reviews: [],
            myReviews: [],
            otherReviews: [],
        }
    }

    async componentDidMount() {
        const teamResult = await TeamRequest.fetchTeamMember(this.props.location.state.project_id, this.props.location.state.team_number)
        const reviewResult = await ReviewRequest.fetchMyReview(this.props.location.state.project_id, this.props.location.state.team_number)
        const otherReviewResult = await ReviewRequest.fetchOtherReview(this.props.location.state.project_id, this.props.location.state.team_number)
        const UserResult = await UserRequest.fetchUserInfo()
        this.setState(
            {
                team_member: teamResult,
                myReviews: reviewResult,
                otherReviews: otherReviewResult,
                student_id: UserResult.student_id,
            })
    }
    render() {
        return (
            <div className="container">
                <div className="project_display" style={styles.cardStyle}>
                    <ReviewCard project_id={this.props.location.state.project_id} team_number={this.props.location.state.team_number}/>
                </div>
            </div>
        );
    }
}

export default Review
