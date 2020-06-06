import React, { Component } from 'react';
import Fab from '@material-ui/core/Fab';
import HomeSharp from '@material-ui/icons/HomeSharp';
import { Link } from "react-router-dom";
import { Pie, Doughnut } from 'react-chartjs-2';

class previousMonth extends Component {
    state = {
        labels: ['January', 'February', 'March',
            'April', 'May'],
        datasets: [
            {
                label: 'Rainfall',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                ],
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
                <Pie
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

                <Doughnut
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

export default previousMonth;