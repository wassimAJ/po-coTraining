import React from 'react';
import{View, Text, Image, StyleSheet} from 'react-native'
import ImageDetail from '../components/ImageDetail';


const ImageScreen = () => {
    return (
        <>
        <ImageDetail title="Forest" image={require('../../assets/forest.jpg')} score="9" />
        <ImageDetail title="Beach" image={require('../../assets/beach.jpg')} score="7"/>
        <ImageDetail title="Mountain" image={require('../../assets/mountain.jpg')} score="4"/>
        </>
        
    )
}

export default ImageScreen
const styles = StyleSheet.create({

})