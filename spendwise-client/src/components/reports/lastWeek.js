import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Fab from '@material-ui/core/Fab';
import HomeSharp from '@material-ui/icons/HomeSharp';
import { Link } from "react-router-dom";

class lastWeek extends Component {
    state = {
        barData: {
            labels: ['January', 'February', 'March',
                'April', 'May'],
            datasets: [
                {
                    label: 'Income',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: [65, 59, 80, 81, 56]
                }
            ]
        },
        lineData: {
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
    }
    render() {
        return (
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row">
                    <Fab variant="extended">
                        <Link to={"/"}><HomeSharp /></Link>
                    </Fab>
                    <span style={{ paddingLeft: "500px" }}>Last Week Expense Details</span>
                </div>
                <div className="row" style={{ paddingTop: "40px" }}>
                    <div className="col-sm-6">
                        <Bar
                            data={this.state.barData}
                            options={{
                                title: {
                                    display: true,
                                    text: 'Average Income per category',
                                    fontSize: 20
                                },
                                legend: {
                                    display: true,
                                    position: 'right'
                                }
                            }}
                        />
                    </div>
                    <div className="col-sm-6">
                        <Line
                            data={this.state.lineData}
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
                </div>
            </div>
        );
    }
}

export default lastWeek;