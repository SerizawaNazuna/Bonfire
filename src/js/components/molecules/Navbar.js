import React from 'react';
import Span from '../atoms/Span';

const Navbar = (props) =>{
    return(
        <div className="uk-navbar">
            <a href="#"><Span>頑張りたい</Span></a>
            <a href="#"><Span>頑張れない</Span></a>
            <a href="#"><Span>つらい</Span></a>
            <a href="#"><Span>ときもある</Span></a>
        </div>
    );
}

export default Navbar;