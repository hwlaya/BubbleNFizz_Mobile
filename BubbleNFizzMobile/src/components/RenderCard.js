import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const RenderCard = ({
  productName,
  productPrice,
  productImage,
  productCategory,
}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("ProductScreen", {
      productName,
      productPrice,
      productImage,
      productCategory,
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        {/* Product Image */}
        <Image source={productImage} style={styles.productImage} />
        <View style={styles.textContainer}>
          {/* Product Name */}
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            {productName}
          </Text>

          {/* Product Category */}
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productCategory}
          >
            {productCategory}
          </Text>

          {/* Product Price */}
          <Text style={styles.productPrice}>₱{productPrice}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 8,
    padding: 16,
    margin: 10,
    width: 300,
    height: 350, // Set a fixed height
    justifyContent: "center", // Center contents horizontally
    alignItems: "center", // Center contents vertically
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 10,
    borderWidth: 12, // Keep the same border width
    borderColor: "#D7D1D1",
    padding: 10, // Add padding to create space between image and border
  },
  textContainer: {
    height: 110, // Set a fixed height for the text container
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  productName: {
    fontFamily: "Inconsolata-SemiBold",
    textAlign: "center",
  },
  productCategory: {
    marginBottom: 8, // Add vertical space
    fontFamily: "Inconsolata-Light",
  },
  productPrice: {
    color: "black",
    textDecorationLine: "underline", // Add underline
    fontFamily: "Inconsolata-Bold",
  },
});

export default RenderCard;
