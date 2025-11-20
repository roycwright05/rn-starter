import React, { useState } from 'react';
import { Button, View, StyleSheet, Text } from 'react-native';

const CounterScreen = () => {

   const [counter, setCounter ] = useState(0);
   const [remain, setRemainder ] = useState(0);
    const add = () => {
         
        setCounter(counter+1)
       
        //console.log(counter)
    }
    const subtract = () => {
        
        setCounter(counter-1)
       
        //console.log(counter)
    }

    const remainder = () => {
        setRemainder(counter % 4);
    }
    return (
        <View style={styles.view}>
            <View style={styles.spacer}/>
            <Button style={styles.btn} title='Increase' 
            onPress={() => {

                add()
            }}/>
                <View style={styles.spacer}/>
            <Button style={styles.btn} title='Decrease' 
           onPress={() => {
                subtract()
            }}/>

            <View style={styles.spacer}/>
            <Button style={styles.btn} title='Remainder' 
            onPress={() => {

                remainder()
            }}/>
            <View style={styles.spacer}/>
            <Text style={styles.text}>Current count: {counter}</Text>
            <View style={styles.spacer}/>
            <Text style={styles.text}>Remainder (Base 4): {remain}</Text>

            
        </View>
    )
}

const styles = StyleSheet.create({
    view: {
        height: '100%',
        width: '95%',
        backgroundColor: '#F9E7B2',
        alignSelf: 'center'
    },
    text: {
        fontSize: 28,
        display: 'flex',
        textAlign: 'center',
        color: '#A18D6D',
        fontFamily: "Montserrat Alternates sans-serif", 
        fontWeight: 500,
        fontStyle: 'normal',
    },
    spacer: {
        margin: 12,       

    }
})

export default CounterScreen;