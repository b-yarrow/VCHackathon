import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Locations from './Locations'
import logo from '../logo.svg';
import axios from "axios"
import Searchbar from './Searchbar';

const url = 'http://localhost:5000'

export default class Main extends Component {
    state = {
        locationList: [],
        staffList: []
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

        axios.get(`${url}/locations`).then(response => {
            this.setState({
                locationList: response.data
            }, () => console.log(this.state.locationList))
        })

        axios.get(`${url}/staff`).then(response => {
            this.setState({
                staffList: response.data
            })
        })

        console.log('component did mount')
    }


    render() {
        return (
            <BrowserRouter>
                <Route
                    path="/"
                    exact
                    render={props => (
                        <>
                            <Searchbar />
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
                <Route
                    path="/locations"
                    exact
                    render={props => (
                        <div>
                            <Locations locationList={this.state.locationList} />
                        </div>
                    )}
                />
            </BrowserRouter>
        )
    }
}
