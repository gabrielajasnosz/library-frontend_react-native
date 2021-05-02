import React from 'react';
import {Component} from 'react';
import {StyleSheet} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import CustomDrawerContent from './Components/CustomDrawerContent';
import LoginScreen from './Components/LoginScreen';
import RegisterScreen from './Components/RegisterScreen';

const Drawer = createDrawerNavigator();

class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Login"
          drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Login" component={LoginScreen} />
          <Drawer.Screen name="Register" component={RegisterScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  drawerButtons: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    margin: 12,
    height: 55,
    fontWeight: 'bold',
  },
  Oswald: {
    fontSize: 30,
    alignSelf: 'center',
    margin: 10,
    fontFamily: 'Oswald-VariableFont_wght',
  },
  OpenSans: {
    fontSize: 20,
    alignSelf: 'center',
    margin: 10,
    fontFamily: 'OpenSans-Regular',
  },
});

export default App;
