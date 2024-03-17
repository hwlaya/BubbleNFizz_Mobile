import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text, TouchableRipple } from "react-native-paper";
import api from "../../config/api";
import CheckOutCard from "../components/CheckoutCard";

const MyPurchases = (user) => {
  const [activeButton, setActiveButton] = useState(null);
  const [page, setPage] = useState("Pending");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Cart Data:", data);
  }, [data]);

  useEffect(() => {
    api
      .get(`ordersmanagement/userorders?user_id=2&page=Pending`)
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
              Complete
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
      <View>
        <Text>My Orders</Text>
      </View>

      {/* DISPLAY */}
      <View>
        {page === "Pending" ? (
          <View>
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
                      <Text>To Pay</Text>
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
          </View>
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
                      <View>To Ship</View>
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
});

export default MyPurchases;
