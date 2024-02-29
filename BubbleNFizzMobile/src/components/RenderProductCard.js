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
import { useNavigation } from "@react-navigation/native";

const windowWidth = Dimensions.get("window").width;

const RenderProductsCard = ({
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

  const data = [
    { productName, productPrice, productImage, productCategory },
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
          <Text style={styles.productName}>{item.productName}</Text>
          {/* <Text style={styles.productCategory}>{item.productCategory}</Text> */}
          <Text style={styles.productCategory}>Category</Text>
          <Text style={styles.productPrice}>${item.productPrice}</Text>
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
  productCategory: {
    fontSize: 10,
    marginBottom: 4,
    fontFamily: "Inconsolata-Light",
    textAlign: "center",
  },
  productPrice: {
    fontFamily: "Inconsolata-Bold",
    fontSize: 14,
    textDecorationLine: "underline",
  },
});

export default RenderProductsCard;
