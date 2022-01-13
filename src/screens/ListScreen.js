import React from 'react';
import {View, Text, FlatList,StyleSheet} from 'react-native'

const ListScreen = () => {
    const friends = [
        {name:"Friend #1", age:20},
        {name:"Friend #2", age:20},
        {name:"Friend #3", age:20},
        {name:"Friend #4", age:20},
        {name:"Friend #5", age:20},
        {name:"Friend #6", age:20},
        {name:"Friend #7", age:20},
        {name:"Friend #8", age:20},
        {name:"Friend #9", age:20},

    ]
    return (
       <FlatList 
       showsVerticalScrollIndicator={false}
       data={friends}
       keyExtractor={item=>item.name}
       renderItem={(item)=>{
           return <Text key={item.item.name} style={styles.textStyle}>{item.item.name} age : {item.item.age}</Text>
       }}
       />
    )
}
export default ListScreen;
const styles = StyleSheet.create({
    textStyle:{
        marginVertical:5
    }
})