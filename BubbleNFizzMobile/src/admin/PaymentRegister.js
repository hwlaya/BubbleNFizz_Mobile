import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import { Text, DataTable, Button } from "react-native-paper";
import { FontAwesome } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import api from "../../config/api";

const PaymentRegister = () => {
  const navigation = useNavigation();
  const { width } = Dimensions.get("window");
  const [allUsers, setAllUsers] = useState([]);
  const [category, setCategory] = useState("Artisan Facial and Body Soaps");
  const [products, setProducts] = useState([]);

  // form
  const [selectedUser, setSelectedUser] = useState({});
  const [discount, setDiscount] = useState("");
  const [items, setItems] = useState([]);

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
        <Text>Payment Register</Text>
        <View style={styles.userContainer}>
          <FontAwesome
            name="user-circle"
            size={width < 600 ? 20 : 24}
            color="black"
          />
          <Text>Fucking User na nag-aautofill</Text>
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
            <DataTable.Row>
              {items.length > 0 &&
                items.map((item, index) => {
                  return (
                    <DataTable.Row key={index}>
                      <DataTable.Cell>{item.product_name}</DataTable.Cell>
                      <DataTable.Cell>{item.product_weight}</DataTable.Cell>
                      <DataTable.Cell>
                        <Button
                          icon="remove"
                          onPress={() => {
                            const updatedItems = items
                              .map((tempItem) => {
                                if (tempItem.product_id === item.product_id) {
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
                        />
                        {item.product_quantity}{" "}
                        <Button
                          icon="add"
                          onPress={() => {
                            const updatedItems = items.map((tempItem) => {
                              if (tempItem.product_id === item.product_id) {
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
                        />
                      </DataTable.Cell>
                      <DataTable.Cell>{item.product_price}</DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
            </DataTable.Row>
          </DataTable>
        </View>
        <View style={styles.divider} />
        <View style={styles.itemContainer}>
          <Text>SubTotal:</Text>
          <Text>$100</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text>Discount:</Text>
          <Text>-$10</Text>
        </View>
        <View style={styles.itemContainer}>
          <Text>Total:</Text>
          <Text>$90</Text>
        </View>
        <ScrollView horizontal>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              margin: 4,
            }}
          >
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

        <View style={[styles.grid, { marginTop: 5 }]}>
          {products.map((item, index) => {
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
                <View style={styles.gridItem} key={index}>
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
              );
            }
          })}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  userContainer: {
    flexDirection: "row",
    alignItems: "space-around",
    justifyContent: "space-around",
    borderWidth: 1.5,
    width: "100%",
  },
  bodyContainer: {
    padding: 10,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
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
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  gridItem: {
    backgroundColor: "#9E9E9E",
    borderRadius: 10,
  },
  gridContent: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  gridImage: {
    height: 200,
    width: 200,
  },
  gridText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default PaymentRegister;
