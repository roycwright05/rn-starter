import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ColorCounter = ({ color, onIncrease, onDecrease, colorStyle }) => {
// ------ The CHILD Component --- it receives the state values
    return ( 
    <View>
        <Text style={colorStyle}>{color}</Text>
        <Button onPress={() => onIncrease()} title={`Increase ${color}`}/>
        <Button onPress={() => onDecrease()} title={`Decrease ${color}`}/>
        
    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        padding: 10,
        fontSize: 18,
        color: 'magenta'
    }
});

export default ColorCounter;