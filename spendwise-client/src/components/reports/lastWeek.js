import React, { Component } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import Back2Home from '../backToHome/backtoHome';

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
            <>
                <Back2Home />
                <div className="container">
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <span style={{ paddingLeft: "500px" }}>Income Vs Expense (From - To)</span>
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
            </>
        );
    }
}

export default lastWeek;