import React, { Fragment, Component } from "react";
import DailyExpenseComp from '../dailyExpenseList/dailyExpenseList';
import API from '../../api/api';
import * as moment from 'moment'

import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ThumbDownAltIcon from '@material-ui/icons/ThumbDownAlt';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';

export default class DailyExpenseSummary extends Component {
    state = {
        summaryDetails: []
    }
    componentDidMount() {
        this.fetchSummary();
    }

    fetchSummary = () => {
        const postData = {
            searchDate: moment().format('YYYY/MM/DD')
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
        let className, summaryIcon;
        expenseSummaryComponent = (
            <div className="container" style={{ paddingTop: "100px" }}>
                <div className="row">
                    {summaryDetails.map((summary) => {
                        const { expenseType, Amount } = summary;
                        if (expenseType === 'Income') {
                            className = "card text-white bg-success mb-3";
                            summaryIcon = <ThumbUpAltIcon />;
                        } else {
                            className = "card text-white bg-danger mb-3";
                            summaryIcon = <ThumbDownAltIcon />;
                        }
                        return (
                            < div className="col" key={expenseType} >
                                <div className={className} key={expenseType}>
                                    <div className="card-body" key={expenseType}>
                                        <h5 className="card-title">{expenseType}</h5>
                                        <p className="card-text">{<MonetizationOnIcon />} {' '}{Amount ? Amount : 0}</p>
                                        {summaryIcon}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        );
        return (
            <Fragment>
                {expenseSummaryComponent}
                <DailyExpenseComp updateSummary={this.fetchSummary} />
            </Fragment>
        )
    }
}