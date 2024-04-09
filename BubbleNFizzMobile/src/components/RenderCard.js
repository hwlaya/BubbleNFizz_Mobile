import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import api from "../../config/api";
import { Rating } from "react-native-ratings";

const RenderCard = ({
  title,
  scentName,
  rating,
  price,
  onPress,
  sales,
  image,
}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.card}>
        {/* Product Image */}
        <Image
          source={{
            uri: `https://bubblenfizz-store.com/BubbleNFizz-main/public/image/products/${image}`,
          }}
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

          {/* Product Sales */}
          <Text style={styles.productSales}>Sold: {sales} </Text>

          {/* Product Rating */}
          <Rating
            type="star"
            value={Number(rating)}
            imageSize={14}
            readonly
            precision={0.1}
          />

          {/* Product Price */}
          <Text style={[styles.productPrice, { paddingTop: 16 }]}>
            ₱{price}
          </Text>
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
    height: 450, // Set a fixed height
    justifyContent: "center", // Center contents horizontally
    alignItems: "center", // Center contents vertically
    // borderWidth: 1, // Keep the same border width
  },
  productImage: {
    width: 250,
    height: 250,
    marginBottom: 6,
    borderWidth: 4, // Keep the same border width
    borderColor: "#D7D1D1",
    padding: 12, // Add padding to create space between image and border
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
    marginBottom: 8, // Add vertical space
    fontSize: 16,
  },
  productScentName: {
    fontFamily: "Inconsolata-Regular",
    fontSize: 16,
  },
  productPrice: {
    color: "black",
    textDecorationLine: "underline", // Add underline
    fontFamily: "Inconsolata-Bold",
    fontSize: 16,
  },
  productSales: {
    color: "black",
    fontFamily: "Inconsolata-Light",
    fontSize: 12,
  },
});

export default RenderCard;
