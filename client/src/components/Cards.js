import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'


import ModalTest from './ModalTest'


import React, { Component } from 'react'

export default class Cards extends Component {

    render() {
        return (
            <div className="cards">
                <div className="cards__box">
                    <CardDeck>
                        <Card style={{ width: "387px" }}>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Ivan Rickard Liow</Card.Title>
                                <Card.Text>
                                    Loans Officer
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">4th Ave Branch</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Mike Domanski</Card.Title>
                                <Card.Text>
                                    Wealth Manager
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Fairview Branch</small>
                            </Card.Footer>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://via.placeholder.com/150" />
                            <Card.Body>
                                <Card.Title>Brett Yarrow</Card.Title>
                                <Card.Text>
                                    Senior Teller
                        </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                <small className="text-muted">Langley Branch</small>
                            </Card.Footer>
                        </Card>
                    </CardDeck>
                </div>
                <ModalTest />
            </div>

        )
    }
}
