import React from 'react';
import TextField from 'material-ui/TextField';

const TextInput = (props) =>{
    return(
        <TextField defaultValue={props.defaultValue} onChange={props.onChange} hintText={props.hint} id={props.id} floatingLabelText={props.label}
         />
    );
}

export default TextInput;