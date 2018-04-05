import { ReduceStore } from 'flux/utils';
import AppDispatcher from '../dispatchers/AppDispatcher';

class InputStore extends ReduceStore {
  getInitialState() {
    return {}; //stateの初期値はオブジェクト
  }

  reduce(state, action) {
    switch (action.type) {
      case 'ACTION_TYPE_001':
        //actionの内容を新たなstateとする (action.dataはarrayと仮定)
        return action.data; 
      case 'ACTION_TYPE_002':
        //現在のstateとactionの内容から新たなstateを作成
        return state.concat(action.data);
      default:
        //現在のstateをそのまま返す
        return state;
    }
  }
}

export default new InputStore(AppDispatcher);