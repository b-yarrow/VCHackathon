import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import Locations from './Locations'
import logo from '../logo.svg';
import axios from "axios"
import Searchbar from './Searchbar';
import Cards from './Cards';

const url = 'http://localhost:5000'

export default class Main extends Component {
    state = {
        staffList: [],
        filterBranchManager: false,
        filterLoansOfficer: false,
        filterInvestments: false,
        filterMemberCare: false
    }
    componentDidMount() {
        // axios.get(`${url}/locations`).then(response => {
        //     this.setState({
        //         locationList: response.data
        //     })
        // })
        // axios.get(`${url}/staff`).then(response => {
        //     this.setState({
        //         staffList: response.data
        //     })
        // })

        // axios.get(`${url}/locations`).then(response => {
        //     this.setState({
        //         locationList: response.data
        //     }, () => console.log(this.state.locationList))
        // })

        axios.get(`${url}/staff`).then(response => {
            this.setState({
                staffList: response.data
            }, () => console.log(this.state.staffList))
        })

        console.log('component did mount')
    }

    resetAllFilters = (value) => {
        this.setState({
            filterBranchManager: value,
            filterLoansOfficer: value,
            filterInvestments: value,
            filterMemberCare: value
        }, () => {
            console.log(this.state.filterBranchManager)
            console.log(this.state.filterLoansOfficer)
            console.log(this.state.filterInvestments)
            console.log(this.state.filterMemberCare)
        })
    }

    setFilterManager = (value) => {
        this.setState({
            filterBranchManager: false,
            filterLoansOfficer: value,
            filterInvestments: value,
            filterMemberCare: value
        }, () => console.log(this.state.filterBranchManager))
    }
    setFilterLoans = (value) => {
        this.setState({
            filterBranchManager: value,
            filterLoansOfficer: false,
            filterInvestments: value,
            filterMemberCare: value

        }, () => console.log(this.state.filterLoansOfficer))
    }
    setFilterInvestments = (value) => {
        this.setState({
            filterBranchManager: value,
            filterLoansOfficer: value,
            filterInvestments: false,
            filterMemberCare: value
        }, () => console.log(this.state.filterInvestments))
    }
    setFilterMemberCare = (value) => {
        this.setState({
            filterBranchManager: value,
            filterLoansOfficer: value,
            filterInvestments: value,
            filterMemberCare: false
        }, () => console.log(this.state.filterMemberCare))
    }


    render() {
        return (
            <BrowserRouter>
                <Route
                    path="/"
                    exact
                    render={props => (
                        <>
                            <Searchbar
                                resetAllFilters={this.resetAllFilters}
                                setFilterManager={this.setFilterManager}
                                setFilterLoans={this.setFilterLoans}
                                setFilterInvestments={this.setFilterInvestments}
                                setFilterMemberCare={this.setFilterMemberCare} />
                            <Cards
                                {...props}
                                staffList={this.state.staffList}
                                filterBranchManager={this.state.filterBranchManager}
                                filterLoansOfficer={this.state.filterLoansOfficer}
                                filterInvestments={this.state.filterInvestments}
                                filterMemberCare={this.state.filterMemberCare}
                            />
                        </>
                    )}
                />
                <Route
                    path="/test"
                    exact
                    render={props => (
                        <>
                            {/* <Navbar {...props} />
            <Inventory productList={this.state.productList} /> */}
                            <div className="App">
                                <header className="App-header">
                                    <img src={logo} className="App-logo" alt="logo" />
                                    <p>
                                        Edit <code>src/App.js</code> and save to reload.
        </p>
                                    <a
                                        className="App-link"
                                        href="https://reactjs.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Learn React
        </a>
                                </header>
                            </div>
                        </>
                    )}
                />
            </BrowserRouter>
        )
    }
}
