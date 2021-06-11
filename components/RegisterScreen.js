import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
} from 'react-native';
import LibraryService from '../services/LibraryService';

class RegisterScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      login: '',
      password: '',
      name: '',
      surname: '',
      houseNumber: '',
      phoneNumber: '',
      street: '',
      city: '',
      zipCode: ''
    };
  }

  async handleRegister() {
    this.setState({
      registerData: await this.service.registerUser(
        this.state.login,
        this.state.password,
        this.state.name,
        this.state.surname,
        this.state.houseNumber,
        this.state.phoneNumber,
        this.state.street,
        this.state.city,
        this.state.zipCode
      ),
    });
    this.props.navigation.navigate('Login');
  }


  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoIcon} source={require('../images/logo.png')} />
        <Text style={styles.logoText}> Book Shelf</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="login"
            underlineColorAndroid="transparent"
            onChangeText={login => this.setState({ login })}
          />
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Name"
            underlineColorAndroid="transparent"
            onChangeText={name => this.setState({ name })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Surname"
            underlineColorAndroid="transparent"
            onChangeText={surname => this.setState({ surname })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="House Number"
            underlineColorAndroid="transparent"
            onChangeText={houseNumber => this.setState({ houseNumber })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Phone Number"
            underlineColorAndroid="transparent"
            onChangeText={phoneNumber => this.setState({ phoneNumber })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Street"
            underlineColorAndroid="transparent"
            onChangeText={street => this.setState({ street })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="City"
            underlineColorAndroid="transparent"
            onChangeText={city => this.setState({ city })}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.inputs}
            placeholder="Zip Code"
            underlineColorAndroid="transparent"
            onChangeText={zipCode => this.setState({ zipCode })}
          />
        </View>

        <TouchableHighlight
          underlayColor="#6b5552"
          style={[styles.buttonContainer, styles.registerButton]}
          onPress={() => this.handleRegister()}>
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
    height: 40,
    marginBottom: 10,
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
