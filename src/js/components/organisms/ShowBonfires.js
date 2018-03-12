import React from 'react';
import ExpandableCard from '../molecules/Card';

const ShowBonfires = (props) =>{
    return(
        <div>
            <h2>{props.headValue}</h2>
            <TextInput label={props.label} {...props} />
            <TextInput {...props} />
            <TextInput {...props} />
        </div>
    );
}

export default ShowBonfires;