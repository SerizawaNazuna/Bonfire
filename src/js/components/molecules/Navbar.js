import React from 'react';
import AppBar from 'material-ui/AppBar';
import {red50} from 'material-ui/styles/colors';

const Navbar = (props) =>{
    return(
        <div>
            <AppBar title="aaa" style={{"primary2Color" : red50}} />
        </div>
    );
}

export default Navbar;