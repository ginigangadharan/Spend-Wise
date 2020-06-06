import React, { Component } from 'react';

class reportsDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            feeds: getFeeds()
        };
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default reportsDashboard;