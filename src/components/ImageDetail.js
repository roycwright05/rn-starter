import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({title, define, imgSrc}) => {

    //console.log(props)
    return (
        <View style={styles.card}>
            <View style={styles.textView}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.define}>{define}</Text>
            </View>
            
            <Image style={styles.img}source={imgSrc}/>
        </View>
    );
}

const styles = StyleSheet.create({

        img: {
            height: 150,
            width: 150,
            borderRadius: 25,
            borderColor: "#2F5755",
            borderWidth: 2
        },
        title: {
            color: '#4C763B',
            fontSize: 22
        },
        define: {
            color: '#41A67E',
            textAlign: 'left',
            fontSize: 12,
            fontStyle: 'italic'

        },
        textView: {
            width: '50%'
        },
        card: {
            backgroundColor: '#FCF9EA',
            borderStyle: 'solid',
            borderWidth: 2,
            borderColor: '#043915',
            marginBottom: 5,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 5

        }
})

export default ImageDetail;

// commit  f4ce2694a90a38fefb576ba196e26a8271b56eaa