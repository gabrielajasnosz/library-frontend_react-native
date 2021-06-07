import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableHighlight,
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TextInput} from 'react-native-paper';

import open from '../images/eyeopen.png';
import closed from '../images/eyeclosed.png';

class MyAccountScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      clientData: [],
      name: '',
      surname: '',
      login: '',
      password: '',
      houseNumber: '',
      street: '',
      phoneNumber: '',
      clientId: 0,
      zipCode: '',
      city: '',
      isPasswordHidden: true,
    };
  }
  async componentDidMount() {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    const clientData = await this.service.getUser(user.login, user.password);
    console.log(clientData);
    this.setState({
      name: clientData.name,
      surname: clientData.surname,
      login: clientData.login,
      password: clientData.password,
      street: clientData.street,
      houseNumber: clientData.houseNumber,
      phoneNumber: clientData.phoneNumber,
      city: clientData.city,
      zipCode: clientData.zipCode,
      clientId: clientData.clientId,
    });
  }

  async updateData() {
    const user = {
      clientId: this.state.clientId,
      login: this.state.login,
      password: this.state.password,
      name: this.state.name,
      surname: this.state.surname,
      houseNumber: this.state.houseNumber,
      phoneNumber: this.state.phoneNumber,
      street: this.state.street,
      city: this.state.city,
      zipCode: this.state.zipCode,
    };
    const loginData = {login: this.state.login, password: this.state.password};
    await AsyncStorage.setItem('user', JSON.stringify(loginData));
    const ifUpdated = await this.service.updateUser(user);
    if (ifUpdated === true) {
      Alert.alert('Alert', 'Data updated.');
    } else {
      Alert.alert('Alert', 'Error.');
    }
  }

  renderImage() {
    const imgSource = this.state.isPasswordHidden ? open: closed;
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

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} title={'My account'} />
        </View>
        <View
          style={{
            flex: 10,
            backgroundColor: 'white',
            marginTop: 10,
            display: 'flex',
            padding: 20,
            alignItems: 'flex-start',
            alignContent: 'flex-start',
            width: 380,
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 20}}>
              {this.state.surname}{' '}
            </Text>
            <Text style={{fontFamily: 'Montserrat-SemiBold', fontSize: 20}}>
              {this.state.name}
            </Text>
          </View>
          <TextInput
            label="Login"
            mode="outlined"
            style={styles.inputs}
            value={this.state.login}
            theme={{
              colors: {
                placeholder: 'gray',
                text: 'black',
                primary: '#8d7777',
                underlineColor: 'transparent',
                background: '#ffffff',
              },
            }}
            onChangeText={login => this.setState({login})}
          />
          <View style={{flexDirection: 'row', height: 60, display: 'flex'}}>
            <TextInput
              label="Password"
              mode="outlined"
              secureTextEntry={this.state.isPasswordHidden}
              style={styles.inputs}
              value={this.state.password}
              theme={{
                colors: {
                  placeholder: 'gray',
                  text: 'black',
                  primary: '#8d7777',
                  underlineColor: 'transparent',
                  background: '#ffffff',
                },
              }}
              onChangeText={password => this.setState({password})}
            />
            <TouchableOpacity
              style={styles.drawerButton}
              onPress={() => this.showPassword()}>
              {this.renderImage()}
            </TouchableOpacity>
          </View>

          <TextInput
            label="Phone Number"
            mode="outlined"
            style={styles.inputs}
            value={this.state.phoneNumber}
            theme={{
              colors: {
                placeholder: 'gray',
                text: 'black',
                primary: '#8d7777',
                underlineColor: 'transparent',
                background: '#ffffff',
              },
            }}
            onChangeText={phoneNumber => this.setState({phoneNumber})}
          />
          <View
            style={{
              height: 200,
              width: 360,
              borderWidth: 1,
              marginTop: 20,
              borderRadius: 4,
              borderColor: 'grey',
            }}>
            <Text style={{fontSize: 16, color: 'grey', padding: 10}}>
              Address
            </Text>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                label="Street"
                mode="outlined"
                style={styles.streetInput}
                value={this.state.street}
                theme={{
                  colors: {
                    placeholder: 'gray',
                    text: 'black',
                    primary: '#8d7777',
                    underlineColor: 'transparent',
                    background: '#ffffff',
                  },
                }}
                onChangeText={street => this.setState({street})}
              />
              <TextInput
                label="Number"
                mode="outlined"
                style={styles.numberInput}
                value={this.state.houseNumber}
                theme={{
                  colors: {
                    placeholder: 'gray',
                    text: 'black',
                    primary: '#8d7777',
                    underlineColor: 'transparent',
                    background: '#ffffff',
                  },
                }}
                onChangeText={houseNumber => this.setState({houseNumber})}
              />
            </View>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                label="ZIP"
                mode="outlined"
                style={styles.zipInput}
                value={this.state.zipCode}
                theme={{
                  colors: {
                    placeholder: 'gray',
                    text: 'black',
                    primary: '#8d7777',
                    underlineColor: 'transparent',
                    background: '#ffffff',
                  },
                }}
                onChangeText={zipCode => this.setState({zipCode})}
              />
              <TextInput
                label="City"
                mode="outlined"
                style={styles.numberInput}
                value={this.state.city}
                theme={{
                  colors: {
                    placeholder: 'gray',
                    text: 'black',
                    primary: '#8d7777',
                    underlineColor: 'transparent',
                    background: '#ffffff',
                  },
                }}
                onChangeText={city => this.setState({city})}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <TouchableHighlight
              underlayColor="#6b5552"
              onPress={() => this.updateData()}
              style={styles.buttonContainer}>
              <Text style={styles.loginText}>Update</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flex: 1,
    alignItems: 'center',
  },
  inputs: {
    alignContent: 'flex-start',
    color: 'black',
    height: 40,
    width: 150,
    paddingTop: 10,
  },
  streetInput: {
    alignContent: 'flex-start',
    color: 'black',
    height: 40,
    width: 180,
    padding: 10,
    paddingTop: 10,
  },
  numberInput: {
    alignContent: 'flex-start',
    color: 'black',
    height: 40,
    width: 120,
    padding: 10,
    paddingTop: 10,
  },
  zipInput: {
    alignContent: 'flex-start',
    color: 'black',
    height: 40,
    width: 100,
    padding: 10,
    paddingTop: 10,
  },
  buttonContainer: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 180,
    borderRadius: 30,
    marginTop: 10,
    backgroundColor: '#8d7777',
  },
  loginText: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
  drawerButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 10,
    height: 55,
  },
});

export default MyAccountScreen;
