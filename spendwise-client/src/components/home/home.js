import React, { Fragment, Component } from "react";

import NavComp from '../navBar/navBar';
import DailyExpenseSummaryComp from '../dailyExpenseSummary/dailyExpenseSummary';

export default class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavComp />
                <DailyExpenseSummaryComp />
            </Fragment>
        )
    }
}