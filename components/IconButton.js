// IconButton.js
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const IconButton = ({ onPress, icon, label }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text>{icon}</Text>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default IconButton;
