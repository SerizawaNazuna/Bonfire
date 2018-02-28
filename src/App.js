import React, { Component } from 'react';
import TextInputField from './js/components/molecules/TextInputField';
import Header from './js/components/organisms/Header';
import Button from './js/components/atoms/Button';
import InputBonfire from '.js/components/organisms/InputBonfire';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <TextInputField defaultValue="" label="今日頑張ったこと" id="input" hint="light your fire" />
          <Button onClick={(e)=>console.log('clicked')}>ボタン</Button>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
