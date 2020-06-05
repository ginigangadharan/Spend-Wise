import React, { Component } from "react";
import 'date-fns';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import { FormGroup } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import * as moment from 'moment';

export default class AddExpense extends Component {

    closePopup = (e) => {
        e.preventDefault();
        this.props.closeModal();
    }

    handleReccuring = (e) => {
        this.props.toggleReccuring();
    }

    handleGetDateEntry = (e) => {
        console.log(moment(e).format('L'));
    }

    submitForm = (e) => {
        console.log('Form Data');
        console.log(this.refs.amount.value);
        console.log(this.refs.categoryId.value);
        console.log(this.refs.expenseTypeId.value);
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
                        format="dd/MM/yyyy"
                        value={moment().format('YYYY-MM-DD')}
                        onChange={this.handleGetDateEntry}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                        disablePast="true"
                        maxDate={new Date('2020-08-29')}
                        InputProps={{
                            disableUnderline: true,
                        }}
                        invalidDateMessage="not valid"
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
                                format="dd/MM/yyyy"
                                value={moment().format('YYYY-MM-DD')}
                                onChange={this.handleGetDateEntry}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
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
                                format="dd/MM/yyyy"
                                value={moment().format('YYYY-MM-DD')}
                                onChange={this.handleGetDateEntry}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                                disablePast="true"
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                </Form.Row>
            </FormGroup>
        );

        return (
            <Modal show={this.props.isOpen}>
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
                                onChange={this.handleReccuring}
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