import React, { useState } from "react";
import { ScrollView, View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CheckoutScreen = () => {
  const navigation = useNavigation();

  const [selectedShippingOption, setShippingSelectedOption] = useState(null);
  const [selectedPaymentOption, setPaymentSelectedOption] = useState(null);

  const handleShippingOptionSelect = (option) => {
    setShippingSelectedOption(option);
  };

  const handlePaymentOptionSelect = (option) => {
    setPaymentSelectedOption(option);
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Checkout</Text>
        <View style={{ width: 24 }} />
      </View>
      <View style={{ height: 1000 }}>
        <Text style={styles.textStyle}>Contact</Text>
        <TextInput
          style={{
            height: 35,
            width: "100%",
          }}
          // outlineStyle={{ borderRadius: 10 }}
          label="Email"
          // value={fname}
          // onChangeText={(value) => setFname(value)}
          mode="outlined"
          focused={true}
        />
        <Text style={styles.textStyle}>Address</Text>
        <TextInput
          style={{
            height: 35,
            width: "100%",
          }}
          // outlineStyle={{ borderRadius: 10 }}
          label="Name"
          // value={fname}
          // onChangeText={(value) => setFname(value)}
          mode="outlined"
          focused={true}
        />
        <TextInput
          style={{
            height: 35,
            width: "100%",
          }}
          // outlineStyle={{ borderRadius: 10 }}
          label="Address"
          // value={fname}
          // onChangeText={(value) => setFname(value)}
          mode="outlined"
          focused={true}
        />
        <TextInput
          style={{
            height: 35,
            width: "100%",
          }}
          // outlineStyle={{ borderRadius: 10 }}
          label="Phone Number"
          // value={fname}
          // onChangeText={(value) => setFname(value)}
          mode="outlined"
          focused={true}
        />
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
          <Text>* Pick up the purchased product at the store at any time</Text>
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
          <Text>* Estimated Delivery: Mar 09 - Mar 12 P39.00</Text>
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
          <Text>
            * Pick up the purchased product at the store at any time P150.00
          </Text>
        </TouchableOpacity>
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
            borderColor: selectedPaymentOption === "COD" ? "#EDBF47" : "black",
            padding: 10,
            marginBottom: 10,
          }}
          onPress={() => handlePaymentOptionSelect("COD")}
        >
          <Text>Cash on Delivery</Text>
        </TouchableOpacity>
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
                borderColor: "#EDBF47",
                borderWidth: 2,
                backgroundColor: "#EDBF47",
                width: 125,
                height: 50,
                padding: -20,
              }}
            >
              <Icon name="cloud-upload" size={30} color="#FFFF" />
              <Text
                style={{
                  color: "white",

                  alignSelf: "center",
                }}
              >
                UPLOAD FILE
              </Text>
            </Button>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "flex-end",
            margin: 10,
          }}
        >
          <Button
            style={{
              borderRadius: 10,
              borderColor: "#EDBF47",
              borderWidth: 2,
              backgroundColor: "#EDBF47",
              width: 125,
              height: 50,
              padding: -20,
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
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
    fontFamily: "PaytoneOne-Regular",
    fontSize: 24,
  },
  textStyle: {
    fontFamily: "Rubik-Regular",
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default CheckoutScreen;
