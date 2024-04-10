import React, { useContext, useEffect, useState } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import CartCard from "../components/CartCard";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

const CartScreen = () => {
  const user = useContext(UserContext);
  const [carts, setCarts] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [refresher, setRefresher] = useState(0);
  const navigation = useNavigation();

  // API to get cart of user
  useEffect(() => {
    api
      .get(`shopping/getusercart?user_id=${user.user.id}`)
      .then((response) => {
        // handles math logic
        console.log("Laman ng Carts", response.data);
        const carts = response.data;
        console.log("carts", carts);
        let tempTotal = 0;
        let tempQuantity = 0;
        carts.map((item) => {
          tempTotal += Number(item.cart_price);
          tempQuantity += Number(item.cart_quantity);
        });
        setSubTotal(tempTotal);
        setTotalQuantity(tempQuantity);
        setCarts(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    const unsubscribe = navigation.addListener("focus", () => {
      api
        .get(`shopping/getusercart?user_id=${user.user.id}`)
        .then((response) => {
          // handles math logic
          console.log("Laman ng Carts", response.data);
          const carts = response.data;
          console.log("carts", carts);
          let tempTotal = 0;
          let tempQuantity = 0;
          carts.map((item) => {
            tempTotal += Number(item.cart_price);
            tempQuantity += Number(item.cart_quantity);
          });
          setSubTotal(tempTotal);
          setTotalQuantity(tempQuantity);
          setCarts(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    });

    return unsubscribe;
  }, [refresher, navigation]);

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
        {carts.length > 0 ? (
          carts.map((item, index) => {
            console.log("ito yung items mo", item);
            return (
              // Same with render card just  different design
              <CartCard
                cart={item}
                key={index}
                setSubTotal={setSubTotal}
                setTotalQuantity={setTotalQuantity}
                totalQuantity={totalQuantity}
                subTotal={subTotal}
                showQuantityControls={true}
                refresher={refresher}
                setRefresher={setRefresher}
              />
            );
          })
        ) : (
          // if no item in cart this displays
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontFamily: "LexendExa-ExtraLight",
            }}
          >
            No items are in your cart right now
          </Text>
        )}
        <View style={styles.orderSummary}>
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          <View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Items:</Text>
              <Text style={styles.value}>{totalQuantity}</Text>
            </View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Sub Total:</Text>
              <Text style={styles.value}>₱ {subTotal}</Text>
            </View>
            <View style={styles.divider} />
          </View>
          <Button
            style={{ marginVertical: 16, borderRadius: 6 }}
            mode="contained"
            buttonColor="#E79E4F"
            onPress={() => navigation.navigate("CheckoutScreen")} //console.log("Pressed")}
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
