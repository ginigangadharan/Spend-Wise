import React, { Fragment, Component } from "react";
import API from '../../api/api';
import * as moment from 'moment'

import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircleOutlineSharp';

import ModalExpense from '../addExpense/addExpense';
import PageComp from '../pager/pager';

export default class DailyExpenselist extends Component {
    state = {
        expense: [],
        page: 1,
        per_page: 4,
        total: 0,
        total_pages: 0,
        showModal: false,
        isReccuringTransaction: false,
        dateofEntry: moment().format('MM-DD-YYYY'),
        startDate: moment().format('MM-DD-YYYY'),
        endDate: moment().add(5, 'd').format('MM-DD-YYYY'),
        minDate: moment().add(1, 'd').format('MM-DD-YYYY'),
        maxDate: moment().add(5, 'd').format('MM-DD-YYYY'),
        validated: false
    }
    constructor(props) {
        super(props);
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

    handleDeleteEntry = e => {
        const transactionId = e.currentTarget.value;
        API.delete('deleteTransaction/' + transactionId)
            .then((response) => {
                this.fetchData(1);
                this.props.updateSummary();
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

    toggleReccuring = () => {
        this.setState({
            isReccuringTransaction: !this.state.isReccuringTransaction
        })
    }

    updateStateValues = (updatedStateValues) => {
        this.setState(updatedStateValues)
    }

    formatPayload = (payload) => {
        let dataDict = [];
        let transactionDate;
        console.log(payload)
        let start = moment(payload.startDate, "YYYY/MM/DD");
        let end = moment(payload.endDate, "YYYY/MM/DD");
        let days = moment.duration(end.diff(start)).asDays() + parseInt(1);
        for (var i = 0; i < days; i++) {
            let dataObj = [];
            transactionDate = moment(payload.startDate).add(i, 'd').format('YYYY/MM/DD')
            dataObj.push(parseInt(payload.categoryId), payload.description, parseInt(payload.amount), parseInt(payload.expenseType), transactionDate, 1, 1)
            dataDict.push(dataObj);
        }
        return dataDict;
    }

    invokeSingleTransaction = (metaData) => {
        API.post('addTransaction', metaData)
            .then((response) => {
                this.setState({
                    showModal: false
                })
                this.fetchData(1);
                this.props.updateSummary();
            }, (error) => {
                console.log(error);
            });
    }

    invokeBulkTransaction = (metaData) => {
        API.post('addBulkTransaction', metaData)
            .then((response) => {
                this.setState({
                    showModal: false
                })
                this.fetchData(1);
                this.props.updateSummary();
            }, (error) => {
                console.log(error);
            });
    }

    createTransaction = (payloadData) => {
        if (!payloadData.isRecurring) {
            this.invokeSingleTransaction(payloadData)
        } else {
            this.invokeBulkTransaction(this.formatPayload(payloadData));
        }
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
                            <div className="col-sm-3" key={Id}>
                                <div className={className} key={Id}>
                                    <div className="card-body" key={Id}>
                                        <h5 className="card-title">{Category}</h5>
                                        <p className="card-text">{Description}</p>
                                        <p className="card-text">MYR {Amount}</p>
                                        <p className="card-text">{DateofEntry}</p>
                                        <Button value={Id} onClick={this.handleDeleteEntry} size="small" variant="contained" color="secondary" startIcon={<DeleteIcon />}>Delete</Button>
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
                <ModalExpense
                    modifyStateData={this.updateStateValues}
                    openModal={this.state.showModal}
                    closeModal={this.toggleModal}
                    isRepeat={this.state.isReccuringTransaction}
                    dateofEntry={this.state.dateofEntry}
                    startDate={this.state.startDate}
                    endDate={this.state.endDate}
                    minDate={this.state.minDate}
                    maxDate={this.state.maxDate}
                    validated={this.state.validated}
                    addTransaction={this.createTransaction}
                />
            </Fragment>
        )
    }
}