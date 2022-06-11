import React, { useReducer } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case 'Increase': return { ...state, count: state.count + action.payload };
    case 'Decrease': return state.count - action.payload < 0 ? state : { ...state, count: state.count - action.payload };
    case 'Reset': return {...state, count: state.count = 0}
    default : return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  console.log(state.count)
  return (
    <View>
      <Text style={styles.textStyle}>Counter Screen</Text>
      <Button title="Increase" onPress={() => dispatch({ type: 'Increase', payload: 1 })} />
      <Button title="Decrease" onPress={() => dispatch({ type: 'Decrease', payload: 1 })} />
      <Button title="Reset" onPress={() => dispatch({ type: 'Reset', payload: 0 })} />
      <Text style={styles.textStyle}>Current Count : {state.count} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    fontSize: 30,
    fontWeight: 'bold',
    //justifyContent: 'center',
    textAlign: 'center',
    paddingVertical: 50,

  }
});

export default CounterScreen;
