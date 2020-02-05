import React from 'react';
import { View } from 'react-native';
import FlashMessage from 'react-native-flash-message';
import { Provider } from 'react-redux';
import Routes from './src/routes';
import { store } from './src/redux/store';

const App = () => (
  <Provider store={store}>
    <View style={{ flex: 1 }}>
      <Routes />
      <FlashMessage position="bottom" />
    </View>
  </Provider>
);

export default App;
