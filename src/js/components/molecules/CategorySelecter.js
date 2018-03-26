import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const CategorySelect = (props) =>{
    return(
        <div>
            <SelectField value={1} onChange={()=>{alert("aaa")}}>
                <MenuItem value={1} primaryText="日常" />
                <MenuItem value={2} primaryText="ちょっとしたこと" />
            </SelectField>
            <span>hello!</span>
        </div>
    );
}

export default CategorySelect;