// stickerSmash.js
import React, { useState, useRef } from 'react';
import { View, Image, Text, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import { RNCamera } from 'react-native-camera';
import ImageCropPicker from 'react-native-image-crop-picker';
import EmojiPicker from './components/EmojiPicker';
import EmojiSticker from './components/EmojiSticker';
import { Adjust } from 'react-native-image-filter-kit';

const StickerSmash = () => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [selectedStickers, setSelectedStickers] = useState([]);
  const [croppedImage, setCroppedImage] = useState(null);
  const [brightness, setBrightness] = useState(1); 
  const [contrast, setContrast] = useState(1); 
  const imageRef = useRef(null);

  const handleSelectPhoto = () => {
    launchImageLibrary({}, (response) => {
      if (!response.didCancel && !response.error) {
        setSelectedPhoto(response.uri);
      }
    });
  };

  const handleAddSticker = (emoji) => {
    setSelectedStickers((prevStickers) => [
      ...prevStickers,
      { id: Date.now(), emoji, zIndex: selectedStickers.length + 1 },
    ]);
  };

  const handleCropImage = async () => {
    try {
      const image = await ImageCropPicker.openCropper({
        path: selectedPhoto,
        width: 300,
        height: 300,
      });

      if (image) {
        setSelectedStickers([]); // Réinitialiser les stickers lors du recadrage
        setCroppedImage(image.path);
      }
    } catch (error) {
      console.error('Erreur de recadrage de l\'image :', error);
    }
  };

  const handleAdjustImage = () => {
    if (imageRef.current) {
      imageRef.current.setImageAdjust({ brightness, contrast });
    }
  };

  const renderSticker = ({ item }) => (
    <EmojiSticker
      key={item.id}
      emoji={item.emoji}
      zIndex={item.zIndex}
    />
  );

  return (
    <View style={styles.container}>
      {selectedPhoto ? (
        <View>
          <Adjust
            ref={imageRef}
            amount={{ brightness, contrast }}
            onAdjustedImageSource={(source) => console.log('Image ajustée', source)}
          >
            <Image source={{ uri: croppedImage || selectedPhoto }} style={styles.image} />
            <FlatList
              data={selectedStickers}
              renderItem={renderSticker}
              keyExtractor={(item) => item.id.toString()}
              horizontal
            />
          </Adjust>
          <EmojiPicker onSelectEmoji={handleAddSticker} emojiData={['😊', '❤️', '🌟']} />
          <TouchableOpacity onPress={handleCropImage} style={styles.button}>
            <Text>Recadrer la photo</Text>
          </TouchableOpacity>
          <View style={styles.adjustmentButtons}>
            <TouchableOpacity onPress={() => setBrightness(brightness + 0.1)} style={styles.button}>
              <Text>Augmenter luminosité</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setBrightness(brightness - 0.1)} style={styles.button}>
              <Text>Diminuer luminosité</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setContrast(contrast + 0.1)} style={styles.button}>
              <Text>Augmenter contraste</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setContrast(contrast - 0.1)} style={styles.button}>
              <Text>Diminuer contraste</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleAdjustImage} style={styles.button}>
              <Text>Appliquer ajustements</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={() => console.log('Sauvegarde de la photo modifiée')} style={styles.button}>
            <Text>Enregistrer</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={handleSelectPhoto} style={styles.button}>
          <Text>Sélectionner une photo</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 300,
    height: 300,
  },
  button: {
    marginTop: 10,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  adjustmentButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default StickerSmash;
