import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import LibraryService from '../services/LibraryService';

class ExploreScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Explore</Text>
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
});

export default ExploreScreen;
