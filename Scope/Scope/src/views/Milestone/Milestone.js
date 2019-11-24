import React, { Component } from 'react';
import MilestoneRequest from '../../API/Milestone/index';

const styles = {

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
    async componentDidMount() {
        // Change state.project_id to props.project_id or navigation param
        const result = await MilestoneRequest.fetchMilestone(1)
        this.setState(
            {
                milestones: result,
            })
    }

    render() {
        return (
            <div>
                {this.state.milestones.map((milestone => {
                    return <div className ="database_data">
                        <div>Project Title : {milestone.project_name}</div>
                        <div>Course Name : {milestone.course_name}</div>
                        <div>Milestone Number : {milestone.milestone_number}</div>
                        <div>Milestone Title: {milestone.milestone_title}</div>
                        <div>Milestone Description : {milestone.milestone_description}</div>
                    </div>
                }))}
            </div>
        );
    }
}

export default Milestone;
