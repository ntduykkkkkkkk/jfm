import React from 'react';
import PropTypes from 'prop-types'
import { Footer } from './components';

const Main = props => {
    const { children } = props;
    return (
        <div>
            <main className='app-content'>
                {children}
                <Footer />
            </main>  
        </div>
    )
}

Main.propTypes = {
    children: PropTypes.node
  };

export default Main;
