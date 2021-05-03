import React, {Component} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';

import LibraryService from '../services/LibraryService';
import Header from '../components/Header';

class MyAccountScreen extends Component {
  service = new LibraryService();
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header navigation={this.props.navigation} title={'My account'} />
        <View style={{flex: 10, backgroundColor: 'white'}}>
          <SafeAreaView>
            <Text>my account</Text>
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
});

export default MyAccountScreen;
