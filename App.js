import React from 'react';
import {View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen/HomeScreen';
import DetailScreen from './src/screens/DetailScreen/DetailScreen';
import CartScreen from './src/screens/CartScreen/CartScreen';
import RegisterScreen from './src/screens/RegisterScreen/RegisterScreen';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import ResetPassword from './src/screens/ResetPassword/resetPassword';
import TabScreen from './src/Tabs/TabScreen';
import Stack from './src/Stack/Stack';
import { Provider } from 'react-redux'
import { store } from './store';







const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack />
      </NavigationContainer>
    </Provider>

  );
};

export default App;
