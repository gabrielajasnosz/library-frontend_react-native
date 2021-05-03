import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';
import Book from '../components/Book';

class ExploreScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.route.params.books,
    };
  }

  render() {
    const {navigation, route} = this.props;
    return (
      <View style={styles.container}>
        <Header navigation={navigation} title={'Explore'} />
        <View
          style={{flex: 10, backgroundColor: 'white', flexDirection: 'row'}}>
          <SafeAreaView>
            {this.state.books.map(element => {
              return <Book title={element.title} bookId={element.bookId} />;
            })}
          </SafeAreaView>
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
    flexDirection: 'row',
  },
});

export default ExploreScreen;
