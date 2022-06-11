import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (<View>
        <Text>ImageScreen</Text>
        <ImageDetail title={'Forest'} imageSource={require('../../assets/images/forest.jpg')}/>
        <ImageDetail title={'Beach'} imageSource={require('../../assets/images/beach.jpg')}/>
        <ImageDetail title={'Mountain'} imageSource={require('../../assets/images/mountain.jpg')}/>
    </View>)
}

const styles = StyleSheet.create({})

export default ImageScreen;