import React from 'react';
import Navbar from '../molecules/Navbar';
import Button from '../atoms/Button';

const Header = (props) =>{
    return(
        <div>
            <Navbar />
            <Button onClick={props.onClick}>ボタン</Button>
        </div>
    );
}

export default Header;