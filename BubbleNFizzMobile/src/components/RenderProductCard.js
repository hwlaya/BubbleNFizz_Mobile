import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-ratings";

const windowWidth = Dimensions.get("window").width;

const RenderProductCard = ({
  productName,
  productPrice,
  productImage,
  productCategory,
  productDescription,
  productRating,
  productScentName,
  productStock,
  productId,
}) => {
  const navigation = useNavigation();

  const handleCardPress = () => {
    navigation.navigate("ProductScreen", {
      productName,
      productPrice,
      productImage,
      productCategory,
      productDescription,
      productRating,
      productScentName,
      productStock,
      productId,
    });
  };

  const data = [
    {
      productName,
      productPrice,
      productImage,
      productCategory,
      productDescription,
      productRating,
      productScentName,
      productStock,
      productId,
    },
    // Add more data objects if needed
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={handleCardPress}>
        <View style={[styles.card, { width: windowWidth / 2 - 20 }]}>
          {/* <Image source={item.productImage} style={styles.productImage} />   */}
          <Image
            source={require("../assets/images/bestseller1.jpg")}
            style={styles.productImage}
          />
          <Text numberOfLines={2} style={styles.productName}>
            {item.productName}
          </Text>

          <Text style={styles.productScentName}>{item.productScentName}</Text>
          <Text style={styles.productPrice}>${item.productPrice}</Text>
          <Rating
            type="star"
            startingValue={item.productRating}
            imageSize={20}
            readonly
            precision={0.1}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      numColumns={2} // Set the number of columns to 2
      contentContainerStyle={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  card: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    margin: 3,
    textAlign: "center",
    backgroundColor: "#fff",
    padding: 10,
  },
  productImage: {
    width: "100%",
    height: 180,
  },
  productName: {
    fontSize: 12,
    marginBottom: 4,
    fontFamily: "Inconsolata-SemiBold",
  },
  productScentName: {
    fontSize: 10,
    marginBottom: 4,
    fontFamily: "Inconsolata-Light",
  },
  productPrice: {
    fontFamily: "Inconsolata-Bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default RenderProductCard;
