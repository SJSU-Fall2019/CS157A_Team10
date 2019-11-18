
class TeamRequest {
    static async fetchTeam(project_id) {
        let response = await fetch('http://localhost:8001/team/project-team',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                    project_id: project_id
                },
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default TeamRequest