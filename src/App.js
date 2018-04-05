import React, { Component } from 'react';
import Top from './js/components/organisms/Top';
import InputBonfireModal from './js/components/organisms/InputBonfireModal';
import { render } from 'react-dom';
import { Container } from 'flux/utils';
import InputStore from './js/stores/InputStore';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  static getStores() {
    return [InputStore]; //利用したいReduceStore
  }

  static calculateState() {
    return { //container内で`this.state.KEY_NAME`でアクセス可能
      bonfire: InputStore.getState()
    };
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Top />
          <InputBonfireModal />
        </div>
      </MuiThemeProvider>
    );
  }
}

const AppContainer = Container.create(App);
export default AppContainer;
