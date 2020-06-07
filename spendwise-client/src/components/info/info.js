import React, { Component } from 'react';

class Info extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{ paddingLeft: "200px", paddingTop: "50px" }}>
                <strong>{this.props.Message}</strong>
            </div>
        );
    }
}

export default Info;