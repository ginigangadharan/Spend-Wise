import React, { Fragment, Component } from "react";

import DailyExpenseSummaryComp from '../dailyExpenseSummary/dailyExpenseSummary';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <DailyExpenseSummaryComp />
            </Fragment>
        )
    }
}