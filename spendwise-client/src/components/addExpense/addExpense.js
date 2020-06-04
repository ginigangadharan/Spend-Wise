import React, { Component } from "react";
import 'date-fns';
import { Button, Modal, Form, Col } from 'react-bootstrap';
import Switch from '@material-ui/core/Switch';
import { FormGroup } from "@material-ui/core";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';

export default class AddExpense extends Component {

    closePopup = (e) => {
        e.preventDefault();
        this.props.closeModal();
    }

    handleReccuring = (e) => {
        this.props.toggleReccuring();
    }

    render() {
        let datePicker, dateRangePicker;
        datePicker = (
            <Form.Group controlId="ControlDatePicker1">
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        margin="normal"
                        id="date-picker-dialog"
                        label="Date of entry"
                        format="dd/MM/yyyy"
                        value={new Date('2020-08-29')}
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Form.Group>
        );

        dateRangePicker = (
            <FormGroup controlId="ControlDatePicker2">
                <Form.Row>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="Start date"
                                format="dd/MM/yyyy"
                                value={new Date('2020-08-29')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
                            />
                        </MuiPickersUtilsProvider>
                    </Col>
                    <Col>
                        <MuiPickersUtilsProvider utils={DateFnsUtils}>
                            <KeyboardDatePicker
                                margin="normal"
                                id="date-picker-dialog"
                                label="End date"
                                format="dd/MM/yyyy"
                                value={new Date('2020-08-29')}
                                KeyboardButtonProps={{
                                    'aria-label': 'change date',
                                }}
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
                        <Form.Group controlId="ControlSelect1">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select">
                                <option value="1">Utilities</option>
                                <option value="2">Transportation</option>
                                <option value="3">Internet</option>
                                <option value="4">Car Parking</option>
                                <option value="5">Groceries</option>
                                <option value="5">Income</option>
                                <option value="7">Others</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="ControlSelect2">
                            <Form.Label>Expense Type</Form.Label>
                            <Form.Control as="select">
                                <option value="1">Earnings</option>
                                <option value="2">Payment</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group controlId="ControlInput1">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control type="text" placeholder="Enter amount" />
                        </Form.Group>
                        <FormGroup controlId="ControlSwitch1">
                            <Form.Label>Reccuring Cost</Form.Label>
                            <Switch
                                checked={this.props.isRepeat}
                                color="primary"
                                name="checkedR"
                                onChange={this.handleReccuring}
                                inputProps={{ 'aria-label': 'primary checkbox' }}
                            />
                        </FormGroup>
                        {this.props.isRepeat != true ? datePicker : dateRangePicker}
                        <Form.Group controlId="ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closePopup}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}