import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, title, message, onConfirm }) => {
    return (
        <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>{message}</Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={onConfirm}>
                    View Cart
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CustomModal;
