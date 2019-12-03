import React, { Component } from 'react';
import TeamRequest from '../../API/Team/index';
import ReviewRequest from '../../API/Review/index';
import UserRequest from '../../API/User/index';

class Testing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            student_id: 0,
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
        console.log(otherReviewResult)
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
            <div className='wrapper' style={styles.content}>
                Team Member:
                {JSON.stringify(this.state.team_member)}
                MyReviews:
                {JSON.stringify(this.state.myReviews)}
                OtherReviews:
                {JSON.stringify(this.state.otherReviews)}
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
