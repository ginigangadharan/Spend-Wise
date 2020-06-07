import React, { Component } from 'react';
import Back2Home from '../backToHome/backtoHome';

import { Form, Col } from 'react-bootstrap';
import { FormGroup } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

import InfoComp from '../info/info';

import API from '../../api/api';

class customReport extends Component {
    state = {
        showTable: false,
        infoMessage: "No Data Available!",
        startDate: null,
        endDate: null,
        transactions: []
    }

    columns = [
        { id: 'category', label: 'Category', minWidth: 100 },
        { id: 'description', label: 'Description', minWidth: 100 },
        {
            id: 'amount',
            label: 'Amount',
            minWidth: 100
        },
        {
            id: 'dateOfEntry',
            label: 'Transaction Date',
            minWidth: 100
        },
        {
            id: 'expensetype',
            label: 'Expense Type',
            minWidth: 100
        },
    ]

    handleGetStartDateEntry = (e) => {
        this.setState({
            startDate: moment(e).format('MM-DD-YYYY')
        });
    }

    handleGetEndDateEntry = (e) => {
        this.setState({
            endDate: moment(e).format('MM-DD-YYYY')
        });
    }

    fetchTransactions = () => {
        let payloadData = {}
        payloadData.startDate = moment(this.state.startDate).format('YYYY-MM-DD')
        payloadData.endDate = moment(this.state.endDate).format('YYYY-MM-DD')
        API.post('transactionlist', payloadData)
            .then((response) => {
                console.log(response.data.result);
                this.setState({
                    transactions: response.data.result,
                    showTable: true
                })
            }, (error) => {
                console.log(error);
            });
    }

    render() {
        let dateRangePicker;
        dateRangePicker = (
            <FormGroup>
                <Form.Row>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                margin="normal"
                                id="date-picker-startDate"
                                label="Start date"
                                format="dd-MM-yyyy"
                                value={this.state.startDate}
                                disablePast="true"
                                onChange={this.handleGetStartDateEntry}
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                margin="normal"
                                id="date-picker-endDate"
                                label="End date"
                                format="dd-MM-yyyy"
                                value={this.state.endDate}
                                disablePast="true"
                                onChange={this.handleGetEndDateEntry}
                                minDate={this.state.startDate}
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                    <Col>
                        <Button onClick={this.fetchTransactions} variant="outlined" color="secondary" size="small" startIcon={<SearchIcon />}></Button>
                    </Col>
                </Form.Row>
            </FormGroup>
        );
        return (
            <>
                <Back2Home />
                <div className="container">
                    <div className="row" >
                        <div className="col">
                            <span style={{ paddingLeft: "20px", paddingBottom: '20px' }}> Transaction Details </span>
                        </div>
                        <div className="col">
                            {dateRangePicker}
                        </div>
                    </div>
                    <div className="row">
                        {this.state.showTable === true ?
                            <Paper style={{ width: '100%' }}>
                                <TableContainer style={{ maxHeight: '440' }}>
                                    <Table stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow>
                                                {this.columns.map((column) => (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ minWidth: column.minWidth }}
                                                    >
                                                        {column.label}
                                                    </TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.transactions.map((row) => (
                                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                                    <TableCell>
                                                        {row.Category}
                                                    </TableCell>
                                                    <TableCell>
                                                        {row.Description}
                                                    </TableCell>
                                                    <TableCell>
                                                        {row.Amount}
                                                    </TableCell>
                                                    <TableCell>
                                                        {row.DateofEntry}
                                                    </TableCell>
                                                    <TableCell>
                                                        {row.expenseType}
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Paper> : <InfoComp Message={this.state.infoMessage} />}
                    </div>
                </div>
            </>
        );
    }
}

export default customReport;