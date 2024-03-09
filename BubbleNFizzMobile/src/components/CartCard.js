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
  setSubTotal,
  setTotalQuantity,
  subTotal,
  totalQuantity,
}) => {
  const [quantity, setQuantity] = useState(cart.cart_quantity);
  const [totalPrice, setTotalPrice] = useState(cart.cart_price);

  const subQuantity = () => {
    if (Number(quantity) === 1) {
      Alert.alert("Oops...", "Quantity should not be lower than 1", [
        { text: "OK" },
      ]);
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
          source={{ uri: `https://picsum.photos/100/100` }}
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
            <AntDesign name="minuscircle" size={20} color="black" />
          </TouchableOpacity>

          <Text
            style={{
              padding: 5,
              marginHorizontal: 5,
            }}
          >
            {quantity}
          </Text>

          <TouchableOpacity onPress={addQuantity}>
            <AntDesign name="pluscircle" size={20} color="black" />
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
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "LilitaOne-Regular",
            textAlign: "right",
            color: "gray",
          }}
        >
          Remove
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartCard;
