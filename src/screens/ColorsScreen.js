import React, {useState } from 'react';
import { StyleSheet, View, Text, FlatList, Button } from 'react-native';

const ColorsScreen = () => {

    const [ colors, setColors ] = useState([]);
    //console.log(colors)
    return(
        <View>
            <Text style={styles.title}>colors</Text>
            <Button title='Next Color' onPress={ () => {
                    setColors([...colors, randomRgb()])
            }}/>

            <FlatList
                keyExtractor={ item => item }
                data={colors}
                renderItem={ ({item}) => {
                    //console.log(`The Item is: ${item}`) ---> rgb(num, num, num)
                    return (
                        <View style={{ height: 100, width: 100, backgroundColor: item }} />
                    )
                }}
            />
            

        </View>
    )
}

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);

    const green  = Math.floor(Math.random() * 256);
    const blue  = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({
    
    title: {        
        alignSelf: 'center',
        fontSize: 26,
        color: '#007E6E'
    }
})

export default ColorsScreen;