import React from 'react';

const Span = (props) =>{
    return(
        <span style={props.style}>{props.children}</span>
    );
}

export default Span;