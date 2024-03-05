import React, { useState } from "react";
import { View, Text, Image, Button } from "react-native";
import api from "../../config/api";

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
      style={{ backgroundColor: "#D3D3D3", padding: 10, marginVertical: 6 }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={{ uri: `https://picsum.photos/100/100` }}
          style={{ height: 100, width: 100 }}
        />
        <View style={{ flex: 1, marginLeft: 10 }}>
          <Text style={{ fontSize: 16 }}>{cart.product.product_name}</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>
            ₱{cart.product.product_price}
          </Text>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Button title="-" onPress={subQuantity} />
          <Text style={{ fontSize: 16, marginHorizontal: 10 }}>{quantity}</Text>
          <Button title="+" onPress={addQuantity} />
        </View>
        <Text style={{ fontSize: 16, fontWeight: "bold" }}>₱{totalPrice}</Text>
      </View>
    </View>
  );
};

export default CartCard;
