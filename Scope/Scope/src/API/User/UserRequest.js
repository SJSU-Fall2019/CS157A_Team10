
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
}

export default UserRequest