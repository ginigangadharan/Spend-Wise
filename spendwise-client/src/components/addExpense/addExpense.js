import React, { Component } from "react";
import 'date-fns';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import { FormGroup } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';

let updatedValue = {};
export default class AddExpense extends Component {

    constructor(props) {
        super(props);
    }

    closePopup = (e) => {
        e.preventDefault();
        this.props.closeModal();
    }

    handleToggleRepeat = (e) => {
        updatedValue = {}
        updatedValue.isReccuringTransaction = !this.props.isRepeat;
        this.props.modifyStateData(updatedValue);
    }

    handleGetDateEntry = (e) => {
        updatedValue = {}
        updatedValue.dateofEntry = moment(e).format('MM-DD-YYYY');
        this.props.modifyStateData(updatedValue);
    }

    handleGetStartDateEntry = (e) => {
        updatedValue = {}
        updatedValue.startDate = moment(e).format('MM-DD-YYYY');
        updatedValue.endDate = moment(e).add(1, 'd').format('MM-DD-YYYY');
        updatedValue.minDate = moment(e).add(1, 'd').format('MM-DD-YYYY');
        updatedValue.maxDate = moment(e).add(5, 'd').format('MM-DD-YYYY');
        this.props.modifyStateData(updatedValue);
    }

    handleGetEndDateEntry = (e) => {
        updatedValue = {}
        updatedValue.endDate = moment(e).format('MM-DD-YYYY');
        this.props.modifyStateData(updatedValue);
    }

    submitForm = (e) => {
        console.log('Form Data');
        console.log(this.refs.categoryId.value);
        console.log(this.refs.expenseTypeId.value);
        console.log(this.refs.amount.value);
        console.log(this.props.isRepeat);
        console.log(this.refs.desc.value);
    }

    render() {
        let datePicker, dateRangePicker;
        datePicker = (
            <Form.Group>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <DatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date of entry"
                        format="dd-MM-yyyy"
                        value={this.props.dateofEntry}
                        onChange={this.handleGetDateEntry}
                        disablePast="true"
                    />
                </MuiPickersUtilsProvider>
            </Form.Group>
        );

        dateRangePicker = (
            <FormGroup>
                <Form.Row>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Start date"
                                format="dd-MM-yyyy"
                                value={this.props.startDate}
                                onChange={this.handleGetStartDateEntry}
                                disablePast="true"
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <DatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="End date"
                                format="dd-MM-yyyy"
                                value={this.props.endDate}
                                onChange={this.handleGetEndDateEntry}
                                disablePast="true"
                                minDate={this.props.minDate}
                                maxDate={this.props.maxDate}
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                </Form.Row>
            </FormGroup>
        );

        return (
            <Modal show={this.props.openModal}>
                <Modal.Header>
                    <Modal.Title>Add New Transaction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" ref="categoryId" className="my-1 mr-sm-2" custom>
                                <option value="1">Utilities</option>
                                <option value="2">Transportation</option>
                                <option value="3">Internet</option>
                                <option value="4">Car Parking</option>
                                <option value="5">Groceries</option>
                                <option value="5">Income</option>
                                <option value="7">Others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Expense Type</Form.Label>
                            <Form.Control as="select" ref="expenseTypeId" className="my-1 mr-sm-2" custom>
                                <option value="1">Earnings</option>
                                <option value="2">Payment</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Amount</Form.Label>
                            <Form.Control required type="number" min='1' placeholder="Enter amount" ref="amount" />
                        </Form.Group>
                        <FormGroup>
                            <Form.Label>Reccuring Cost</Form.Label>
                            <Switch
                                checked={this.props.isRepeat}
                                color="primary"
                                name="checkedR"
                                onChange={this.handleToggleRepeat}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </FormGroup>
                        {this.props.isRepeat !== true ? datePicker : dateRangePicker}
                        <Form.Group>
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" ref="desc" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closePopup}>Close</Button>
                    <Button variant="primary" onClick={this.submitForm}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}