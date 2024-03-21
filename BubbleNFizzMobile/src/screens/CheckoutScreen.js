import React, { useContext, useEffect, useState } from "react";
import {
  ScrollView,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { Button, Text, TextInput } from "react-native-paper";
import { useNavigation, useRoute } from "@react-navigation/native";
import FontAwesome from "@expo/vector-icons/build/FontAwesome";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";
import CartCard from "../components/CartCard";

const Checkout = ({ route }) => {
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const [carts, setCarts] = useState([]);
  const [quantity, setQuantity] = useState(0);
  const [subTotalPrice, setSubTotalPrice] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  // ADDRESS
  const [address, setAddress] = useState(user.user.profile.address);
  const [apartment, setApartment] = useState("House No. 1");
  const [phoneNumber, setPhoneNumber] = useState(user.user.profile.contact_no);
  // SHIPPING METHOD
  const [delivery, setDelivery] = useState("pickUp");
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);

  // FILE UPLOAD
  const [paymentImageStatus, setPaymentImageStatus] = useState(false);
  const [paymentImageUri, setPaymentImageUri] = useState("");
  const [paymentImageName, setPaymentImageName] = useState("");

  // PAYMENT
  const [mop, setMop] = useState("GCash");
  const [gcashFile, setGcashFile] = useState({}); // IF GCASH

  // useEffect(() => {
  //   console.log(user);
  // }, [user]);

  // FILE UPLOAD FUNCTION
  const pickPaymentImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [2, 1],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setPaymentImageUri(result.assets[0].uri);
      const uriParts = result.assets[0].uri.split("/");
      const filename = uriParts[uriParts.length - 1];
      setPaymentImageName(filename);
      setPaymentImageStatus(true);
    }
  };

  //  API TO GET THE CART of the user
  useEffect(() => {
    api
      .get(`shopping/getusercart?user_id=${user.user.id}`)
      .then((response) => {
        // console.log(response.data);
        const cartItems = response.data;
        let tempSubTotal = 0;
        let tempQuantity = 0;
        cartItems.map((item, index) => {
          tempSubTotal += Number(item.cart_price);
          tempQuantity += Number(item.cart_quantity);
        });
        setQuantity(tempQuantity);
        setSubTotalPrice(tempSubTotal);
        setCarts(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    //get user profile details
    api
      .get(`usermanagement/getprofile/${user.user.id}`)
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log(user);
  }, []);

  //handle logic and computation
  useEffect(() => {
    if (delivery == "pickUp") {
      setTotalPrice(subTotalPrice);
      setShippingFee(0);
    } else if (delivery == "Standard") {
      setTotalPrice(subTotalPrice + 39);
      setShippingFee(39);
    } else {
      setTotalPrice(subTotalPrice + 150);
      setShippingFee(150);
    }
  }, [subTotalPrice, delivery]);

  // API TO SUBMIT ORDER
  const onSubmitOrder = () => {
    const formdata = new FormData();
    formdata.append("user_id", user.user.id);
    formdata.append("order_address", address);
    formdata.append("order_apartment", apartment);
    formdata.append("order_phone_number", phoneNumber);
    formdata.append("order_shipping", delivery);
    formdata.append("payment", mop);
    if (mop == "GCash") {
      formdata.append("payment_image", gcashFile);
    } else {
      formdata.append("payment_image", "");
    }
    formdata.append("total_quantity", quantity);
    formdata.append("total_price", totalPrice);
    // formdata.append("carts", JSON.stringify(carts));
    console.log("Formdataaaaa", formdata);
    api
      .post("shopping/submitorder", {
        user_id: user.user.id,
        order_address: address,
        order_apartment: apartment,
        order_phone_number: phoneNumber,
        order_shipping: delivery,
        payment: mop,
        // payment_image: gcashFile,
        total_quantity: quantity,
        total_price: totalPrice,
        carts: JSON.stringify(carts),
      })
      .then((response) => {
        Alert.alert("Order Submitted!", "Your order has been submitted!", [
          { text: "OK", onPress: () => navigation.navigate("IndexScreen") },
        ]);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate("CartScreen")}>
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
            value={user.user.email}
            editable={false}
            mode="outlined"
            focused={true}
          />
          <Text style={styles.textStyle}>Address</Text>
          <TextInput
            label="Name"
            value={user.user.name}
            editable={false}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
          <TextInput
            label="Address"
            value={user.user.profile.address}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
          <TextInput
            label="Apartment, Suite, etc."
            value={apartment}
            placeholder="Apartment No., Floor, etc."
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
          <TextInput
            label="Phone Number"
            value={phoneNumber}
            mode="outlined"
            focused={true}
            style={{ marginTop: 10 }}
          />
        </View>

        {/* Shipping Address */}
        <View style={styles.shippingMethodContainer}>
          <Text style={styles.textStyle}>Shipping Method</Text>
          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: delivery === "pickUp" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => setDelivery("pickUp")}
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
              borderColor: delivery === "Standard" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              if (delivery !== "Standard") {
                setDelivery("Standard");
                setTotalPrice(Number(totalPrice) + 39);
              }
            }}
          >
            <Text>Standard Delivery</Text>
            <Text>* Estimated Delivery: 3-4 Days</Text>
            <Text>P39.00</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 20,
              borderWidth: 2,
              borderColor: delivery === "SameDay" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => {
              if (delivery !== "SameDay") {
                setDelivery("SameDay");
                setTotalPrice(Number(totalPrice) + 150);
              }
            }}
          >
            <Text>Same Day Delivery</Text>
            <Text>* Get the product delivered now!</Text>
            <Text>P150.00</Text>
          </TouchableOpacity>
        </View>

        {/* Payment */}
        <View>
          <Text style={styles.textStyle}>Payment</Text>
          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: mop === "GCash" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => setMop("GCash")}
          >
            <Text>GCash</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              borderRadius: 10,
              borderWidth: 2,
              borderColor: mop === "COD" ? "#EDBF47" : "black",
              padding: 10,
              marginBottom: 10,
            }}
            onPress={() => setMop("COD")}
          >
            <Text>Cash on Delivery</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.textStyle}>Payment Details</Text>
          {mop === "GCash" && (
            <View
              style={{
                borderColor: "black",
                borderWidth: 1,
                borderRadius: 8,
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
                width: "100%",
                height: 300,
              }}
            >
              <Button
                buttonColor="#E79E4F"
                mode="contained"
                onPress={pickPaymentImage}
                icon={() => (
                  <MaterialIcons name="cloud-upload" size={30} color="white" />
                )}
                style={{
                  borderRadius: 12,
                  padding: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                UPLOAD FILE
              </Button>
              {paymentImageUri && (
                <Image
                  source={{ uri: paymentImageUri }}
                  style={{ width: 100, height: 200 }}
                />
              )}
            </View>
          )}
        </View>

        <View>
          <View style={styles.orderSummary}>
            <Text style={styles.orderSummaryTitle}>Order Summary</Text>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Items:</Text>
              <Text style={styles.value}>{quantity}</Text>
            </View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Sub Total:</Text>
              <Text style={styles.value}>₱ {subTotalPrice}.00</Text>
            </View>
            <View style={styles.containerCheckout}>
              <Text style={styles.label}>Shipping Fee:</Text>
              <Text style={styles.value}>₱ {shippingFee}.00</Text>
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
              onPress={onSubmitOrder}
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
        <View>
          {carts.map((item, index) => (
            <CartCard
              cart={item}
              key={index}
              // subTotal={subTotal}
              showQuantityControls={false} //prop for removing button
            />
          ))}
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
  shippingMethodContainer: {
    marginVertical: 12,
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

export default Checkout;
