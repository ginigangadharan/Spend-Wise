import React, { Component } from "react";
import { Button, Modal } from 'react-bootstrap';

export default class AddExpense extends Component {
    closePopup = (e) => {
        e.preventDefault();
        this.props.closeModal();
    }

    render() {
        return (
            <Modal show={this.props.isOpen}>
                <Modal.Header>
                    <Modal.Title>Add New Transaction</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <p>Modal body text goes here.</p>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={this.closePopup}>Close</Button>
                    <Button variant="primary">Save changes</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}