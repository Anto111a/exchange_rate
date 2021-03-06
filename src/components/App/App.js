// Core
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../engine/init/store'

// Components
import Main from '../Main/Main';

//Styles
import './App.css'

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
