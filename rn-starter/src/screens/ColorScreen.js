import React, { useState } from "react";
import { View, StyleSheet, Text, Button, FlatList, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View>
      <Text>ColorScreen</Text>
      <Button
        title="Add a color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />

      <FlatList
        data={colors}
        keyExtractor={(color) => color}
        renderItem={({ item }) => (
          <View
            style={{ height: 100, width: windowWidth, backgroundColor: item }}
          ></View>
        )}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
