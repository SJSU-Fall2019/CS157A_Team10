
class ReviewRequest {
    static async fetchReview(project_id, team_number) {
        let response = await fetch('http://localhost:8001/review/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
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