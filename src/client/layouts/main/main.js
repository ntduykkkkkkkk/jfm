import React from 'react';
import PropTypes from 'prop-types'
import { Sidebar, Footer } from './components';

const Main = props => {
    const { children } = props;
    return (
        <body id="page-top">
            <div id="wrapper">
            <main>
                <Sidebar />
                {children}
                <Footer />
            </main>
            </div>
        </body>
    )
}

Main.propTypes = {
    children: PropTypes.node
  };

export default Main;
