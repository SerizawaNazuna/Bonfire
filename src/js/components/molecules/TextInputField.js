import React from 'react';
import Label from '../atoms/Label'
import TextInput from '../atoms/TextInput';

const TextInputField = (props) =>{
    return(
        <div>
            <TextInput {...props} />
        </div>
    );
}

export default TextInputField;