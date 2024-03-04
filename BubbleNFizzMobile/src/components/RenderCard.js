import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../config/api";
import { Rating } from "react-native-ratings";

const RenderCard = ({ item }) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("ProductScreen", {
      // productName,
      // productPrice,
      // productImage,
      // productScentName,
      // productRating,
      productName: item.product_name,
      productPrice: item.product_price,
      productScent: item.product_scent_name,
      productRating: item.product_rating,
      productDescription: item.product_description,
    });
  };

  return (
    <TouchableOpacity onPress={handleCardPress}>
      <View style={styles.card}>
        {/* Product Image */}
        <Image
          source={require("../assets/images/product1.jpg")}
          style={styles.productImage}
        />
        <View style={styles.textContainer}>
          {/* Product Name */}
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productName}
          >
            {item.product_name}
          </Text>

          {/* Product ScentName */}
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productScentName}
          >
            {item.product_scent_name}
          </Text>

          {/* Product Price */}
          <Text style={styles.productPrice}>₱{item.product_price}</Text>
          <Rating
            type="star"
            startingValue={item.product_rating}
            imageSize={20}
            readonly
            precision={0.1}
          />
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
