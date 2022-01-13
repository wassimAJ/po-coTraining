import React,{useState} from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'

const TextScreen = () => {
    const [password, setPassword ] = useState('')
    return (
        
           <View>
               <Text>Enter Password</Text>
               <TextInput 
               style={styles.input}
               autoCapitalize="none"
               autoCorrect={false}
               value={password}
               onChangeText={(newValue) =>setPassword(newValue)}
               /> 
               {password.length<5?<Text>Password should be atleast 5 characters</Text>:<Text>Password {password}</Text>}
               
        </View>
    )
}

export default TextScreen
const styles = StyleSheet.create({
    input:{
        margin:15, 
        borderColor:'black',
        borderWidth:1
    }
})