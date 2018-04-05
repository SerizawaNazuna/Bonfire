import React from 'react';
import Dialog from 'material-ui/Dialog';

import Button from '../atoms/Button';
import InputBonfire from '../molecules/InputBonfire';

class InputBonfireModal extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isInputModalOpen: false
        }
        this.handleInputClose = this.handleInputClose.bind(this);
        this.handleInputOpen = this.handleInputOpen.bind(this);
    }

    handleInputOpen(){
        this.setState({isInputModalOpen: true})
    }
    
    handleInputClose(){
        this.setState({isInputModalOpen: false})
    }

    render(){
        return(
            <div>
                <Button onClick={this.handleInputOpen}>投稿</Button>
                <Dialog title="今日のことを書き留めましょう" open={this.state.isInputModalOpen} modal={false} onRequestClose={this.handleInputClose} >
                    <InputBonfire onClickClose={this.handleInputClose} />
                </Dialog>
            </div>
        );
    }
}

export default InputBonfireModal;