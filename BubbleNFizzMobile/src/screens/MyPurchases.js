import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import api from "../../config/api";
import CheckOutCard from "../components/CheckoutCard";
import { UserContext } from "../providers/UserProvider";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const MyPurchases = () => {
  const user = useContext(UserContext);
  const [activeButton, setActiveButton] = useState("Pending");
  const [page, setPage] = useState("Pending");
  const [data, setData] = useState([]);
  const navigation = useNavigation();
  useEffect(() => {
    console.log("Cart Data:", data);
  }, [data]);

  useEffect(() => {
    console.log("IDDDDD:", user.user.id);
    console.log("Pagerasdzxc:", page);
    api

      .get(`ordersmanagement/userorders?user_id=${user.user.id}&page=${page}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  const handleButtonPress = (buttonName) => {
    setPage(buttonName);
    setActiveButton(buttonName);
  };
  return (
    <View style={style.container}>
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
          style={style.backButton}
        >
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <Text style={style.cartTitle}>My Purchases</Text>
      </View>

      <View style={style.divider} />
      <View style={style.buttonContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableRipple
            style={[
              style.button,
              activeButton === "Pending" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("Pending")}
          >
            <Text
              style={[
                style.text,
                activeButton === "Pending" && {
                  color: "#E79E4F",
                },
              ]}
            >
              To Pay
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              style.button,
              activeButton === "To Ship" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("To Ship")}
          >
            <Text
              style={[
                style.text,
                activeButton === "To Ship" && {
                  color: "#E79E4F",
                },
              ]}
            >
              To Ship
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              style.button,
              activeButton === "To Receive" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("To Receive")}
          >
            <Text
              style={[
                style.text,
                activeButton === "To Receive" && {
                  color: "#E79E4F",
                },
              ]}
            >
              To Receive
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              style.button,
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
                style.text,
                activeButton === "Complete" && {
                  color: "#E79E4F",
                },
              ]}
            >
              Completed
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              style.button,
              activeButton === "Cancelled" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("Cancelled")}
          >
            <Text
              style={[
                style.text,
                activeButton === "Cancelled" && {
                  color: "#E79E4F",
                },
              ]}
            >
              Cancelled
            </Text>
          </TouchableRipple>
          <TouchableRipple
            style={[
              style.button,
              activeButton === "Refund" && {
                color: "#E79E4F",
                borderBottomWidth: 2,
                borderBottomColor: "#E79E4F",
              },
            ]}
            onPress={() => handleButtonPress("Refund")}
          >
            <Text
              style={[
                style.text,
                activeButton === "Refund" && {
                  color: "#E79E4F",
                },
              ]}
            >
              Refund
            </Text>
          </TouchableRipple>
        </ScrollView>
      </View>
      <View style={style.divider} />
      {/* DISPLAY */}
      <View>
        {page === "Pending" ? (
          <ScrollView style={{ marginBottom: 150 }}>
            {data.length > 0 ? (
              data.map((item, index) => {
                // console.log(item.order_status);
                if (item.order_status === "Pending") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
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
                <Text>No items to display</Text>
              </View>
            )}
          </ScrollView>
        ) : page === "To Ship" ? (
          <View>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "To Ship") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
                      <Text>To Ship</Text>
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
                <Text>No items to display (Ship)</Text>
              </View>
            )}
          </View>
        ) : page === "To Receive" ? (
          <View>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "To Receive") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
                      <View>To Receive</View>
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
          </View>
        ) : page === "Complete" ? (
          <View>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "Complete") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
                      <View>Complete</View>
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
          </View>
        ) : page === "Cancelled" ? (
          <View>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "Cancelled") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
                      <View>Cancelled</View>
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
                <Text>No items to display (Cancelled)</Text>
              </View>
            )}
          </View>
        ) : page === "Refund" ? (
          <View>
            {data.length > 0 ? (
              data.map((item, index) => {
                if (item.order_status == "Refund") {
                  return (
                    <View key={index}>
                      <View>
                        <Text>
                          Order# {item.id} (₱{item.total_price}){" "}
                        </Text>
                      </View>
                      <View>Refund</View>
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
                <Text>No items to display (Refund)</Text>
              </View>
            )}
          </View>
        ) : null}
      </View>
    </View>
  );
};

const style = StyleSheet.create({
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

export default MyPurchases;
