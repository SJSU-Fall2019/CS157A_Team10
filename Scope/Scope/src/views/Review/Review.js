import React, { Component } from 'react';
import { ReviewCard } from './components/index'


const styles = {
    cardStyle:
    {
        margin: 20,
    }
}

/**
 * Page displays a list of milestone
 */
class Review extends React.Component {
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
                    <ReviewCard  />
                </div>
            </div>
        );
    }
}

export default Review
