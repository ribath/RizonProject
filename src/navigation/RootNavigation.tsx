import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import { ROUTES } from '../utils/routes';
import OnBoarding from '../screens/OnBoarding';
import Home from '../screens/Home';
import Account from '../screens/Account';
import Cart from '../screens/Cart';

export type RootStackParamList = {
  [ROUTES.HOME]: undefined;
  [ROUTES.ONBOARDING]: undefined;
  [ROUTES.ACCOUNT]: { username: string };
  [ROUTES.CART]: undefined;
};

export type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const stackNavigator = createNativeStackNavigator({
  initialRouteName: ROUTES.HOME,
  screens: {
    [ROUTES.HOME]: {
      screen: Home,
      name: ROUTES.HOME,
      options: { title: 'Home' },
    },
    [ROUTES.ONBOARDING]: {
      screen: OnBoarding,
      name: ROUTES.ONBOARDING,
      options: { title: 'Welcome' },
    },
    [ROUTES.ACCOUNT]: {
      screen: Account,
      name: ROUTES.ACCOUNT,
      options: { title: 'Account' },
    },
    [ROUTES.CART]: {
      screen: Cart,
      name: ROUTES.CART,
      options: { title: 'Cart' },
    },
  },
});

export default stackNavigator;
