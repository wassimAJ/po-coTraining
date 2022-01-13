import React,{useState, useReducer} from 'react'
import { Text, View, Button } from 'react-native'

const reducer = (state, action) =>{
    switch(action.type){
        case 'increase' :
            return {...state,counter:state.counter+1};
        case 'decrease':
            return {...state,counter:state.counter-1};
    }
}

const CounterScreen = () => {
    // const [counter, setCounter ] = useState(0)
    const [state, dispatch] = useReducer(reducer,{counter:0});
    return (
        <>
            <View>
                {/* <Button title = "increase" onPress={()=>setCounter(counter+1)}/>
                <Button title = "Decrease" onPress={()=>setCounter(counter-1)}/> */}

                <Button title = "increase" onPress={()=>dispatch({type:"increase"})}/>
                <Button title = "Decrease" onPress={()=>dispatch({type:"decrease"})}/>
                <Text>Current Count: {state.counter}</Text>
            </View>
        </>
    )
}

export default CounterScreen
