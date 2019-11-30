
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
}

export default ReviewRequest