import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { ActivityIndicator } from "react-native-paper";
import api from "../../config/api";
import RenderProductsCard from "../components/RenderProductCard";

const AllProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    api
      .get("shopping/getallproducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const handleProductPress = (item) => {
    navigation.navigate("ProductScreen", item);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.button}
      >
        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
      </TouchableOpacity>
      <View style={{ margin: 10, marginTop: 12 }}>
        <Text style={styles.customTitle}>All Products</Text>
        {loading ? (
          <ActivityIndicator animating={true} color="#0000ff" />
        ) : (
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <RenderProductsCard
                productId={item.id}
                productCategory={item.product_category}
                productName={item.product_name}
                productDescription={item.product_description}
                productImage={item.product_image}
                productPrice={item.product_price}
                productStock={item.product_stock}
                productRating={item.product_rating}
                productScentName={item.product_scent_name}
              />
            )}
            keyExtractor={(item) => item.id}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  customTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 30,
    textAlign: "center",
  },
  button: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },
});

export default AllProductsPage;
