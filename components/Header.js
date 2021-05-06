import {TouchableOpacity, Image, StyleSheet, Text, View} from 'react-native';

import React, {Component} from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let {navigation, title} = this.props;
    return (
      <View style={styles.toolbar}>
        <View style={[styles.drawerIcon]}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}>
            <Image
              source={require('../images/menu.png')}
              style={styles.imageStyle}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headline}>{title}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  drawerIcon: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  imageStyle: {
    width: 20,
    height: 20,
  },
  toolbar: {
    display: 'flex',
    width: 370,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
    borderBottomWidth:1,
  },
  headline: {
    color: 'black',
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
  },
});

export default Header;
