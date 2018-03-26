import React from 'react';
import Span from '../atoms/Span';

const Navbar = (props) =>{
    return(
        <div className="uk-navbar">
            <a href="#"><Span>fire</Span></a>
            <a href="#"><Span>exceed</Span></a>
            <a href="#"><Span>delay</Span></a>
            <a href="#"><Span>lovemachine</Span></a>
        </div>
    );
}

export default Navbar;