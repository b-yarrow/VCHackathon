import React, { Component } from 'react'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
// import { Row } from 'react-bootstrap';

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Image from 'react-bootstrap/Image'



function MyModal(props) {
    const {
        id,
        name,
        picture,
        role,
        phone,
        email,
        availability,
        branch,
        favorite
    } = props.staffDetails;
    // console.log(props.staffDetails)
    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                {/* <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title> */}

            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <Col md={4}>
                            <Image className="modal__picture" src={require(`./../assets/pictures/${picture}.jpg`)} thumbnail="false" />
                        </Col>
                        <Col>
                            <Row>
                                <Col><h4>{name}</h4>
                                    <h5>{role}</h5></Col>

                            </Row>
                            <Row>
                                <Col md={1}><i class="fas fa-phone-alt"></i></Col>
                                <Col>{phone}</Col>
                                <Col md={1}><i class="fas fa-envelope"></i></Col>
                                <Col>{email}</Col>
                            </Row>
                            <Row>
                                <Col md={1}><i class="far fa-clock"></i></Col>
                                <Col>{availability[0]}</Col>
                                <Col md={1}><i></i></Col>
                                <Col>{availability[1]}</Col>
                            </Row>
                            <Row>
                                <Col md={1}><i class="fas fa-map-marker-alt"></i></Col>
                                <Col>{branch.address}{branch.city}{branch.postcode}</Col>
                            </Row>

                        </Col>
                    </Row>
                </Container>

            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    );
}



export default MyModal;