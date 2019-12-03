import React from 'react';
import { ProjectCard} from './components/index'

const styles = {
    cardStyle:
    {
        margin: 20,
    }
}

/**
 * Page displays a list of milestone
 */
class Milestone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            project_id: 1,
            milestones: [],
        }
    }
    render() {
        return (
            <div className="container">
                <div className="project_display" style={styles.cardStyle}>
                    <ProjectCard project_id={this.props.location.state.project_id} history={this.props.history} team_number={this.props.location.state.team_number} />
                </div>
            </div>
        );
    }
}

export default Milestone;
