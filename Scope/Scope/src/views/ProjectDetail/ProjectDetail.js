import React from 'react';
import { ProjectCard } from '../ProjectDetail/components'


const styles = {
    cardStyle:
    {
        margin: 20,
    }
}

class ProjectDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        }

    }
    render() {
        return (
            <div className="container">
                <div className="project_display" style={styles.cardStyle}>
                    <ProjectCard history={this.props.history}project_id={this.props.location.state.project_id} team_number={this.props.location.state.team_number} />
                </div>
            </div>
        );
    }
}

export default ProjectDetail;
