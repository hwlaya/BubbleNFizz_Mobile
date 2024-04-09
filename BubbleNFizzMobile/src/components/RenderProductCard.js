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
  title,
  scentName,
  rating,
  price,
  onPress,
  sales,
  image,
}) => {
  const navigation = useNavigation();

  const data = [
    {
      productName: title,
      productScentName: scentName,
      productRating: rating,
      productPrice: price,
    },
  ];

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={[styles.card, { width: windowWidth / 2 - 20 }]}>
          <Image
            source={{
              uri: `https://bubblenfizz-store.com/BubbleNFizz-main/public/image/products/${image}`,
            }}
            style={styles.productImage}
          />
          <Text numberOfLines={2} style={styles.productName}>
            {item.productName}
          </Text>

          <Text style={styles.productScentName}>{item.productScentName}</Text>
          <Text style={styles.productPrice}>₱{item.productPrice}</Text>
          <Rating
            type="star"
            startingValue={item.productRating}
            imageSize={12}
            readonly
            precision={0.1}
            style={{ alignItems: "flex-end" }}
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
