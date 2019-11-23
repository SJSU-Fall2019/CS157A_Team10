
class CourseRequest {
    static async fetchStudentCourseList() {
        let response = await fetch('http://localhost:8001/course/student',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: window.sessionStorage.getItem('auth_token')
                },
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default CourseRequest