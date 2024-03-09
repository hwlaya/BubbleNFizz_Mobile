import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CartCard from "../components/CartCard";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const CartScreen = () => {
  const user = useContext(UserContext);
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const navigation = useNavigation();

  const updateTotalQuantity = (newQuantity) => {
    setTotalQuantity(newQuantity);
  };

  //Update Number of Items
  useEffect(() => {
    let tempQuantity = 0;
    carts.forEach((item) => {
      tempQuantity += Number(item.cart_quantity);
    });
    updateTotalQuantity(tempQuantity);
  }, [carts]);

  //Update Subtotal
  useEffect(() => {
    let tempSubTotal = 0;
    carts.forEach((item) => {
      tempSubTotal += Number(item.cart_price) * Number(item.cart_quantity);
    });
    setSubTotal(tempSubTotal);
  }, [carts]);

  //API Call
  useEffect(() => {
    api
      .get(`shopping/getusercart?user_id=${user.user.id}`)
      .then((response) => {
        setCarts(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    // fetch(`shopping/getusercart?user_id=${user.user.id}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const cartItems = data;
    //     let tempTotal = 0;
    //     let tempQuantity = 0;
    //     cartItems.forEach((item) => {
    //       tempTotal += Number(item.cart_price);
    //       tempQuantity += Number(item.cart_quantity);
    //     });
    //     setSubTotal(tempTotal);
    //     setTotalQuantity(tempQuantity);
    //     setCarts(cartItems);
    //   })
    //   .catch((error) => {
    //     console.error(error.response);
    //   });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.cartTitle}>My Cart</Text>
        {carts.map((item, index) => {
          // console.log("ito yung items mo", item);
          return (
            <CartCard
              cart={item}
              key={index}
              subTotal={subTotal}
              setSubTotal={setSubTotal}
              setTotalQuantity={setTotalQuantity}
              totalQuantity={totalQuantity}
              setTotalPrice={setTotalPrice}
            />
          );
        })}
        <View style={styles.orderSummary}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Items:</Text>
              <Text style={styles.value}>{totalQuantity}</Text>
            </View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Sub Total:</Text>
              <Text style={styles.value}>Php {subTotal}.00</Text>
            </View>
            <View style={styles.divider} />
          </View>
          <Button
            style={{ marginVertical: 16, borderRadius: 6 }}
            mode="contained"
            buttonColor="#E79E4F"
            onPress={() =>
              navigation.navigate("CheckoutScreen", {
                carts: carts,
                subTotal: subTotal,
              })
            } //console.log("Pressed")}
          >
            Checkout
          </Button>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    padding: 6,
  },
  containerCheckout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  label: {},
  value: {},
  scrollView: {
    flexGrow: 1,
  },
  cartTitle: {
    fontFamily: "LilitaOne-Regular",
    fontSize: 30,
    textAlign: "center",
  },
  orderSummaryTitle: {
    fontFamily: "LilitaOne-Regular",
  },
  orderSummary: {
    padding: 16,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 1,
  },
});

export default CartScreen;
