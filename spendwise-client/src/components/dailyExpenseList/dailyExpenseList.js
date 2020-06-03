import React, { Fragment, Component } from "react";
import axios from 'axios';
import * as moment from 'moment'

export default class DailyExpenselist extends Component {
    state = {
        expense: []
    }

    handleInput = e => {
        const buttonValue = e.target.value;
        alert(buttonValue);
    }
    componentDidMount() {
        const postData = {
            searchDate: moment().format('YYYY/MM/DD'),
            userID: 1
        };

        axios.post('http://localhost:5000/api/todaysexpenses', postData)
            .then((response) => {
                this.setState({
                    expense: response.data.result
                })
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        const { expense } = this.state;
        let expenseListComponent;
        let className;
        expenseListComponent = (
            <div className="container" style={{ paddingTop: "40px" }}>
                <h3>Daily Expense List - {moment().format('DD/MM/YYYY')}</h3>
                <div className="row">
                    {expense.map((expenses) => {
                        const { Id, Amount, Category, Description, DateofEntry, expenseType } = expenses;
                        if (expenseType === 'Payment') {
                            className = "card border-danger mb-3";
                        } else {
                            className = "card border-success mb-3"
                        }
                        return (
                            <div className="col">
                                <div className={className}>
                                    <div className="card-body">
                                        <h5 className="card-title">{Category}</h5>
                                        <p className="card-text">{Description}</p>
                                        <p className="card-text">MYR {Amount}</p>
                                        <p className="card-text">{DateofEntry}</p>
                                        <button className="btn btn-danger" value={Id} onClick={this.handleInput}>Delete Transaction</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div >
        );
        return (
            <Fragment>
                {expenseListComponent}
            </Fragment>
        )
    }
}