import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import Routes from './routes'

const browserHistory = createBrowserHistory()

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <p>data</p>
                <Routes />
            </Router>
        )
    }
}