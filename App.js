import React from 'react';
import {Component} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import CustomDrawerContent from './components/CustomDrawerContent';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import ExploreScreen from './components/ExploreScreen';
import MyShelfScreen from './components/MyShelfScreen';
import MyAccountScreen from './components/MyAccountScreen';
import BookDetailsScreen from './components/BookDetailsScreen';
import DrawerNavigator from '@react-navigation/drawer/src/navigators/createDrawerNavigator';

const Drawer = createDrawerNavigator();

console.disableYellowBox = true;

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          drawerStyle={{
            width: 220,
          }}
          initialRouteName="Login"
          overlayColor="transparent"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
          <Drawer.Screen name="Explore" component={ExploreScreen} />
          <Drawer.Screen name="MyShelf" component={MyShelfScreen} />
          <Drawer.Screen name="MyAccount" component={MyAccountScreen} />
          <Drawer.Screen
            name="BookDetailsScreen"
            component={BookDetailsScreen}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

export default App;
