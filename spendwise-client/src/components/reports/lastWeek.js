import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import Back2Home from '../backToHome/backtoHome';
import * as moment from 'moment'

import API from '../../api/api';

class lastWeek extends Component {
    statData = [];
    incomeLabels = [];
    incomeValues = [];
    expenseLables = [];
    expenseValues = [];
    state = {
        barChartLabelsI: [],
        barChartValuesI: [],
        barChartLabelsE: [],
        barChartValuesE: [],
        startDate: moment().add(-7, 'd').format('YYYY/MM/DD'),
        endDate: moment().format('YYYY/MM/DD')
    }

    fetchStat = () => {
        const postData = {
            startDate: this.state.startDate,
            endDate: this.state.endDate
        }
        API.post('categoryStat', postData)
            .then((response) => {
                response.data.result.incomeData.map((row) => {
                    this.incomeLabels.push(row.category);
                    this.incomeValues.push(row.Amount)
                });
                response.data.result.expenseData.map((row) => {
                    this.expenseLables.push(row.category);
                    this.expenseValues.push(row.Amount)
                });
                this.setState({
                    barChartLabelsI: this.incomeLabels,
                    barChartValuesI: this.incomeValues,
                    barChartLabelsE: this.expenseLables,
                    barChartValuesE: this.expenseValues,
                })

            }, (error) => {
                console.log(error);
            });
    }
    componentDidMount() {
        this.fetchStat();
    }

    render() {
        const { barChartLabelsI, barChartValuesI, barChartLabelsE, barChartValuesE } = this.state;
        let incomeChartData = {
            labels: barChartLabelsI,
            datasets: [
                {
                    label: 'Income',
                    backgroundColor: 'rgba(75,192,192,1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: barChartValuesI
                }
            ]
        }
        let expenseChartData = {
            labels: barChartLabelsE,
            datasets: [
                {
                    label: 'Expense',
                    backgroundColor: 'rgba(245, 0, 87, 1)',
                    borderColor: 'rgba(0,0,0,1)',
                    borderWidth: 2,
                    data: barChartValuesE
                }
            ]
        }
        let incomeChartComponent, expenseChartComponent;
        incomeChartComponent = (
            <Bar
                data={incomeChartData}
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
        );
        expenseChartComponent = (
            <Bar
                data={expenseChartData}
                options={{
                    title: {
                        display: true,
                        text: 'Average Expense per category',
                        fontSize: 20
                    },
                    legend: {
                        display: true,
                        position: 'right'
                    }
                }}
            />
        );
        return (
            <>
                <Back2Home />
                <div className="container">
                    <div className="row" style={{ paddingTop: "40px" }}>
                        <span style={{ paddingLeft: "300px" }}>Income Vs Expense (From {moment(this.state.startDate).format('DD-MM-YYYY')} - To {moment(this.state.endDate).format('DD-MM-YYYY')})</span>
                        <div className="col-sm-6">
                            {incomeChartComponent}
                        </div>
                        <div className="col-sm-6">
                            {expenseChartComponent}
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default lastWeek;