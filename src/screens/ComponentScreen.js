import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const ComponentScreen = () => {
    const name = "someone"
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>
            <Text style={styles.subHeaderStyle}>My name is {name}</Text>
     
        </View>
    )
}

export default ComponentScreen
const styles = StyleSheet.create({
    textStyle:{
        fontSize:45
    },
    subHeaderStyle:{
        fontSize:20,
    }
})