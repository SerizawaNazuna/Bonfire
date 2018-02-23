import React from 'react';

const TextInput = (props) =>{
    return(
        <input type="text" style={props.style} defaultValue={props.defaultValue} onChange={props.onChange} />
    );
}

export default TextInput;