import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../config/api";
import { Rating } from "react-native-ratings";

const RenderCard = ({ title, scentName, rating, price, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
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
            {title}
          </Text>

          {/* Product ScentName */}
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={styles.productScentName}
          >
            {scentName}
          </Text>

          {/* Product Price */}
          <Text style={styles.productPrice}>₱{price}</Text>
          <Rating
            type="star"
            value={Number(rating)}
            imageSize={14}
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
  productScentName: {
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
