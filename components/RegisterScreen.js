import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity,
} from 'react-native';
import LibraryService from '../services/LibraryService';
import open from '../images/eyeopen.png';
import closed from '../images/eyeclosed.png';

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
      zipCode: '',
      isPasswordHidden: true,
    };
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
        this.state.zipCode,
      ),
    });
    console.log(this.state.registerData);
    if (this.state.registerData === true) {
      this.props.navigation.navigate('Login');
      Alert.alert('Alert', 'Account registered.');
    } else {
      Alert.alert('Alert', 'Login already taken.');
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.logoIcon} source={require('../images/logo.png')} />
        <Text style={styles.logoText}> Book Shelf</Text>
        <View style={styles.safeArea}>
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
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Name"
              underlineColorAndroid="transparent"
              onChangeText={name => this.setState({name})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Surname"
              underlineColorAndroid="transparent"
              onChangeText={surname => this.setState({surname})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="House Number"
              underlineColorAndroid="transparent"
              onChangeText={houseNumber => this.setState({houseNumber})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Phone Number"
              underlineColorAndroid="transparent"
              onChangeText={phoneNumber => this.setState({phoneNumber})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Street"
              underlineColorAndroid="transparent"
              onChangeText={street => this.setState({street})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="City"
              underlineColorAndroid="transparent"
              onChangeText={city => this.setState({city})}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Zip Code"
              underlineColorAndroid="transparent"
              onChangeText={zipCode => this.setState({zipCode})}
            />
          </View>

          <TouchableHighlight
            underlayColor="#6b5552"
            style={[styles.buttonContainer, styles.registerButton]}
            onPress={() => this.handleRegister()}>
            <Text style={styles.registerText}>Sign Up</Text>
          </TouchableHighlight>
        </View>
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
    flexDirection: 'row',
    width: 300,
    height: 45,
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
    marginTop: 30,
    justifyContent: 'center',
  },
  logoText: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    marginBottom: 10,
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
    backgroundColor: '#8d7777',
  },
  registerText: {
    color: 'white',
    fontFamily: 'OpenSans-Regular',
  },
  safeArea: {
    width: 380,
    alignItems: 'center',
  },
  drawerButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    height: 55,
  },
});

export default RegisterScreen;
