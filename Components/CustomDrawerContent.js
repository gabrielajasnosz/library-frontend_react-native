import React, {Component} from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

import {DrawerContentScrollView} from '@react-navigation/drawer';

class CustomDrawerContent extends Component {
  constructor() {
    super();
  }

  render() {
    const {navigation} = this.props;
    return (
      <DrawerContentScrollView style={{backgroundColor: 'lightgrey'}}>
        <Text style={styles.Oswald}>Quiz App</Text>
      </DrawerContentScrollView>
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
    fontSize: 15,
    alignSelf: 'center',
    margin: 10,
    fontFamily: 'OpenSans-Regular',
  },
});

export default CustomDrawerContent;
