import React from 'react';
import{View, Text, Image, StyleSheet} from 'react-native'

const ImageDetail = ({title, image, score}) => {
    return (
        <View>
            <Image source={image}/>
        <Text>
            show image of {title}
        </Text>
        <Text>
            Image score - {score}
        </Text>
        </View>
        
    )
}

export default ImageDetail
const styles = StyleSheet.create({

})