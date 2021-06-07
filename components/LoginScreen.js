import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import AsyncStorage from '@react-native-async-storage/async-storage';
import open from '../images/eyeopen.png';
import closed from '../images/eyeclosed.png';

class LoginScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      isLoggedIn: false,
      loginData: [],
      isPasswordHidden: true,
    };
  }

  async componentDidMount() {
    const log = JSON.parse(await AsyncStorage.getItem('user'));
    console.log(log.login);
    console.log(log.password);
    if (log.login !== null && log.password !== null) {
      this.setState({
        isLoggedIn: true,
      });
    }
  }

  renderImage() {
    const imgSource = this.state.isPasswordHidden ? open : closed;
    return (
      <Image
        style={{width: 20, height: 20, alignContent: 'center'}}
        source={imgSource}
      />
    );
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  navigateToRegisterScreen() {
    this.props.navigation.navigate('Register');
  }

  showPassword() {
    if (this.state.isPasswordHidden === true) {
      this.setState({
        isPasswordHidden: false,
      });
    } else {
      this.setState({
        isPasswordHidden: true,
      });
    }
  }

  async handleSignIn() {
    this.setState({
      loginData: await this.service.signIn(
        this.state.login,
        this.state.password,
      ),
    });
    console.log(this.state.loginData);

    if (this.state.loginData === true) {
      let user = {login: this.state.login, password: this.state.password};
      await AsyncStorage.setItem('user', JSON.stringify(user));
      const log = await AsyncStorage.getItem('user');
      console.log(log);
      this.props.navigation.navigate('Explore');
    } else {
      Alert.alert('Alert', 'Wrong login or password.');
    }
  }

  render() {
    if (this.state.isLoggedIn === true) {
      this.props.navigation.navigate('Explore');
      return null;
    } else {
      return (
        <View style={styles.container}>
          <Image
            style={styles.logoIcon}
            source={require('../images/logo.png')}
          />
          <Text style={styles.logoText}> Book Shelf</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Login"
              underlineColorAndroid="transparent"
              onChangeText={login => this.setState({login})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Password"
              secureTextEntry={this.state.isPasswordHidden}
              underlineColorAndroid="transparent"
              onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity
              style={styles.drawerButton}
              onPress={() => this.showPassword()}>
              {this.renderImage()}
            </TouchableOpacity>
          </View>

          <TouchableHighlight
            underlayColor="#6b5552"
            style={[styles.buttonContainer, styles.loginButton]}
            onPress={() => this.handleSignIn()}>
            <Text style={styles.loginText}>Sign In</Text>
          </TouchableHighlight>

          <TouchableHighlight
            underlayColor="#6b5552"
            style={styles.buttonContainer}
            onPress={() => this.navigateToRegisterScreen()}>
            <Text>Don't have an account?</Text>
          </TouchableHighlight>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputContainer: {
    borderBottomColor: '#7c7c7c',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    flexDirection: 'row',
    width: 300,
    height: 45,
    marginBottom: 20,
  },
  inputs: {
    fontFamily: 'OpenSans-Regular',
    height: 45,
    marginLeft: 16,
    flex: 1,
  },
  logoIcon: {
    width: 60,
    height: 60,
    marginBottom: 30,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 40,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  loginButton: {
    marginTop: 20,
    backgroundColor: '#8d7777',
  },
  loginText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
  drawerButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
  },
});

export default LoginScreen;
