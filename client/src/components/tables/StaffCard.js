import React, { Component } from 'react'
import { Link } from "react-router-dom";
// import Kebab from "../../assets/icons/kebab-default.svg";
import Card from 'react-bootstrap/Card'



import MyModal from '../Modal'

export default class StaffCard extends Component {
    state = {
        hidden: false,
        removeBtnClass: '',
        modalShow: false
    }

    // revealRemove = () => {
    //     console.log('handler started')
    //     let hide = this.state.hidden
    //     let removeBtnClassString = ''
    //     if (hide) {
    //         hide = !hide
    //         removeBtnClassString = '--reveal'
    //     } else {
    //         hide = !hide
    //         removeBtnClassString = ''
    //     }
    //     this.setState({
    //         hidden: hide,
    //         removeBtnClass: removeBtnClassString
    //     })
    // }

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
        // const [modalShow, setModalShow] = React.useState(false);
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