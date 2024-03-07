import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const CircleButton = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.circle}>{children}</View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'blue', // Vous pouvez personnaliser la couleur
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CircleButton;
