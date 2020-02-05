import React from 'react';
import {View} from 'react-native';
import Routes from './src/routes';
import FlashMessage from 'react-native-flash-message';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={{flex: 1}}>
          <Routes />
          <FlashMessage position="bottom" />
        </View>
      </Provider>
    );
  }
}
