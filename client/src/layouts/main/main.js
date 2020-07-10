import React from 'react';
import { Footer } from './components';

const Main = ({ children }) =>  {
    const footerHeight = {
        position: "absolute",
        bottom: "0",
        width: "100%"
    }
    return (
        <div>
            <div className="container">
                {children}
            </div>
            
            <main className={footerHeight}>
                <Footer /> 
            </main>
        </div>
    )
}

export default Main;
