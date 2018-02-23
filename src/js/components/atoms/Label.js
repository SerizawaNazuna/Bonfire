import React from 'react';

const Label = (props) =>{
    return(
        <label style={props.style}>{props.children}</label>
    );
}

export default Label;