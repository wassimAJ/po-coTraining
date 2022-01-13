import React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'

const ColorCounter = ({color, increase, decrease}) => {
    return (
        <View>
            <Text>
                {color}
            </Text>
            <Button title ={`Increase ${color}`} onPress={increase}/>
            <Button title ={`Decrease ${color}`} onPress={decrease}/>
        </View>
    )
}

export default ColorCounter
const styles = StyleSheet.create({
    
})