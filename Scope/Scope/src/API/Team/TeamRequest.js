
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

    static async JoinTeam(project_id, team_number) {
        let response = await fetch('http://localhost:8001/team/join',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                },
                body: JSON.stringify({
                    project_id: project_id,
                    team_number: team_number,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async fetchTeamMember(project_id, team_number) {
        let response = await fetch('http://localhost:8001/team/member',
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

    static async fetchMyProject(course_id) {
        let response = await fetch('http://localhost:8001/team/myProject',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    course_id: course_id,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async addTeam(project_id, team_number, team_name, team_ProjectName, team_ProjectDescription) {
        let response = await fetch('http://localhost:8001/team/add-team',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
                body: JSON.stringify({
                    project_id :project_id,
                    team_number : team_number,
                    team_name : team_name,
                    team_ProjectName : team_ProjectName,
                    team_ProjectDescription : team_ProjectDescription
                })
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default TeamRequest