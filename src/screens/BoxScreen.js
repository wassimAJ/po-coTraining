import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle} >
            {/* <Text style={styles.textOneStyle}>Child #1</Text>
            <Text style={styles.textTwoStyle}>Child #2</Text>
            <Text style={styles.textThreeStyle}>Child #3</Text> */}
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    )
}

export default BoxScreen
const styles = StyleSheet.create({
    viewStyle:{
        borderWidth:3,
        height:100,
        borderColor:'black',
        flexDirection:'row',
        justifyContent:'space-between',
        
    },
    textOneStyle:{
        borderWidth:3,
        borderColor:'red',
        // flex:1,
    },
    textTwoStyle:{
        borderWidth:3,
        borderColor:'red',
        // flex:1,
        alignSelf:'stretch',
        fontSize:18,
        // position:'absolute',
        // top:0,
        // bottom:0,
        // left:0, 
        // right:0,
        ...StyleSheet.absoluteFillObject
       
    },
    textThreeStyle:{
        borderWidth:3,
        borderColor:'red',
        // flex:1,
    },
    viewOneStyle:{
        width:50,
        height:50,
        backgroundColor:'red',
    },
    viewTwoStyle:{
        width:50,
        height:50,
        backgroundColor:'green',
        // marginTop:50,
        alignSelf:'flex-end'
    },
    viewThreeStyle:{
        width:50,
        height:50,
        backgroundColor:'blue',
    }
})