// EmojiList.js
import React from 'react';
import { FlatList, Text } from 'react-native';

const EmojiList = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={(item) => item.toString()}
    />
  );
};

export default EmojiList;
