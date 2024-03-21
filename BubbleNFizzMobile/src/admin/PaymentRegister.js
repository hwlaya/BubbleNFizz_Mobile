import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import {
  Text,
  DataTable,
  Button,
  TextInput,
  RadioButton,
} from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../config/api";

const PaymentRegister = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [allUsers, setAllUsers] = useState([]);
  const [category, setCategory] = useState("Artisan Facial and Body Soaps");
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [totalQuantity, setTotalQuantity] = useState(0);

  // form
  const [selectedUser, setSelectedUser] = useState({});
  const [discount, setDiscount] = useState("");
  const [items, setItems] = useState([]);
  const renderItem = ({ item }) => {
    if (item.product_details !== null) {
      let weight = "";
      if (category == "Bubble Bath") {
        weight = String(
          String(item.product_details.product_name).substring(
            String(item.product_details.product_name).length - 5
          )
        ).replace(" ", "");
      } else {
        weight = String(
          String(item.product_details.product_name).substring(
            String(item.product_details.product_name).length - 4
          )
        ).replace(" ", "");
      }
      const trim1 = String(item.product_details.product_name).replace(
        "Bubble N Fizz ",
        ""
      );
      const trim2 = trim1.replace(/[0-9g]/g, "");
      const firstLetters = String(trim2).match(/\b(\w)/g);
      const acronym = firstLetters.join("");
      return (
        <TouchableOpacity
          onPress={() => {
            let temp = [
              ...items,
              {
                product_id: item.product_id,
                product_name: `${acronym} ${item.product_details.product_scent_name}`,
                product_weight: `${weight}`,
                product_quantity: 1,
                product_price: item.product_details.product_price,
                fixed_price: item.product_details.product_price,
              },
            ];
            setTotalQuantity(totalQuantity + 1);
            setTotalPrice(
              totalPrice + Number(item.product_details.product_price)
            );
            setSubTotal(subTotal + Number(item.product_details.product_price));
            setItems(temp);
          }}
          style={{ marginHorizontal: 12 }}
        >
          <View style={styles.gridItem}>
            <View style={styles.gridContent}>
              <Image
                source={{ uri: `https://picsum.photos/200/200` }}
                style={styles.gridImage}
              />
              <Text style={styles.gridText}>
                {`${acronym} ${item.product_details.product_scent_name} ${weight}`}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  };

  useEffect(() => {
    api
      .get("usermanagement/getallcustomers")
      .then((response) => {
        const userList = response.data;
        let temp = [];
        userList.map((item, index) => {
          temp = [
            ...temp,
            {
              label: item.name,
              value: item.id,
            },
          ];
        });

        setAllUsers(temp);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    api
      .get(`shopping/getpaymentproduct?category=${category}`)
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, [category]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.userContainer}>
          <FontAwesome name="user-circle" size={width * 0.2} color="black" />
          <TextInput label="Customer" style={{ width: "70%" }} />
        </View>

        {/* TABLE */}
        <View style={styles.bodyContainer}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Grams</DataTable.Title>
              <DataTable.Title>Qty</DataTable.Title>
              <DataTable.Title>Price</DataTable.Title>
            </DataTable.Header>
            {items.length > 0 &&
              items.map((item, index) => {
                return (
                  <DataTable.Row key={index}>
                    <DataTable.Cell>{item.product_name}</DataTable.Cell>
                    <DataTable.Cell>{item.product_weight}</DataTable.Cell>
                    <DataTable.Cell>
                      <Button
                        onPress={() => {
                          const updatedItems = items
                            .map((tempItem) => {
                              if (tempItem.product_id === item.product_id) {
                                setSubTotal(
                                  subTotal - Number(tempItem.fixed_price)
                                );
                                setTotalPrice(
                                  totalPrice - Number(tempItem.fixed_price)
                                );
                                setTotalQuantity(totalQuantity - 1);
                                return {
                                  ...tempItem,
                                  product_quantity: Math.max(
                                    Number(tempItem.product_quantity) - 1,
                                    0
                                  ),
                                  product_price:
                                    Number(tempItem.product_price) -
                                    Number(tempItem.fixed_price),
                                };
                              }
                              return tempItem;
                            })
                            .filter(
                              (tempItem) => tempItem.product_quantity > 0
                            );

                          setItems(updatedItems);
                        }}
                      >
                        -
                      </Button>
                      {item.product_quantity}{" "}
                      <Button
                        onPress={() => {
                          const updatedItems = items.map((tempItem) => {
                            if (tempItem.product_id === item.product_id) {
                              setSubTotal(
                                subTotal + Number(tempItem.fixed_price)
                              );
                              setTotalPrice(
                                totalPrice + Number(tempItem.fixed_price)
                              );
                              setTotalQuantity(totalQuantity + 1);
                              return {
                                ...tempItem,
                                product_quantity:
                                  Number(tempItem.product_quantity) + 1,
                                product_price:
                                  Number(tempItem.product_price) +
                                  Number(tempItem.fixed_price),
                              };
                            }
                            return tempItem;
                          });

                          setItems(updatedItems);
                        }}
                      >
                        -
                      </Button>
                    </DataTable.Cell>
                    <DataTable.Cell>{item.product_price}</DataTable.Cell>
                  </DataTable.Row>
                );
              })}
          </DataTable>
        </View>
        <View style={styles.divider} />

        {/* TOTAL */}
        <View style={styles.itemContainer}>
          <Text>Quantity:</Text>
          <Text>{totalQuantity}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text>SubTotal:</Text>
          <Text>{subTotal}</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text>Total:</Text>
          <Text>{totalPrice}</Text>

          <Button onPress={console.log("pay")}>Pay Now </Button>
        </View>

        <View style={styles.divider} />

        {/* Category */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            // alignItems: "space-between",
            // justifyContent: "center",
            // marginVertical: 50,
            height: 70,
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <Button
              mode="contained"
              onPress={() => setCategory("Artisan Facial and Body Soaps")}
            >
              Artisan Facial and Body Soaps
            </Button>
            <Button
              mode="contained"
              onPress={() => setCategory("Shampoo Bars")}
            >
              Shampoo Bars
            </Button>
            <Button mode="contained" onPress={() => setCategory("Bath Bomb")}>
              Bath Bomb
            </Button>
            <Button mode="contained" onPress={() => setCategory("Bubble Bath")}>
              Bubble Bath
            </Button>
          </View>
        </ScrollView>

        <View
          style={{
            flex: 1,
            marginHorizontal: "auto",
            width: "100%",
            borderWidth: 1,
            marginVertical: 10,
            paddingVertical: 10,
          }}
        >
          <FlatList
            scrollEnabled={false}
            data={products}
            renderItem={renderItem}
            numColumns={4}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1.5,
    width: "100%",
    height: "10%",
  },
  bodyContainer: {
    padding: 10,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  title: {
    flexDirection: "row",
    fontSize: 24,
    alignSelf: "flex-start",
    marginLeft: -10,
  },
  divider: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: "100%",
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },

  // Grid

  gridItem: {
    flex: 1,
    padding: 10,
    maxWidth: "100%",
    borderWidth: 1,
    backgroundColor: "#111827",
    marginVertical: 5,
    minHeight: 270,
  },
  gridContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 200, // Adjust the width as needed
  },
  gridImage: {
    height: 180,
    width: 180,
  },
  gridText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginTop: 1,
    flexWrap: "wrap",
    textAlign: "center",
    fontFamily: "Poppins-SemiBold",
  },
});

export default PaymentRegister;
