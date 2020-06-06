import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import Fab from '@material-ui/core/Fab';
import HomeSharp from '@material-ui/icons/HomeSharp';
import { Link } from "react-router-dom";

class customReport extends Component {
    state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                fill: false,
                lineTension: 0.5,
                backgroundColor: 'rgba(75,192,192,1)',
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 2,
                data: [65, 59, 80, 81, 56]
            }
        ]
    }
    render() {
        return (
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <Fab variant="extended">
                        <Link to={"/"}><HomeSharp /></Link>
                    </Fab>
                </div>
                <Line
                    data={this.state}
                    options={{
                        title: {
                            display: true,
                            text: 'Average Rainfall per month',
                            fontSize: 20
                        },
                        legend: {
                            display: true,
                            position: 'right'
                        }
                    }}
                />
            </div>
        );
    }
}

export default customReport;