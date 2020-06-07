import React, { Component } from 'react';
import { Pie, Doughnut } from 'react-chartjs-2';
import Back2Home from '../backToHome/backtoHome';

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
            <>
                <Back2Home />
                <div className="container">
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <span style={{ paddingLeft: "500px" }}> Income Vs Expense (From - To) Previous Report</span>
                        <div className="col-sm-6">
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
                        </div>
                        <div className="col-sm-6">
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
                    </div>
                </div>
            </>
        );
    }
}

export default previousMonth;