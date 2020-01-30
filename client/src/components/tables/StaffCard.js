import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card'



import MyModal from '../Modal'

export default class StaffCard extends Component {
    state = {
        hidden: false,
        removeBtnClass: '',
        modalShow: false
    }



    setModalShow = (value) => {
        this.setState({
            modalShow: value
        })
    }

    render() {
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
        } = this.props.staffData;

        return (
            <>
                <Card style={{ width: "475px" }} onClick={() => this.setModalShow(true)}>
                    <Card.Img variant="top" src={require(`./../../assets/pictures/${picture}.jpg`)} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {role}
                        </Card.Text>
                    </Card.Body>
                    {/* <Card.Footer>
                    <small className="text-muted">4th Ave Branch</small>
                </Card.Footer> */}
                </Card>

                <MyModal
                    staffDetails={this.props.staffData}
                    show={this.state.modalShow}
                    onHide={() => this.setModalShow(false)}
                // staffDetails={name, picture, role, phone, email, availability, branch, favorite}
                />
            </>

        );
    }
}