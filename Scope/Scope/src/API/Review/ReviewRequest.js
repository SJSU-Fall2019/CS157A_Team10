
class ReviewRequest {
    static async fetchMyReview(project_id, team_number) {
        let response = await fetch('http://localhost:8001/review/myReview',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    project_id: project_id,
                    team_number: team_number,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async fetchReviewInfo(project_id, team_number) {
        let response = await fetch('http://localhost:8001/review/info',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    project_id: project_id,
                    team_number: team_number,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }
    static async fetchOtherReview(project_id, team_number) {
        let response = await fetch('http://localhost:8001/review/otherReview',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    project_id: project_id,
                    team_number: team_number,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async fetchSpecificReview(project_id, team_number, reviewer_id, milestone_number) {
        let response = await fetch('http://localhost:8001/review/specific',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    project_id: project_id,
                    team_number: team_number,
                    reviewer_id: reviewer_id,
                    milestone_number: milestone_number
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async updateReview(milestone_number, reviewee, rating, review_description, review_id) {
        let response = await fetch('http://localhost:8001/review/update_review',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    reviewee: reviewee,
                    milestone_number: milestone_number,
                    rating: rating,
                    review_description: review_description,
                    review_id: review_id,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default ReviewRequest