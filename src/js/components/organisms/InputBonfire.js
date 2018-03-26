import React from 'react';
import TextInput from '../atoms/TextInput';
import CategorySelect from '../molecules/CategorySelecter';

const InputBonfire = (props) =>{
    return(
        <div>
            <h2>Light Your Fire of Today.</h2>
            <CategorySelect {...props} />
            <TextInput label={props.label} {...props} />
        </div>
    );
}

export default InputBonfire;