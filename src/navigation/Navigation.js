import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ComponentScreen from '../screens/ComponentScreen';
import ListScreen from '../screens/ListScreen';
import ImageScreen from '../screens/ImageScreen';
import CounterScreen from '../screens/CounterScreen';
import ColorScreen from '../screens/ColorScreen';
import SquareScreen from '../screens/SquareScreen';
import TextScreen from '../screens/TextScreen';

const StackNavigation = () =>{
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Home' >
            <Stack.Screen name ="Home" component={HomeScreen}/>
            <Stack.Screen name = "Component" component={ComponentScreen}/>
            <Stack.Screen name = "ListScreen" component={ListScreen}/>
            <Stack.Screen name = "ImageScreen" component={ImageScreen}/>
            <Stack.Screen name = "CounterScreen" component={CounterScreen}/>
            <Stack.Screen name = "ColorScreen" component={ColorScreen}/>
            <Stack.Screen name = "SquareScreen" component={SquareScreen}/>
            <Stack.Screen name = "TextScreen" component={TextScreen }/>
        </Stack.Navigator>
    )
}

const Navigation = () => {

    return (
        <StackNavigation/>
    )
}

export default Navigation
