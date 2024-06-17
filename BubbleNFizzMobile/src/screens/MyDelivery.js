import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import api from "../../config/api";
import CheckOutCard from "../components/CheckoutCard";
import { UserContext } from "../providers/UserProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyDelivery = () => {
  const user = useContext(UserContext);
  const [activeButton, setActiveButton] = useState("To Recieve");
  const [page, setPage] = useState("To Recieve");
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    api.get(`ordersmanagement/userorders?user_id=${user.user.id}&page=${page}`).then((response) => {
      setData(response.data);
    }).catch((err) => {
      console.log(err);
    });
  }, [page]);

  const handleButtonPress = (buttonName) => {
    setPage(buttonName);
    setActiveButton(buttonName);
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <Text style={styles.cartTitle}>My Delivery</Text>
      </View>

      {/* TABS */}
      <View style={styles.divider} />
      <View style={styles.buttonContainer}>
        <View style={{flexDirection: "row", flex: 1, justifyContent: "space-around"}}>
          <TouchableRipple
            style={[
              styles.button,
              activeButton === "To Recieve" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("To Recieve")}
          >
            <Text
              style={[
                styles.text,
                activeButton === "To Recieve" && {
                  color: "#E79E4F",
                },
              ]}
            >
              To Recieve
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              styles.button,
              activeButton === "Complete" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("Complete")}
          >
            <Text
              style={[
                styles.text,
                activeButton === "Complete" && {
                  color: "#E79E4F",
                },
              ]}
            >
              Completed
            </Text>
          </TouchableRipple>
        </View>
      </View>
      <View style={styles.divider} />

      {/* DISPLAY */}
      <View>
        {page === "To Recieve" ? (
          <ScrollView style={{ marginBottom: 150 }}>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "To Recieve") {
                  console.log(data);
                  return (
                    <View key={index}>
                      <View>
                        <Text>Order# {item.id} (₱{item.total_price}){" "}</Text>
                      </View>
                      <Text>To Receive</Text>
                      {item.order_items.map((item, index) => {
                        return (
                          <CheckOutCard
                            cart={item}
                            key={index}
                            isCart={false}
                          />
                        );
                      })}
                    </View>
                  );
                }
              })
            ) : (
              <View>
                <Text>No items to display (Receive)</Text>
              </View>
            )}
          </ScrollView>
        ) : page === "Complete" ? (
          <ScrollView style={{ marginBottom: 150 }}>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "Complete") {
                  return (
                    <View key={index}>
                      <View>
                        <Text> Order# {item.id} (₱{item.total_price}){" "}</Text>
                      </View>
                      <Text>Complete</Text>
                      {item.order_items.map((item, index) => {
                        return (
                          <CheckOutCard
                            cart={item}
                            key={index}
                            isCart={false}
                          />
                        );
                      })}
                    </View>
                  );
                }
              })
            ) : (
              <View>
                <Text>No items to display (Complete)</Text>
              </View>
            )}
          </ScrollView>
        ) : null}
      </View>
    </View>
  );
}

export default MyDelivery

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },
  buttonContainer: {
    flexDirection: "row",
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 16,
    fontFamily: "Poppins-Light",
  },
  backButton: {
    position: "absolute",
    top: 0,
    left: 10,
    zIndex: 1,
  },
  cartTitle: {
    fontFamily: "LilitaOne-Regular",
    fontSize: 30,
    textAlign: "center",
  },
});