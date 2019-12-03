
class MileStoneRequest {
    static async fetchMilestone(project_id) {
        let response = await fetch('http://localhost:8001/milestone/',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                },
                body: JSON.stringify({
                    project_id: project_id
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async createMilestone(milestone_title, milestone_description) {
        let response = await fetch('http://localhost:8001/milestone/create',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                },
                body: JSON.stringify({
                    milestone_title: milestone_title,
                    milestone_description: milestone_description
                })
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default MileStoneRequest