import React from 'react';
import TextInput from '../atoms/TextInput';
import CategorySelect from '../molecules/CategorySelecter';
import Button from '../atoms/Button';

const InputBonfire = (props) =>{
    return(
        <div>
            <CategorySelect {...props} />
            <TextInput label="内容" {...props} />
            <div>
                <Button onClick={props.onClickClose} >閉じる</Button>
                <Button onClick={props.onClickSubmit} >送信</Button>
            </div>
        </div>
    );
}

export default InputBonfire;