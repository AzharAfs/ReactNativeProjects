import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [pass, setPass] = useState("");
  return (
    <View>
      <Text>Enter your name </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      {name.length>=1 && <Text>My name is {name}</Text>}
      <Text>Enter Password : </Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={pass}
        onChangeText={(newValue) => setPass(newValue)}
      />
      {pass && pass.length <= 5 ? (
        <Text>Password should be greater then 5 characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    margin: 15,
    borderColor: "black",
    height: 20,
  },
});

export default TextScreen;
