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

class ExploreScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      books: null,
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

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} title={'Explore'} />
        <View style={{flex: 10, backgroundColor: 'white'}}>
          <FlatList
            style={styles.list}
            contentContainerStyle={styles.listContainer}
            data={this.state.books}
            horizontal={false}
            numColumns={2}
            keyExtractor={item => {
              return item.bookId;
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  style={styles.card}
                  onPress={() => this.navigateToBookDetails(item.bookId)}>
                  {/* eslint-disable-next-line react/jsx-no-undef */}
                  <Image
                    source={{
                      uri:
                        'http://192.168.0.21:8080/ksiegarnia/image/' +
                        item.bookId,
                    }}
                    style={styles.imageStyle}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                </TouchableOpacity>
              );
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

export default ExploreScreen;
