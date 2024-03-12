import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { UserContext } from "../providers/UserProvider";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import api from "../../config/api";
import CartCard from "../components/CartCard";

const CheckoutScreen = ({ route }) => {
  const navigation = useNavigation();

  const { carts, subTotal, totalQuantity } = route.params;
  const { user } = useContext(UserContext);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [address, setAddress] = useState(user.profile.address);
  const [contact, setPhone] = useState(user.profile.contact_no);

  const [selectedPaymentOption, setPaymentSelectedOption] = useState(null);

  const [selectedShippingOption, setSelectedShippingOption] = useState("");
  const [shippingFee, setShippingFee] = useState(0);

  const totalPrice = subTotal + shippingFee;

  const handleShippingOptionSelect = (option) => {
    let shippingCost = "";
    if (option === "pickUp") {
      shippingCost = 0;
    } else if (option === "standardDelivery") {
      shippingCost = 39.0;
    } else if (option === "sameDayDelivery") {
      shippingCost = 150.0;
    }
    setSelectedShippingOption(option);
    setShippingFee(shippingCost);
  };
  const handlePaymentOptionSelect = (option) => {
    setPaymentSelectedOption(option);
  };

  // useEffect(() => {
  //   api
  //     .get(`usermanagement/getprofile/${user.id}`, {})
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((err) => {
  //       console.log(err.response);
  //     });
  // }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Checkout</Text>
          <View style={{ width: 24 }} />
        </View>

        {/* Contact and Address */}
        <View style={styles.contactAndAddressContainer}>
          <Text style={styles.textStyle}>Contact</Text>
          <TextInput
            label="Email"
            value={user.email}
            editable={false}
            mode="outlined"
            focused={true}
          />
          <Text style={styles.textStyle}>Address</Text>
          <TextInput
            label="Name"
            value={user.name}
            editable={false}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
          <TextInput
            label="Address"
            value={user.profile.address}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
          <TextInput
            label="Phone Number"
            value={contact}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />

          {/* Shipping Address */}
          <Text style={styles.textStyle}>Shipping Address</Text>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor:
                selectedShippingOption === "pickUp" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handleShippingOptionSelect("pickUp")}
          >
            <Text>Pick Up</Text>
            <Text>
              * Pick up the purchased product at the store at any time
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor:
                selectedShippingOption === "standardDelivery"
                  ? "#EDBF47"
                  : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handleShippingOptionSelect("standardDelivery")}
          >
            <Text>Standard Delivery</Text>
            <Text>* Estimated Delivery: 3-4 Days</Text>
            <Text>P39.00</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor:
                selectedShippingOption === "sameDayDelivery"
                  ? "#EDBF47"
                  : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handleShippingOptionSelect("sameDayDelivery")}
          >
            <Text>Same Day Delivery</Text>
            <Text>* Get the product delivered now!</Text>
            <Text>P150.00</Text>
          </TouchableOpacity>

          {/* Payment */}
          <Text style={styles.textStyle}>Payment</Text>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor:
                selectedPaymentOption === "GCash" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handlePaymentOptionSelect("GCash")}
          >
            <Text>GCash</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor:
                selectedPaymentOption === "COD" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => handlePaymentOptionSelect("COD")}
          >
            <Text>Cash on Delivery</Text>
          </TouchableOpacity>

          {/* CartCards */}
          <Text style={styles.orderSummaryTitle}>Order Summary</Text>
          {carts.map((item, index) => (
            <CartCard
              cart={item}
              key={index}
              subTotal={subTotal}
              totalQuantity={totalQuantity}
              showQuantityControls={false} //prop for removing button
            />
          ))}

          <View>
            <Text style={styles.textStyle}>Payment Details</Text>

            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                width: "100%",
                height: 100,
              }}
            >
              <Button
                style={{
                  borderRadius: 10,
                  borderColor: "#E79E4F",
                  borderWidth: 1,
                  backgroundColor: "#E79E4F",
                  width: 125,
                  height: 50,
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Icon name="cloud-upload" size={30} color="#FFFF" />
                <Text
                  style={{
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  UPLOAD FILE
                </Text>
              </Button>
            </View>
          </View>
          <View>
            <View style={styles.orderSummary}>
              <Text style={styles.orderSummaryTitle}>Order Summary</Text>
              <View style={styles.containerCheckout}>
                <Text style={styles.label}>Items:</Text>
                <Text style={styles.value}>{totalQuantity}</Text>
              </View>
              <View style={styles.containerCheckout}>
                <Text style={styles.label}>Sub Total:</Text>
                <Text style={styles.value}>₱ {subTotal}.00</Text>
              </View>
              <View style={styles.containerCheckout}>
                <Text style={styles.label}>Shipping Fee:</Text>
                <Text style={styles.value}>
                  {shippingFee === 0
                    ? "N/A (For Pick Up)"
                    : `₱ ${shippingFee}.00`}
                </Text>
              </View>
              <View style={styles.divider} />
              <View style={styles.containerCheckout}>
                <Text style={styles.label}>Total:</Text>
                <Text style={styles.value}>₱ {totalPrice}.00</Text>
              </View>

              <Button
                style={{ marginVertical: 16, borderRadius: 6 }}
                mode="contained"
                buttonColor="#E79E4F"
                onPress={() => {
                  Alert.alert(
                    "Order Successful",
                    "Your order has been placed successfully",
                    [
                      {
                        text: "OK",
                        onPress: () => navigation.goBack(),
                      },
                    ]
                  );
                }}
              >
                <Text
                  style={{
                    color: "white",
                    alignSelf: "center",
                  }}
                >
                  PAY NOW
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "white",
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
  title: {
    fontFamily: "LilitaOne-Regular",
    fontSize: 24,
    textAlign: "center",
  },
  textStyle: {
    fontFamily: "Rubik-Regular",
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 5,
  },
  containerCheckout: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  containerCheckout: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 5,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
  row: {},
  label: {
    flex: 1,
    textAlign: "left",
  },
  value: {
    flex: 1,
    textAlign: "right",
  },
  scrollView: {
    flexGrow: 1,
  },
  orderSummaryTitle: {
    fontFamily: "LilitaOne-Regular",
    flexDirection: "column",
  },
  orderSummary: {
    padding: 16,
  },
});
export default CheckoutScreen;
