import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
      <View>
          <Text style={styles.text}>HomeScreen</Text>
          <Button title="Go to components Demo" onPress={()=>navigation.navigate("Component")}/>
          <TouchableOpacity onPress={()=>navigation.navigate("ListScreen")}>
              <Text>Go To List Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ImageScreen")}>
              <Text>Go To Image Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("CounterScreen")}>
              <Text>Go To counter Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("ColorScreen")}>
              <Text>Go To color Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("SquareScreen")}>
              <Text>Go To Square Demo</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate("TextScreen")}>
              <Text>Go To text Demo</Text>
          </TouchableOpacity>
      </View>
  )
  
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
