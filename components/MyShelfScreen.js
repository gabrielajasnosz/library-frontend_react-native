import React, { Component } from 'react';
import {
  StyleSheet, Text, View, SafeAreaView, FlatList, TouchableOpacity,
  Image, RefreshControl, Button, TouchableHighlight
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MyShelfScreen extends Component {

  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      rentals: null,
    }
  }

  async forceRefresh() {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    console.log(user.login)
    this.setState({
      rentals: await this.service.getRentals(user.login, user.password)
    });
    console.log(this.state.rentals)
  }
  async componentDidMount() {
    const user = JSON.parse(await AsyncStorage.getItem('user'));
    console.log(user.login)
    this.setState({
      rentals: await this.service.getRentals(user.login, user.password)
    });
    console.log(this.state.rentals)
  }

  render() {
    const rentalList = this.state.rentals
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title={'My shelf'} />
        <TouchableHighlight style={styles.buttonContainer}
          underlayColor="#6b5552" onPress={() => this.forceRefresh()}>
          <Text style={styles.loginText}>Refresh</Text>
        </TouchableHighlight>
        <View style={{ flex: 10, backgroundColor: 'white' }}>
          <View style={{ flex: 10, backgroundColor: 'white', marginTop: 10 }}>
            <FlatList
              style={styles.list}
              contentContainerStyle={styles.listContainer}
              data={rentalList}
              horizontal={false}
              numColumns={2}
              keyExtractor={item => {
                return item.rentalId;
              }}
              renderItem={({ item }) => {
                return (
                  <>
                    <TouchableOpacity
                      style={styles.card}
                    >
                      {/* eslint-disable-next-line react/jsx-no-undef */}

                      <Image
                        source={{
                          uri:
                            'http://192.168.7.167:8080/library/image/' + item.book.bookId,
                        }}
                        style={styles.imageStyle}
                      />
                      <Text style={styles.date}>Rental Date:  {item.rentalDate}</Text>
                      <Text style={styles.date}>Return Date:  {item.returnDate}</Text>

                    </TouchableOpacity>

                  </>
                );
              }}
            />
          </View>
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
  header: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    marginTop: 5,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 20,
    marginVertical: 7,
    backgroundColor: 'white',
    flexBasis: '50%',
    marginHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 175,
    height: 250,
    alignSelf: 'center',
    borderWidth: 0.5,
    borderColor: '#bababa',
  },

  date: {
    fontSize: 12,
    flex: 1,
    paddingTop: 5,
    alignSelf: 'center',
    color: '#525252',
    fontFamily: 'Montserrat-Regular',
  },
  buttonContainer: {
    width: 180,
    height: 40,
    borderRadius: 30,
    padding: 0,
    margin: 0,
    backgroundColor: '#8d7777',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginText: {
    color: 'white',
    fontFamily: 'Montserrat-Regular',
  },
});

export default MyShelfScreen;
