import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { FormControl } from 'react-bootstrap'
import InputGroup from 'react-bootstrap/InputGroup'

import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Badge from 'react-bootstrap/Badge'

import Image from 'react-bootstrap/Image'
import search from '../assets/icons/search.svg';

import ButtonToolbar from 'react-bootstrap/ButtonToolbar'


export default class Searchbar extends Component {
    render() {
        return (
            <div className="searchBar">
                <Row className="searchBar__header" />


                <Container>
                    <Breadcrumb className="searchBar__breadcrumb">
                        <Breadcrumb.Item href="#">About Vancity</Breadcrumb.Item>
                        <Breadcrumb.Item active>Staff Search</Breadcrumb.Item>
                    </Breadcrumb>
                    {/* <Row className="searchBar__spacer" /> */}
                    <Row className="searchBar__titleBox" noGutters="true">
                        <h1 className="searchBar__title">Staff Search</h1>
                    </Row>
                    <Row className="searchBar__filterButtons" noGutters="true">
                        <Button className="searchBar__filterBtn" variant="outline-danger" onClick={() => this.props.resetAllFilters(false)}> ALL</Button>
                        <Button className="searchBar__filterBtn" variant="outline-danger" onClick={() => this.props.setFilterManager(true)}>Branch Manager</Button>
                        <Button className="searchBar__filterBtn" variant="outline-danger" onClick={() => this.props.setFilterLoans(true)}>Loans Officer</Button>
                        <Button className="searchBar__filterBtn" variant="outline-danger" onClick={() => this.props.setFilterInvestments(true)}>Investments</Button>
                        <Button className="searchBar__filterBtn" variant="outline-danger" onClick={() => this.props.setFilterMemberCare(true)}>Member Care</Button>
                    </Row>
                    <Row className="searchBar__inputAndDropdowns" noGutters="true">
                        <Col className="searchBar__inputBox" sm={3}>
                            <InputGroup className="mb-3 searchBar__nameInput">
                                <FormControl aria-label="Search for a Name" />
                                <InputGroup.Append>
                                    <InputGroup.Text><img src={search}></img></InputGroup.Text>
                                </InputGroup.Append>
                            </InputGroup>
                        </Col>
                        <Col>
                            <ButtonToolbar>
                                <DropdownButton className="searchBar__dropdownBtn" id="dropdown-location-button" title="Location" variant="danger">
                                    <Dropdown.Item href="#/action-1">Vancouver</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Burnaby</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Surrey</Dropdown.Item>
                                </DropdownButton>


                                <DropdownButton className="searchBar__dropdownBtn" id="dropdown-branch-button" title="Branch" variant="danger">
                                    <Dropdown.Item href="#/action-1">Downtown</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Chinatown</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Vancity Centre</Dropdown.Item>
                                </DropdownButton>
                            </ButtonToolbar>
                        </Col>

                    </Row>
                    <Row className="searchBar__filterTags" noGutters="true">
                        <div className="searchBar__labelBox">
                            <h2>Filtered By</h2>
                        </div>
                        <div className="searchBar__tagContainer">
                            <Button variant="danger" className="searchBar__tagBtn">
                                Vancouver <Badge pill variant="danger">X</Badge>
                                {/* <span className="sr-only">unread messages</span> */}
                            </Button>
                        </div>
                    </Row>

                </Container>


            </div>
        )
    }
}
