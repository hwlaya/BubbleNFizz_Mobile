import React, { useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const CheckOutCard = ({ cart, isCart = true }) => {
  return (
    // <View style={styles.container}>
    //   <View style={styles.imageContainer}>
    //     <Image
    //       source={{ uri: "https://picsum.photos/500/300" }}
    //       style={styles.image}
    //     />
    //   </View>
    //   <View style={styles.textContainer}>
    //     <Text style={[styles.text]}>
    //       {cart.product.product_name} ({cart.product.product_scent_name})
    //     </Text>
    //   </View>
    //   <View style={styles.priceContainer}>
    //     <Text style={[styles.price]}>
    //       ₱{isCart ? cart.cart_price : cart.order_price}
    //     </Text>
    //   </View>
    // </View>

    <View style={styles.container}>
      <Image
        source={{
          uri: decodeURI(
            `https://bubblenfizz-store.com/BubbleNFizz-main/public/image/products/${cart.product.product_images}`
          ),
        }}
        style={styles.image}
      />
      <Text numberOfLines={4} style={styles.productName}>
        {cart.product.product_name} ({cart.product.product_scent_name})
      </Text>
      <Text style={styles.price}>
        ₱{isCart ? cart.cart_price : cart.order_price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    margin: 8,
    width: "95%", // Adjust the width as needed
    borderWidth: 1.5,
    borderColor: "gray",
    borderRadius: 10,
  },
  productName: {
    fontFamily: "Inconsolata-SemiBold",
    textAlign: "left",
    paddingLeft: 10,
    marginBottom: "auto", // Add vertical space
    fontSize: 14,
    width: 260, // Set a fixed width for the product name
  },
  image: {
    height: 100,
    width: 100,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  text: {
    fontSize: 16,
  },
  priceContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  price: {
    position: "absolute",
    bottom: 3,
    right: 5,
  },
});

export default CheckOutCard;
