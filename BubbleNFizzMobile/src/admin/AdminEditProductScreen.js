import React from "react";
import { View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { DataTable, Button, Text } from "react-native-paper";
import AdminHomeHeader from "../components/AdminHomeHeader";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AdminEditProductScreen = () => {
  const navigation = useNavigation();
  // Dummy product data for demonstration
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  return (
    <View style={styles.container}>
      <ScrollView>
        <AdminHomeHeader
          title="Bubble N' Fizz"
          showMenuIcon={true}
          showShoppingIcon={true}
        />
        <View style={styles.bodyContainer}>
          <View style={styles.title}>
            <TouchableOpacity
              onPress={() => navigation.navigate("AdminStoreCatalogScreen")}
            >
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color="black"
              />
            </TouchableOpacity>
            <Text
              variant="displayMedium"
              style={{
                padding: 10,
                fontFamily: "LexendExa-ExtraLight",
              }}
            >
              Edit Product
            </Text>
          </View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>ID</DataTable.Title>
              <DataTable.Title>Name</DataTable.Title>
              <DataTable.Title>Price</DataTable.Title>
              <DataTable.Title>Edit</DataTable.Title>
              {/* New column for Edit button */}
            </DataTable.Header>
            {products.map((product) => (
              <DataTable.Row key={product.id}>
                <DataTable.Cell>{product.id}</DataTable.Cell>
                <DataTable.Cell>{product.name}</DataTable.Cell>
                <DataTable.Cell>{product.price}</DataTable.Cell>
                <DataTable.Cell>
                  <Button
                    mode="contained"
                    onPress={() => {
                      // Handle Edit button action
                    }}
                  >
                    Edit
                  </Button>
                </DataTable.Cell>
              </DataTable.Row>
            ))}
          </DataTable>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});

export default AdminEditProductScreen;
