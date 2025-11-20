import React, {useState} from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";



const HomeScreen = ({navigation}) => {
 
  //console.log(lydia.navigation)
  return (
    <View>
      <Text style={styles.text1}> Welcome Home!</Text>
      <View style={styles.spacer} />
      <Button title="Welcome to my 🌎" onPress={() => navigation.navigate('Mine') }/>
        <View style={styles.spacer} />
      <Button 
        title="Go To Components Demo"
        onPress={() =>{ navigation.navigate('Components')} }
      />
      <View style={styles.spacer} />
        <Button title="See you at list Screen" onPress={() => navigation.navigate('List') }/>
     <View style={styles.spacer} />
    <Button title="Imagine That" onPress={() => navigation.navigate('Image') }/>
    <View style={styles.spacer} />
    <Button title="Count Me In" onPress={() => navigation.navigate('Count') }/>
    <View style={styles.spacer} />
    <Button title="Color Me Bad" onPress={() => navigation.navigate('Colors') }/>
      <View style={styles.spacer} />
    <Button title="Hip 2B Square" onPress={() => navigation.navigate('Square') }/>
    </View>
  )
};

const styles = StyleSheet.create({
  text1: {
    fontSize: 26,
    color: '#001BB7',
    textAlign: 'center'
  },
  text2: {
      fontSize: 22,
      color: '#DC0E0E'
  },
  view: {
    paddingTop: 25,
    display: 'flex',
    alignItems: 'center',
    border: '2px solid #000'
  },
  spacer: {
    margin: 10
  }
});

export default HomeScreen;
