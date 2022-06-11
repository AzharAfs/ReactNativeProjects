import React, { useReducer } from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREAMENT = 5;
const windowWidth = Dimensions.get('window').width;

const reducer = (state, action) => {
  //state ==={red: number, green:number, blue:number}
  //action === {type: 'change_red || 'change_green' || 'change_blue', payload: +10 || -10}

  switch (action.type) {
    case 'change_red': return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : { ...state, red: state.red + action.payload }
    case 'change_green': return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : { ...state, green: state.green + action.payload }
    case 'change_blue': return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : { ...state, blue: state.blue + action.payload }
    default:
      return state;
  }
}
const SquareScreen = () => {

  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  //console.log(state);

  // const [red, setRed] = useState(0);
  // const [blue, setBlue] = useState(0);
  // const [green, setGreen] = useState(0);

  // const setColor = (color, change) => {
  //   switch (color) {
  //     case "red":
  //       red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //       break;
  //     case "green":
  //       green + change > 255 || green + change < 0 ? null : setGreen(green + change);
  //       break;
  //     case "blue":
  //       blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
  //       break;
  //   }
  // };

  return (
    <View>
      <ColorCounter
        color="Red"
        // onIncrease={() => setColor("red", COLOR_INCREAMENT)}
        // onDecrease={() => setColor("red", -1 * COLOR_INCREAMENT)}
        onIncrease={() => dispatch({ type: 'change_red', payload: COLOR_INCREAMENT })}
        onDecrease={() => dispatch({ type: 'change_red', payload: -1 * COLOR_INCREAMENT })}
      />
      <ColorCounter
        color=" Blue"
        // onIncrease={() => setColor("blue", COLOR_INCREAMENT)}
        // onDecrease={() => setColor("blue", -1 * COLOR_INCREAMENT)}
        onIncrease={() => dispatch({ type: 'change_blue', payload: COLOR_INCREAMENT })}
        onDecrease={() => dispatch({ type: 'change_blue', payload: -1 * COLOR_INCREAMENT })}
      />
      <ColorCounter
        color="Green"
        // onIncrease={() => setColor("green", COLOR_INCREAMENT)}
        // onDecrease={() => setColor("green", -1 * COLOR_INCREAMENT)}
        onIncrease={() => dispatch({ type: 'change_green', payload: COLOR_INCREAMENT })}
        onDecrease={() => dispatch({ type: 'change_green', payload: -1 * COLOR_INCREAMENT })}
      />
      <View
        style={{
          height: 200,
          width: windowWidth,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
          marginTop: 50,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
