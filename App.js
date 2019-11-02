import React from 'react';
import {View} from 'react-native';
import Routes from './src/routes';
import FlashMessage from 'react-native-flash-message';

class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Routes />
        <FlashMessage position="bottom" />
      </View>
    );
  }
}
export default App;
