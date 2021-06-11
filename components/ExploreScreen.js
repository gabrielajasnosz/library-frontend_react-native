import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';

class ExploreScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    };
  }

  async componentDidMount() {
    this.setState({
      books: await this.service.getBooks(),

    });
  }

  async navigateToBookDetails(bookId) {
    this.props.navigation.navigate('BookDetailsScreen', {
      book: await this.service.getBookDetails(bookId),
    });
  }

  renderItem(data) {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.navigateToBookDetails(data.item.bookId)}>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Image
          source={{
            uri:
              //'http://192.168.56.1:8080/library/image/' + item.bookId,
              'http://192.168.7.167:8080/library/image/' +
              data.item.bookId,
          }}
          style={styles.imageStyle}
        />
        <Text style={styles.title}>{data.item.title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={navigation} title="Explore" />
        </View>

        <View style={{ flex: 10, backgroundColor: 'white', marginTop: 10 }}>

          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.books}
            horizontal={false}
            numColumns={2}
            renderItem={this.renderItem}
            keyExtractor={item => {
              return item.bookId;
            }}
          />
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
    padding: 10,
    borderWidth: 1,
    borderColor: '#cacaca',
    marginVertical: 7,
    backgroundColor: 'white',
    flexBasis: '45%',
    marginHorizontal: 5,
  },
  listContainer: {
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 150,
    alignSelf: 'center',
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
});

export default ExploreScreen;
