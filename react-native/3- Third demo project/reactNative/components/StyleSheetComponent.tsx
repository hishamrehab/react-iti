import React from "react";
import {
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function StyleSheetComponent() {
  return (
    <View
      style={
        combinedStyles
      }
    >
      <Text>
        StyleSheetComponent
      </Text>
    </View>
  );
}

const styles =
  StyleSheet.create(
    {},
  );

const isActive = true;

const baseStyle =
  StyleSheet.create(
    {
      container:
        {
          flex: 1,
          borderColor:
            "#fff",
          borderWidth: 1,
        },
    },
  );

const ActiveStyles =
  StyleSheet.create(
    {
      container:
        {
          backgroundColor:
            "green",
        },
    },
  );

const unActiveStyle =
  StyleSheet.create(
    {
      container:
        {
          backgroundColor:
            "red",
        },
    },
  );

const combinedStyles =
  StyleSheet.compose(
    baseStyle.container,
    isActive
      ? ActiveStyles.container
      : unActiveStyle.container,
  );
