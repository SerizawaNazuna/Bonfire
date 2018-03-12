import React from 'react';
import TextInput from '../atoms/TextInput';

const InputBonfire = (props) =>{
    return(
        <div>
            <h2>{props.headValue}</h2>
            <TextInput label={props.label} {...props} />
            <TextInput {...props} />
            <TextInput {...props} />
        </div>
    );
}

export default InputBonfire;