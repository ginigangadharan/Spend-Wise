import React, { Component } from "react";

export default class DailyExpenseSummary extends Component {
    render() {
        return (
            <div class="container" style={{ paddingTop: "100px" }}>
                <div class="row">
                    <div class="col">
                        <div class="card text-white bg-success mb-3">
                            <div class="card-body">
                                <h5 class="card-title">Income</h5>
                                <p class="card-text">15000 MYR</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card text-white bg-danger mb-3" >
                            <div class="card-body">
                                <h5 class="card-title">Expense</h5>
                                <p class="card-text">8900 MYR</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}