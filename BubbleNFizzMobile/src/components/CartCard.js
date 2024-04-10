import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import api from "../../config/api";
import { AntDesign, Ionicons } from "@expo/vector-icons";
const CartCard = ({
  cart,
  carts,
  setSubTotal,
  setTotalQuantity,
  subTotal,
  totalQuantity,
  showQuantityControls,
  refresher,
  setRefresher,
}) => {
  const [quantity, setQuantity] = useState(cart.cart_quantity);
  const [totalPrice, setTotalPrice] = useState(cart.cart_price);
  console.log("Cart:", cart.cart_quantity);

  const subQuantity = () => {
    if (Number(quantity) === 1) {
      Alert.alert(
        "Remove Item?",
        "Are you sure you want to remove this item?",
        [
          { text: "No", onPress: () => console.log("No Pressed") },
          {
            text: "Yes",
            onPress: () => {
              api
                .post("shopping/deletecartitem", {
                  id: cart.id,
                })
                .then((response) => {
                  Alert.alert("Item Removed!", "Item has been removed!", [
                    {
                      text: "OK",
                      onPress: () => console.log("OK Pressed", response.data),
                    },
                  ]);
                  setRefresher(refresher + 1);
                })
                .catch((error) => {
                  setIsLoading(false);
                  console.log(error);
                });
            },
          },
        ]
      );
    } else {
      api
        .post("shopping/subquantity", {
          id: cart.id,
          cart_quantity: Number(quantity) - 1,
          cart_price: Number(totalPrice) - Number(cart.product.product_price),
        })
        .then(() => {
          setQuantity(Number(quantity) - 1);
          setTotalQuantity(Number(totalQuantity) - 1);
          setTotalPrice(
            Number(totalPrice) - Number(cart.product.product_price)
          );
          setSubTotal(Number(subTotal) - Number(cart.product.product_price));
          // Update the carts state with the updatedCarts array
          setCarts((prevCarts) => prevCarts.filter((c) => c.id !== cart.id));
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const addQuantity = () => {
    api
      .post("shopping/addquantity", {
        id: cart.id,
        cart_quantity: Number(quantity) + 1,
        cart_price: Number(totalPrice) + Number(cart.product.product_price),
      })
      .then((response) => {
        setQuantity(Number(quantity) + 1);
        setTotalQuantity(Number(totalQuantity) + 1);
        setTotalPrice(Number(totalPrice) + Number(cart.product.product_price));
        setSubTotal(Number(subTotal) + Number(cart.product.product_price));
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <View
      style={{ backgroundColor: "#EBEBEB", padding: 10, marginVertical: 6 }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          source={{
            uri: `https://bubblenfizz-store.com/BubbleNFizz-main/public/image/products/${cart.product.product_images}`,
          }}
          style={{ height: 100, width: 100 }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 14, fontFamily: "Inconsolata-Regular" }}>
            {cart.product.product_name}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: "LilitaOne-Regular",
              marginTop: 15,
            }}
          >
            ₱{cart.product.product_price}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={subQuantity}>
            {showQuantityControls && (
              <AntDesign name="minuscircle" size={20} color="black" />
            )}
          </TouchableOpacity>

          <Text style={{ padding: 5, marginHorizontal: 5 }}>{quantity}</Text>

          <TouchableOpacity onPress={addQuantity}>
            {showQuantityControls && (
              <AntDesign name="pluscircle" size={20} color="black" />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          borderBottomColor: "black",
          borderBottomWidth: 0.5,
          marginVertical: 4,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          fontFamily: "LilitaOne-Regular",
          textAlign: "right",
        }}
      >
        ₱{totalPrice}
      </Text>
    </View>
  );
};

export default CartCard;
