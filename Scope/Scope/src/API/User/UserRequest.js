
class UserRequest {
    static async fetchUserInfo() {
        let response = await fetch('http://localhost:8001/user/student_info',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                },
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async updateStudentHasProjects(project_id) {
        let response = await fetch('http://localhost:8001/user/updateStudentHasProjects',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                },
                body: JSON.stringify({
                    project_id: project_id,
                })
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default UserRequest