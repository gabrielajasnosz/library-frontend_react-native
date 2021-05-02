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
} from 'react-native';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onClickListener = viewId => {
    Alert.alert('Alert', 'Button pressed ' + viewId);
  };

  navigateToRegisterScreen() {
    this.props.navigation.navigate('Register');
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Image style={styles.logoIcon} source={require('../images/logo.png')} />
        <Text style={styles.logoText}> Book Shelf</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({email})}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({password})}
          />
        </View>

        <TouchableHighlight
          underlayColor="#6b5552"
          style={[styles.buttonContainer, styles.loginButton]}
          //onPress={() => this.onClickListener('login')}
        >
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
    backgroundColor: '#b5897c',
  },
  loginText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
});

export default LoginScreen;
