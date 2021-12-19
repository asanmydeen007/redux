import {store} from './redux/store'
import { Provider } from 'react-redux';
import React from 'react';
import {Text} from 'react-native'
import Count from './components/Count';
const App=()=>{
  return(
  <Provider store={store}>
  <Count/>
  </Provider>

  )}

export default App;
