import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ColorCounter from '../components/ColorCounter';


const COLOR_INCREMENT = 15;
const SquareScreen = () => {
// ---- The PARENT Component ---

/* State Components */

    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const resetColors = () => {
        setRed(0);
        setGreen(0);
        setBlue(0);
    }
/*----------- */

    //console.log(blue)
    const setColor = (color, change) => {

        switch(color){
            case 'red':
               ((red+change) > 255 || (red+change) < 0) ? null : setRed(red+change);
               return;

            case 'green':
                ((green+change) > 255 || (green+change) < 0 ? null : setGreen(green+change));
                return;

            default:
               ((blue+change > 255 || (blue+change) < 0) ? null : setBlue(blue+change));
                return;
                
        }
        //color === 'red', 'green', 'blue'
        
    };
    
    return (
        <View>
           <View style={styles.header}>
            <Text style={styles.textRed}>Choose</Text> 
            <Text style={styles.textGreen}>Your</Text> 
            <Text style={styles.textBlue}>Color</Text>
        </View> 
        <ColorCounter 
            onIncrease={() => setColor('red', COLOR_INCREMENT)} 
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} 
            color='Red'
            colorStyle={styles.textRed}
            />
        <ColorCounter 
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
            color='Green'
            colorStyle={styles.textGreen}
            />
        <ColorCounter 
            onIncrease={() => setColor('blue', COLOR_INCREMENT)} 
            onDecrease={() => setColor('blue', -1*COLOR_INCREMENT)} 
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

            <View style={styles.spacer} />
            <Button title='Rest Colors' onPress={()=> resetColors()}/>
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