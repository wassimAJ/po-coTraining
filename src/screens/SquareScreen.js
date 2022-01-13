import React, { useState, useReducer } from "react";
import { Text, View, StyleSheet } from "react-native";
import ColorCounter from "../components/ColorCounter";


const reducer = (state, action) =>{
    switch(action.type){
        case 'change_red':
           return state.red + action.payload>255 || state.red + action.payload <0?state: {...state, red:state.red + action.payload}
        case 'change_green':
           return state.green + action.payload>255 || state.green + action.payload <0?state: {...state, green:state.green + action.payload}
        case 'change_blue' :
           return state.blue + action.payload>255 || state.blue + action.payload <0?state: {...state, blue:state.blue + action.payload}
        default:
            return state;
    }
   };

const SquareScreen = () => {
//   const [red, setRed] = useState(0);
//   const [blue, setBlue] = useState(0);
//   const [green, setGreen] = useState(0);

  const COLOR_INCREMENT = 15;
  const [state, dispatch] = useReducer(reducer,{red:0, green:0, blue:0});

   

//   const setColor = (color, change) =>{
//       switch(color){
//           case 'red':
//              red + change > 255 || red + change < 0?null : setRed(red+change);
//              return;
//              case 'blue':
//              blue + change > 255 || blue + change < 0?null : setBlue(blue+change);
//              return;
//              case 'green':
//              green + change > 255 || green + change < 0?null : setGreen(green+change);
//              return;
//              default :
//              return
//       }
    
//   }

  return (
    <View>
      {/* <ColorCounter
        color="Red"
        increase={() => setColor('red', COLOR_INCREMENT)}
        decrease={() => setColor('red', -COLOR_INCREMENT)}
      />

      <ColorCounter
        color="Blue"
        increase={() => setColor('blue',  COLOR_INCREMENT)}
        decrease={() => setColor('blue', - COLOR_INCREMENT)}
      />

      <ColorCounter
        color="Green"
        increase={() => setColor('green',  COLOR_INCREMENT)}
        decrease={() => setColor('green', - COLOR_INCREMENT)}
      /> */}

<ColorCounter
        color="Red"
        increase={() => dispatch({type:'change_red', payload:COLOR_INCREMENT}) }
        decrease={() => dispatch({type:'change_red', payload:-COLOR_INCREMENT}) }
      />

      <ColorCounter
        color="Blue"
        increase={() => dispatch({type:'change_blue', payload:COLOR_INCREMENT}) }
        decrease={() => dispatch({type:'change_blue', payload:-COLOR_INCREMENT})}
      />

      <ColorCounter
        color="Green"
        increase={() =>dispatch({type:'change_green', payload:COLOR_INCREMENT}) }
        decrease={() =>dispatch({type:'change_green', payload:-COLOR_INCREMENT}) }
      />

      <View style={{height:150, width:150, backgroundColor:`rgb(${state.red}, ${state.green}, ${state.blue})`}}/>
    </View>
  );
};

export default SquareScreen;
const styles = StyleSheet.create({});
