import React from 'react';
import { Footer } from './components';

const Main = ({children}) =>  {
    const footerHeight = {
        position: "absolute",
        bottom: "0",
        width: "100%"
    }
    return (
        <div>
            <main className="app-content">
                {children}
            </main>  
        </div>
    )
}

export default Main;
