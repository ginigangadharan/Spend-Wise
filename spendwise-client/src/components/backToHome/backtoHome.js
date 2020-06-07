import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import HomeSharp from '@material-ui/icons/HomeSharp';
import { Link } from "react-router-dom";

class backtoHome extends Component {
    render() {
        return (
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <Fab variant="extended">
                        <Link to={"/"}><HomeSharp /></Link>
                    </Fab>
                </div>
            </div>
        );
    }
}

export default backtoHome;