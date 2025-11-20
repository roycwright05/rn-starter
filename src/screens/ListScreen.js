import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

export default function ListScreen() {
    const amigos = [
        {nombre: 'Sabrina', edad: '22'},
        {nombre: 'Selena', edad: '31'},
        {nombre: 'Kim', edad: '35'},
        {nombre: 'Latoya', edad: '41'},
        {nombre: 'Tina', edad: '38'},
        {nombre: 'Cathy', edad: '26'},
        {nombre: 'Bridget', edad: '28'},
        {nombre: 'Angel', edad: '35'},
        {nombre: 'Linda', edad: '48'},
    ];
  return (
   <FlatList        
        keyExtractor={(amigo) => {
            amigo.nombre;
        }} 
        data={amigos} 
        renderItem={ ({item}) => {
            return <Text style={styles.text1}>{item.nombre} - {item.edad}</Text>;
   }}
   />
  );
};

const styles = StyleSheet.create({
    text1: {
        color: '#B87C4C',
        fontSize: 22,
        display: 'flex',
        textAlign: 'center',
        marginVertical: 10
    }
})