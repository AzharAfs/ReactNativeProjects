import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const ColorCounter = ({color, onIncrease, onDecrease}) => {
  
  return (
    <View style={styles.parentView}>
      <Text style={styles.textStyle}>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onIncrease()}/>
      <Button title={`Decrease ${color}`} onPress={() => onDecrease()}/>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView:{
    marginVertical: 25,
  },
  textStyle:{
    textAlign: 'center',
    fontSize: 20,
  }
});

export default ColorCounter;
