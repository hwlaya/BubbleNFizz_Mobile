import React, { useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { Button } from "react-native-paper";

const Slider = ({ images }) => {
  const handleImageClick = (index) => {
    console.log("Clicked on image", index);
  };

  return (
    <View style={styles.container}>
      <ScrollView horizontal={true}>
        {images.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={image} style={styles.image} />
            <Button
              onPress={() => handleImageClick(index)}
              style={styles.button}
              mode="contained"
              buttonColor="#E79E4F"
            >
              BUY NOW
            </Button>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 250,
    height: 250,
    marginHorizontal: 10,
  },
  button: {
    position: "absolute",
    bottom: 10,
    width: 150,
    borderRadius: 8,
  },
});

export default Slider;