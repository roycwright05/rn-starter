import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import BigBlue from '../../assets/blue_whale1.png';

const MyScreen = () => {
    return(
        <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Text style={styles.text1}>Blue Whale here 🐋</Text>
            <Image style={styles.img1} source={BigBlue} />
        </View>
    )
}
//  require('../../assets/blue_whale1.png')
const styles = StyleSheet.create({
    text1: {
        color: '#8FABD4',
        fontSize: 26
    },
    img1: {
        borderRadius: 25,
        height: 250,
        width: 250,
        borderColor: '#000',
        borderWidth: 2
    }
})

export default MyScreen;