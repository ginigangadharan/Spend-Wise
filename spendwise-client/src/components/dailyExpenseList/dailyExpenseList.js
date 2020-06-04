import React, { Fragment, Component } from "react";
import API from '../../api/api';
import * as moment from 'moment'

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineSharp';

import Modal from '../addExpense/addExpense';
import PageComp from '../pager/pager';

export default class DailyExpenselist extends Component {
    state = {
        expense: [],
        page: 1,
        per_page: 4,
        total: 0,
        total_pages: 0,
        showModal: false,
        isReccuring: false
    }

    handleInput = e => {
        const buttonValue = e.currentTarget.value;
        alert(buttonValue);
    }
    componentDidMount() {
        this.fetchData(this.state.page);
    }

    fetchData = (PageId) => {
        API.get('dailyexpenses?searchDate=' + moment().format('YYYY/MM/DD') + '&page=' + PageId)
            .then((response) => {
                this.setState({
                    expense: response.data.result,
                    page: response.data.page,
                    total: response.data.total,
                    total_pages: response.data.total_pages
                })
            }, (error) => {
                console.log(error);
            });
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
    }

    updatePage = (selectedPage) => {
        this.fetchData(selectedPage);
    }

    updateReccuring = () => {
        this.setState({
            isReccuring: !this.state.isReccuring
        })
    }

    render() {
        const { expense } = this.state;
        let expenseListComponent;
        let className;
        expenseListComponent = (
            <div className="container" style={{ paddingTop: "40px" }}>
                <div className="container">
                    <h4 className="d-inline-block">Daily Expense List - {moment().format('DD/MM/YYYY')}</h4>
                    <div className="pull-right">
                        <Button onClick={this.toggleModal} variant="contained" color="primary" size="small" startIcon={<AddCircleIcon />}>Add</Button>
                    </div>
                </div>
                <div className="row" style={{ paddingTop: "40px" }}>
                    {expense.map((expenses) => {
                        const { Id, Amount, Category, Description, DateofEntry, expenseType } = expenses;
                        if (expenseType === 'Payment') {
                            className = "card border-danger mb-3";
                        } else {
                            className = "card border-success mb-3"
                        }
                        return (
                            <div className="col" key={Id}>
                                <div className={className} key={Id}>
                                    <div className="card-body" key={Id}>
                                        <h5 className="card-title">{Category}</h5>
                                        <p className="card-text">{Description}</p>
                                        <p className="card-text">MYR {Amount}</p>
                                        <p className="card-text">{DateofEntry}</p>
                                        <Button value={Id} onClick={this.handleInput} size="small" variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
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
                {this.state.total_pages > 1 ? <PageComp page={this.state.page} totalPages={this.state.total_pages} pageUpdate={this.updatePage} /> : null}
                <Modal isOpen={this.state.showModal} isRepeat={this.state.isReccuring} closeModal={this.toggleModal} toggleReccuring={this.updateReccuring} />
            </Fragment>
        )
    }
}