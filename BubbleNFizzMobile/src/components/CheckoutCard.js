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

    <View>
      <Image
        source={{ uri: "https://picsum.photos/500/300" }}
        style={styles.image}
      />
      <Text>
        {cart.product.product_name} ({cart.product.product_scent_name})
      </Text>

      <Text style={[styles.price]}>
        ₱{isCart ? cart.cart_price : cart.order_price}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginVertical: 6,
  },
  imageContainer: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  image: {
    height: 100,
    width: 100,
  },
  textContainer: {
    flex: 6,
    justifyContent: "space-between",
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
    fontSize: 16,
  },
});

export default CheckOutCard;
