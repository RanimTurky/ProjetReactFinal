// ImageViewer.js
import React from 'react';
import { Image } from 'react-native';

const ImageViewer = ({ imageUrl }) => {
  return <Image source={{ uri: imageUrl }} style={{ width: 200, height: 200 }} />;
};

export default ImageViewer;
