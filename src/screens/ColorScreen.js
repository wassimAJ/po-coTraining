import React, {useState} from 'react';
import { Button, View, FlatList, StyleSheet } from 'react-native';


const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    return (
        <>
           <View>
               <Button title="Add color" onPress={() =>{
                   setColors([...colors, randomRgb()])
               }} />
              
                   
           
               <FlatList 
               data={colors}
               renderItem={({item})=>(
                    <View style={{height:100, width:100, backgroundColor:item}}/>
               )}
               />
               </View> 
        </>
    )
}

const randomRgb = () =>{
    const red = Math.floor(Math.random()*256)
    const green = Math.floor(Math.random()*256)
    const blue = Math.floor(Math.random()*256)

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColorScreen
