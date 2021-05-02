import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';

class RegisterScreen extends Component {
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

  render() {
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
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => this.onClickListener('register')}>
          <Text style={styles.registerText}>Sign Up</Text>
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
  registerButton: {
    marginTop: 20,
    backgroundColor: '#b5897c',
  },
  registerText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
});

export default RegisterScreen;
