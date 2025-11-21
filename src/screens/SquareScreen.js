import React, { useReducer } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 15;

 const reducer = (state, action) => {
        // state === {red: number, green: number, blue: number} --- state is an object as well
        //action === {colorToChange: 'red' || 'green' || 'blue', amount: 15 || -15 } --- action is an object

        switch(action.colorToChange){
            // Never modify state values directly e.g. state.red += 15
            case 'red':
                return {...state, red: state.red + action.amount};
            case 'green':
                return {...state, green: state.green + action.amount};
            case 'blue':
                return {...state, blue: state.blue + action.amount};
            default:
                return state;
        }
    }
const SquareScreen = () => {
// ---- The PARENT Component ---   

   
    const [ state, dispatch ] = useReducer(reducer, {red: 0, green: 0, blue: 0});
    //state === {red: 0, green: 0, blue: 0}  dispatch - run our reducer
    return (
        <View>
           <View style={styles.header}>
            <Text style={styles.textRed}>Choose</Text> 
            <Text style={styles.textGreen}>Your</Text> 
            <Text style={styles.textBlue}>Color</Text>
        </View> 
        <ColorCounter 
            onIncrease={() => {}} 
            onDecrease={() => {}} 
            color='Red'
            colorStyle={styles.textRed}
            />
        <ColorCounter 
            onIncrease={() => {}}
            onDecrease={() => {}}
            color='Green'
            colorStyle={styles.textGreen}
            />
        <ColorCounter 
            onIncrease={() => {}} 
            onDecrease={() => {}} 
            color='Blue'
            colorStyle={styles.textBlue}
            />

            <View style={styles.spacer} />

            <View style={
                {
                    height: 150, 
                    width: 150, 
                    backgroundColor:`rgb(${red}, ${green}, ${blue})`, 
                    alignSelf: 'center'}
                    }/>
            
        </View>
       
    );

};

const styles = StyleSheet.create({
   
    spacer: {
        marginTop: 25
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: 25,
        marginTop: 25
    },
    textRed: { 
        color: '#BF1A1A',
        fontSize: 22,
        fontWeight: 300
    },
    textGreen: {
        color: '#84994F',
        fontSize: 22,
        fontWeight: 300,        
    },
    textBlue: { 
        color: '#0046FF',
        fontSize: 22,
        fontWeight: 300
    }

});

export default SquareScreen;