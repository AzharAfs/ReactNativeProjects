import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {

    const friends = [
        { name: 'Friend 1' },
        { name: 'Friend 2' },
        { name: 'Friend 3' },
        { name: 'Friend 4' },
        { name: 'Friend 5' },
        { name: 'Friend 6' },
        { name: 'Friend 7' },
        { name: 'Friend 8' },
        { name: 'Friend 9' },
    ]
    return (
        <View>
            <FlatList
                data={friends}
                renderItem={({item}) => <Text style={styles.textStyle}>{item.name}</Text>}
                keyExtractor={(friend) => friend.name}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 30,
        marginVertical: 50,
    },
});

export default ListScreen;
