import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login';
import Main from '../screens/main/bottom-tab';
import SingUp from '../screens/signup';

const credentialStack = createStackNavigator(
  {
    Login: {screen: Login},
    Main: {screen: Main},
    SignUp: {screen: SingUp},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: () => null,
    },
  },
);

export default createAppContainer(credentialStack);
