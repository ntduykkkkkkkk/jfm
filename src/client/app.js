import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router-dom'
import Routes from './routes'
// import './assets/vendor/fontawesome-free/css/all.min.css'
// import './assets/vendor/bootstrap/css/bootstrap.min.css'
// import './assets/css/ruang-admin.min.css'

// import './assets/vendor/jquery/jquery.min.js'
// // import './assets/vendor/bootstrap/js/bootstrap.bundle.min.js'
// // import './assets/vendor/jquery-easing/jquery.easing.min.js'
// import './assets/js/ruang-admin.min.js'
// import './assets/vendor/chart.js/Chart.min.js'
// import './assets/js/demo/chart-area-demo.js'


const browserHistory = createBrowserHistory()

export default class App extends Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Routes />
            </Router>
        )
    }
}