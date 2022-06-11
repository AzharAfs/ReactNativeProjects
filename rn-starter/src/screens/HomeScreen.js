import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button title="Go to Components"
        onPress={() => props.navigation.navigate('Components')}
      />
      <TouchableOpacity onPress={() => props.navigation.navigate('List')}>
        <Text style={{textAlign:'center', fontSize:20}}>Go to List</Text>
      </TouchableOpacity>
      <Button title="Go to Images"
        onPress={() => props.navigation.navigate('Images')}
      />
      <Button title="Go to Counter"
        onPress={() => props.navigation.navigate('Counter')}
      />
      <Button title="Go to Color"
        onPress={() => props.navigation.navigate('Color')}
      />
      <Button title="Go to Square screen"
        onPress={() => props.navigation.navigate('Square')}
      />
       <Button title="Go to Text screen"
        onPress={() => props.navigation.navigate('TextScreen')}
      />
      <Button title="Go to Box screen"
        onPress={() => props.navigation.navigate('Box')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
