import React, {Component} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

class Book extends Component {
  render() {
    const {bookId, title} = this.props;
    return (
      <TouchableOpacity style={styles.item} onPress={() => {}}>
        <Text>{title}</Text>
        {/* eslint-disable-next-line react/jsx-no-undef */}
        <Image
          source={{
            uri: 'http://192.168.0.21:8080/ksiegarnia/image/' + bookId,
          }}
          style={{width: 400, height: 400}}
        />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderColor: 'grey',
    borderWidth: 2,
    height: 300,
    width: 200,
    overflow: 'hidden',
    paddingBottom: 20,
  },
});

export default Book;
