import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ComponentsScreen = () => {
  return (
    <View>
      <Text style={styles.textStyle}> Components Ahoy! </Text>
      <Image style={styles.img1} source={require('../../assets/spidey2.png')} />
    </View>
  )
}


const styles = StyleSheet.create({

  textStyle: {
    fontSize: 28
  },
  img1: {
    width: 200,
    height: 200,
    display: 'flex',
    alignSelf: 'center',
    marginTop: 50,
    borderRadius: 15

  }
})

export default ComponentsScreen;