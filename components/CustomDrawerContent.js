import React, {Component} from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LibraryService from '../services/LibraryService';

class CustomDrawerContent extends Component {
  service = new LibraryService();

  constructor() {
    super();
  }
  async logout() {
    AsyncStorage.removeItem('user');
    this.props.navigation.navigate('Login');
  }

  async getClientData() {
    this.props.navigation.navigate('MyAccount');
  }

  async getClientsRentals() {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    this.props.navigation.navigate('MyShelf', {
      rentals: await this.service.getRentals(user.login, user.password),
    });
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image source={require('../images/logo.png')} style={styles.logo} />
        <Text style={styles.logoText}>Book Shelf</Text>
        <View style={styles.buttons}>
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              navigation.navigate('Explore');
            }}>
            <Image
              source={require('../images/explore.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>Explore</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              this.getClientsRentals();
            }}>
            <Image
              source={require('../images/book.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>My shelf</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.drawerButton}
            onPress={() => {
              this.getClientData();
            }}>
            <Image
              source={require('../images/user.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.buttonText}>My account</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.logoutButton}
            onPress={() => this.logout()}>
            <Image
              source={require('../images/logout.png')}
              style={styles.buttonIcon}
            />
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: '#e5d2d2',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 1,
    shadowRadius: 16.0,
    elevation: 25,
  },
  drawerButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 10,
    flexDirection: 'row',
    margin: 12,
    width: 180,
    height: 55,
    borderBottomWidth: 1,
  },
  logoutButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    marginTop: 120,
    paddingLeft: 10,
    flexDirection: 'row',
    margin: 12,
    width: 180,
    height: 55,
  },
  buttons: {
    paddingTop: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 15,
    paddingLeft: 20,
  },
  buttonIcon: {
    height: 20,
    width: 20,
  },
  logo: {
    marginTop: 30,
    height: 90,
    width: 90,
    alignSelf: 'center',
  },
  logoText: {
    fontSize: 20,
    paddingTop: 20,
    fontFamily: 'Montserrat-SemiBold',
    alignSelf: 'center',
  },
  logoutText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    paddingLeft: 20,
  },
});

export default CustomDrawerContent;
