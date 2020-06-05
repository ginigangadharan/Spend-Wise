import React, { Fragment, Component } from "react";
import DailyExpenseComp from '../dailyExpenseList/dailyExpenseList';
import API from '../../api/api';
import * as moment from 'moment'

export default class DailyExpenseSummary extends Component {
    state = {
        summaryDetails: []
    }
    componentDidMount() {
        this.fetchSummary();
    }

    fetchSummary = () => {
        const postData = {
            searchDate: moment().format('YYYY/MM/DD'),
            userID: 1
        };

        API.post('dailyexpensesummary', postData)
            .then((response) => {
                this.setState({
                    summaryDetails: response.data.result
                })
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        const { summaryDetails } = this.state;
        let expenseSummaryComponent;
        let className;
        expenseSummaryComponent = (
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row">
                    {summaryDetails.map((summary) => {
                        const { expenseType, Amount } = summary;
                        if (expenseType === 'Income') {
                            className = "card text-white bg-success mb-3";
                        } else {
                            className = "card text-white bg-danger mb-3"
                        }
                        return (
                            <div className="col" key={expenseType}>
                                <div className={className} key={expenseType}>
                                    <div className="card-body" key={expenseType}>
                                        <h5 className="card-title">{expenseType}</h5>
                                        <p className="card-text">{Amount ? Amount : 0} MYR</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
        return (
            <Fragment>
                {expenseSummaryComponent}
                <DailyExpenseComp updateSummary={this.fetchSummary} />
            </Fragment>
        )
    }
}