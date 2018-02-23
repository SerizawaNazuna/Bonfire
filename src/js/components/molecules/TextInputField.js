import React from 'react';
import Label from '../atoms/Label'
import TextInput from '../atoms/TextInput';

const TextInputField = (props) =>{
    return(
        <div>
            <Label>{props.label}<TextInput defaultValue={props.textValue} onBlur={props.onBlur} /></Label>
        </div>
    );
}

export default TextInputField;