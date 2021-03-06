import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  Alert,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

class BookDetailsScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
  }

  getAvailability(status) {
    if (status === true) {
      return 'AVAILABLE';
    } else {
      return 'NOT AVAILABLE';
    }
  }

  async borrowBook(bookId) {
    let log = JSON.parse(await AsyncStorage.getItem('user'));
    let canBorrow = await this.service.rentBook(
      log.login,
      log.password,
      bookId,
    );
    if (canBorrow === true) {
      this.props.navigation.navigate('BookDetailsScreen', {
        book: await this.service.getBookDetails(bookId),
      });
      Alert.alert('Alert', 'Book borrowed.');
    } else {
      Alert.alert('Alert', 'Book unavailable');
    }
  }

  render() {
    const {navigation, route} = this.props;
    const {book} = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={navigation} title={book.title} />
        </View>
        <View style={styles.bookContainer}>
          <View style={{flexDirection: 'row'}}>
            <Image
              source={{
                uri: 'http://192.168.56.1:8080/library/image/' + book.bookId,
              }}
              style={styles.imageStyle}
            />
            <View style={styles.bookDataStyle}>
              <Text
                style={{fontFamily: 'Montserrat-Regular', paddingBottom: 5}}>
                {book.author.name} {book.author.surname}
              </Text>
              <View>
                <Text
                  style={{fontFamily: 'Montserrat-SemiBold', paddingBottom: 5}}>
                  {book.title}
                </Text>
              </View>
              <Text style={{fontFamily: 'Montserrat-Regular'}}>
                {book.publicationDate}
              </Text>
              <Text
                style={book.availability === true ? styles.green : styles.red}>
                {this.getAvailability(book.availability)}
              </Text>
            </View>
          </View>
          <View style={{paddingTop: 20, height: 300, width: 370}}>
            <View style={{width: 150, borderBottomWidth: 1}}>
              <Text
                style={{
                  paddingBottom: 10,
                  fontFamily: 'Montserrat-Regular',
                }}>
                Description
              </Text>
            </View>
            <ScrollView>
              <Text style={styles.descriptionStyle}>{book.description}</Text>
            </ScrollView>
          </View>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableHighlight
            underlayColor="#6b5552"
            style={styles.buttonContainer}
            onPress={() => this.borrowBook(book.bookId)}>
            <Text style={styles.loginText}>Borrow</Text>
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
  header: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    padding: 20,
    width: 150,
    height: 200,
    borderWidth: 0.5,
    borderColor: '#bababa',
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
  title: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'flex-start',
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  bookContainer: {
    width: 380,
    flex: 10,
    marginTop: 20,
    padding: 10,
    backgroundColor: 'white',
    alignItems: 'flex-start',
  },
  bookDataStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  descriptionStyle: {
    paddingTop: 10,
    paddingBottom: 10,
    fontFamily: 'OpenSans-Regular',
  },
  green: {
    fontFamily: 'Montserrat-Regular',
    color: 'green',
    paddingTop: 105,
  },
  red: {
    color: '#660909',
    fontFamily: 'Montserrat-Regular',
    paddingTop: 105,
  },
});

export default BookDetailsScreen;
