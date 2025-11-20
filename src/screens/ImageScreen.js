import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ImageDetail from '../components/ImageDetail';
const ImageScreen = () => {

    const definitions = {
            beach: 'A beach is defined as a narrow strip of land that borders a body of water such as an ocean or lake. Beaches are composed of a mixture of sand and pebbles that are deposited by waves from the ocean. Often, this sediment may also contain pieces of seashells, seaweed, or small marine organisms like crabs.',
            forest: 'The term forest is widely used to describe any landscape with trees, but is more commonly associated with regions that receive adequate precipitation to support dense stands of trees. ',
            mountain: 'They usually have steep, sloping sides and sharp or rounded ridges, and a high point, called a peak or summit. Most geologists classify a mountain as a landform that rises at least 1,000 feet (300 meters) or more above its surrounding area.',
            city: 'A city is an area in which a large number of people live fairly close together. Cities usually have their own separate governments and systems for maintaining and providing utilities and transportation.'
    };
    return (

        <View>
            <ImageDetail define={definitions.beach} title='Beach 🏖️' imgSrc={require('../../assets/beach.png')}/>
            <ImageDetail define={definitions.forest} title='Forest 🌳' imgSrc={require('../../assets/forest.jpg')}/>
            <ImageDetail define={definitions.mountain} title='Mountain ⛰️' imgSrc={require('../../assets/mountain.jpg')}/>
            <ImageDetail define={definitions.city} title='City 🌃' imgSrc={require('../../assets/city2.png')}/>
        </View>
        
    )
}

const styles = StyleSheet.create({
    button1: {
        backgroundColor: '#4A70A9',
        color: '#fff',
        width: '100%'
    },
    btnTxt: {
        color: '#fff',
        alignSelf: 'center',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10
    }
})
export default ImageScreen;