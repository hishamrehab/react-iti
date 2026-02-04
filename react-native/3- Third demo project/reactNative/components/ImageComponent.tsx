import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import image from "../assets/images/android-icon-background.png"

export default function ImageComponent() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isError, setIsError] = useState(false);

  return (
    <View >
     <Image  source={image}/>
     <Image 
      source={{
        uri: "https://picsum.photos/200/300"
     }}
     defaultSource={image}
      style={{width: 200, height: 300}}
      resizeMode='center'
    //   resizeMode='cover'
    //   resizeMode='contain'
    blurRadius={3}
    defaultSource={require("../assets/images/android-icon-background.png")}
     onLoadStart={() => setIsLoaded(false)}
     onLoad={() => setIsLoaded(true)}
     onError={() => setIsError(false)}
     accessibilityLabel='image'
   />   
   <Text>
    {isLoaded && "Image unloaded"}
   </Text>

    <Text>
    {isError && "Error loading image"}
   </Text>

    </View>
  )
}

const styles = StyleSheet.create({})