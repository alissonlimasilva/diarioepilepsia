import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/login';
import Main from '../screens/main';
// import SingUp from '../screens/signup';
import SingUp from '../screens/signup-new';
import {ROTAS} from '../constants';

const credentialStack = createStackNavigator(
  {
    Login: {screen: Login},
    [ROTAS.main]: {screen: Main},
    [ROTAS.cadastro]: {screen: SingUp},
  },
  {
    initialRouteName: 'Login',
    defaultNavigationOptions: {
      header: () => null,
    },
  },
);

export default createAppContainer(credentialStack);
