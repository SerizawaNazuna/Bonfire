import React, { Component } from 'react';
import TextInputField from './js/components/molecules/TextInputField';
import Header from './js/components/organisms/Header';
import Button from './js/components/atoms/Button';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props){
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked = (e)=>{
    e.preventDefault();
    console.log('aaa');
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <TextInputField textValue="テスト" label="すごい" />
          <Button onClick={(e)=>console.log('clicked')}>ボタン</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
