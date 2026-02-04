
import { Button, StyleSheet } from 'react-native';

import { View } from 'react-native-reanimated/lib/typescript/Animated';
import { useState } from 'react';

export default function HomeScreen() {
  const [layout , setLayout] = useState({});

  const layoutHandler =  (e) => {
  const {layout} = e.nativeEvent;
  setLayout(layout);
  }

   

  return (
  <View 
    style={styles.container} 
    onLayout={layoutHandler}
    pointerEvents="none"
    accessible={true}
    accessibilityLabel="example"
    >
    <Button title='click me !'/>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
