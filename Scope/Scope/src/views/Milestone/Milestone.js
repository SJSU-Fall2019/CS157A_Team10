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
                <label>Hello World</label>
                {this.state.milestones.map((milestone=>
                    {
                        return <label>{Milestone.project_name}</label>
                    }))}
            </div>
        );
    }
}

export default Milestone;
