// EmojiPicker.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import EmojiList from './EmojiList';

const EmojiPicker = ({ onSelectEmoji, emojiData }) => {
  return (
    <View style={styles.container}>
      <EmojiList data={emojiData} onSelectEmoji={onSelectEmoji} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Ajoutez des styles selon vos besoins
  },
});

export default EmojiPicker;
