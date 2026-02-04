import React from "react";
import {
  StyleSheet,
  TextInput,
  View,
} from "react-native";

export default function TextInputComponent() {
  return (
    <View>
      <TextInput
        secureTextEntry
        keyboardType="numeric"
        value="text"
        placeholder="type here...."
        placeholderTextColor="white"
        defaultValue="text"
        numberOfLines={2}
        style={{
          backgroundColor:  "red",
          width: 300,
          borderRadius: 4,
          fontSize: 20,
          padding: 4,
          height: 100
        }}
        onChangeText={(value) =>  console.log( value )}
        onBlur={() => console.log("blur")}
        onFocus={() => console.log("focused")}
        maxLength={4}
        multiline={true}
        autoCapitalize="characters"
        onContentSizeChange={(e) => console.log(e.nativeEvent.contentSize)}
        // editable={false}
        // autoCapitalize="none" 
        />
    </View>
  );
}

const styles =
  StyleSheet.create(
    {},
  );
