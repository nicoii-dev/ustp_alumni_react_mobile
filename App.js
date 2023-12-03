/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';
import Setup from './src/boot/Setup';
import store from './src/store';
const App = () => {
  return (
    <Provider store={store}>
      <Setup />
    </Provider>
  );
};

export default App;
