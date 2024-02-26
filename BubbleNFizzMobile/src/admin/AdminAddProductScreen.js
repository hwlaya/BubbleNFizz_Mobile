import React from "react";
import { View, ScrollView } from "react-native";
import { DataTable, Button } from "react-native-paper";

const AdminAddProductScreen = () => {
  // Dummy product data for demonstration
  const products = [
    { id: 1, name: "Product 1", price: "$10" },
    { id: 2, name: "Product 2", price: "$20" },
    { id: 3, name: "Product 3", price: "$30" },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>ID</DataTable.Title>
            <DataTable.Title>Name</DataTable.Title>
            <DataTable.Title>Price</DataTable.Title>
          </DataTable.Header>

          {products.map((product) => (
            <DataTable.Row key={product.id}>
              <DataTable.Cell>{product.id}</DataTable.Cell>
              <DataTable.Cell>{product.name}</DataTable.Cell>
              <DataTable.Cell>{product.price}</DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </ScrollView>

      <Button
        mode="contained"
        onPress={() => {
          // Handle add button action
        }}
        style={{ margin: 20 }}
      >
        Add Product
      </Button>
    </View>
  );
};

export default AdminAddProductScreen;
