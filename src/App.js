import React, { Component } from 'react';
import TextInputField from './js/components/molecules/TextInputField';
import Header from './js/components/organisms/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TextInputField textValue="テスト" label="すごい" />
      </div>
    );
  }
}

export default App;
