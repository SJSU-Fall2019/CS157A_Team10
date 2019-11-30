
class ProjectRequest {
    static async fetchCourseProject(course_id) {
        let response = await fetch('http://localhost:8001/project/course-project',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    auth_token: sessionStorage.getItem('auth_token'),
                    course_id: course_id
                },
            })
        let responseJson = await response.json();
        return responseJson
    }

    static async deleteProject(project_id) {
        let response = await fetch('http://localhost:8001/project/delete',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    project_id: project_id
                },
            })
        let responseJson = await response.json();
        return responseJson
    }
}

export default ProjectRequest