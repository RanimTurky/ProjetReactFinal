// PhotoGrid.js
import React from 'react';
import { FlatList, Image } from 'react-native';

const PhotoGrid = ({ data }) => {
  return (
    <FlatList
      data={data}
      renderItem={({ item }) => <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />}
      keyExtractor={(item) => item.toString()}
      numColumns={3} // Ajustez en fonction de vos besoins
    />
  );
};

export default PhotoGrid;
