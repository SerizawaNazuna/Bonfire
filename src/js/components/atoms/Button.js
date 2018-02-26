import React from 'react';
import FlatButton from 'material-ui/FlatButton';

const Button = (props) =>{
    return(
        <FlatButton onClick={props.onClick}>{props.children}</FlatButton>
    );
}

export default Button;