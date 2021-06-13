import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  RefreshControl,
  Button,
  TouchableHighlight,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';
import AsyncStorage from '@react-native-async-storage/async-storage';

class MyShelfScreen extends Component {
  service = new LibraryService();

  constructor(props) {
    super(props);
  }

  async navigateToBookDetails(bookId) {
    this.props.navigation.navigate('BookDetailsScreen', {
      book: await this.service.getBookDetails(bookId),
    });
  }

  render() {
    const {navigation, route} = this.props;
    const {rentals} = route.params;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={navigation} title="My Shelf" />
        </View>
        {rentals.length <= 0 && (
          <View style={{flex: 10, backgroundColor: 'white', marginTop: 10}}>
            <Text
              style={{
                marginTop: 10,
                fontFamily: 'Montserrat-Regular',
                paddingBottom: 5,
                fontSize: 15,
              }}>
              {' '}
              You haven't borrowed any book yet.
            </Text>
          </View>
        )}

        {rentals.length > 0 && (
          <View style={{flex: 10, backgroundColor: 'white', marginTop: 10}}>
            <FlatList
              style={styles.list}
              data={rentals}
              keyExtractor={item => {
                return item.rentalId;
              }}
              renderItem={({item}) => {
                return (
                  <TouchableOpacity
                    style={styles.card}
                    onPress={() =>
                      this.navigateToBookDetails(item.book.bookId)
                    }>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <View style={{flexDirection: 'row'}}>
                      <Image
                        source={{
                          uri:
                            'http://192.168.56.1:8080/library/image/' +
                            item.book.bookId,
                        }}
                        style={styles.imageStyle}
                      />
                      <View style={styles.bookDataStyle}>
                        <Text
                          style={{
                            marginTop: 10,
                            fontFamily: 'Montserrat-Regular',
                            paddingBottom: 5,
                          }}>
                          {item.book.author.name} {item.book.author.surname}
                        </Text>
                        <Text
                          style={{
                            fontFamily: 'Montserrat-SemiBold',
                            paddingBottom: 5,
                          }}>
                          {item.book.title}
                        </Text>

                        <Text
                          style={{
                            fontFamily: 'Montserrat-Regular',
                            marginTop: 35,
                          }}>
                          Rental date: {item.rentalDate}
                        </Text>
                        <Text style={{fontFamily: 'Montserrat-Regular'}}>
                          Return date: {item.returnDate}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>
        )}
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
    width: 380,
    height: 200,
    backgroundColor: 'transparent',
  },
  card: {
    justifyContent: 'center',
    padding: 10,
    borderWidth: 1,
    borderColor: '#cacaca',
    marginVertical: 7,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 5,
  },

  imageStyle: {
    padding: 20,
    width: 100,
    height: 150,
    borderWidth: 0.5,
    borderColor: '#bababa',
  },

  title: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
  bookDataStyle: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
});

export default MyShelfScreen;
