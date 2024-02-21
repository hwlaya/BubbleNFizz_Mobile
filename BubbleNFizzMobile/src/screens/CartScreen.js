import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  // Static item data
  const cartItems = [
    {
      id: 1,
      name: "BNF Handcrafted Oatmeal Soap 120g",
      price: 10,
      quantity: 2,
      image: require("../assets/images/product1.jpg"),
    },
    {
      id: 2,
      name: "BNF Handcrafted Oh Papaya Soap 120g",
      price: 20,
      quantity: 1,
      image: require("../assets/images/product2.jpg"),
    },
    {
      id: 3,
      name: "BNF Handcrafted Rosewood Soap 120g",
      price: 30,
      quantity: 3,
      image: require("../assets/images/product3.jpg"),
    },
  ];
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text>{item.name}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity style={styles.quantityButton}>
            <FontAwesome name="minus" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.quantityText}>{item.quantity}</Text>
          <TouchableOpacity style={styles.quantityButton}>
            <FontAwesome name="plus" size={20} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.priceText}>${item.price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Your Cart</Text>
        <View style={{ width: 24 }} />
      </View>
      <FlatList
        data={cartItems}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.subtotalContainer}>
        <View
          style={[
            {
              flexDirection: "row",
              justifyContent: "space-between",
              width: 300,
            },
          ]}
        >
          <Text style={styles.subtotalText}>Subtotal: </Text>
          <Text style={styles.subtotalText}>$60</Text>
        </View>
        <TouchableOpacity style={styles.checkoutButton}>
          <Button labelStyle={{ color: "white" }}>Checkout</Button>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
    justifyContent: "space-between",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  quantityButton: {
    borderWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  quantityText: {
    marginHorizontal: 10,
  },
  priceText: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: "white", // Set the background color to white
    height: 80, // Set the height to 30
    paddingHorizontal: 10, // Add padding for better visibility
  },
  subtotalContainer: {
    borderTopWidth: 1,
    borderTopColor: "black",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  subtotalText: {
    fontWeight: "bold",
  },
  checkoutButton: {
    padding: 5,
    borderRadius: 0,
    backgroundColor: "#E79E4F",
    width: 250,
  },
  checkoutButtonText: {
    color: "white",
    textAlign: "center",
  },
  title: {
    fontFamily: "PaytoneOne-Regular",
    fontSize: 24,
  },
});

export default CartScreen;
