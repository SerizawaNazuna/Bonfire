import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const Button = (props) =>{
    console.log(props);
    return(
        <RaisedButton onClick={props.onClick}>{props.children}</RaisedButton>
    );
}

export default Button;