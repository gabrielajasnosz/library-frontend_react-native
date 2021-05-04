import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';

class BookDetailsScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
  }

  render() {
    const {navigation, route} = this.props;
    const {book} = route.params;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} title={book.title} />
        <View style={{flex: 10, backgroundColor: 'white'}}>
          <Text>{book.description}</Text>
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
  list: {
    marginTop: 5,
    paddingHorizontal: 5,
    backgroundColor: 'transparent',
  },
  card: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#cacaca',
    marginVertical: 7,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 5,
  },
  imageStyle: {
    width: 100,
    height: 150,
    alignSelf: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },

  title: {
    fontSize: 15,
    flex: 1,
    alignSelf: 'center',
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
  },
});

export default BookDetailsScreen;
