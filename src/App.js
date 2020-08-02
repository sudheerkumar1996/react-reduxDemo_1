import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import IceCreamContainer from './components/iceCream.components';
import CakeSearch from './components/cakeSearch.components';
import ItemContainer from './components/itemContainer';
import UserConatiner from './components/userContainer';
import store from './redux/store';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <ItemContainer cake/>
      <ItemContainer/>
      <HooksCakeContainer/>
          <CakeContainer/>
          <IceCreamContainer/>
          <CakeSearch/>
          <UserConatiner/>
    </div>
    </Provider>

  )
}


export default App;
