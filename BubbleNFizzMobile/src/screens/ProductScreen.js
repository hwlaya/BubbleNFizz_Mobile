import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Button } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ProductScreen = ({ route }) => {
  const { productName, productPrice, productImage } = route.params;
  const navigation = useNavigation();
  const handleAddToCart = () => {
    // Perform add to cart logic here
    console.log("Product added to cart:", productName);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.button}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={productImage} style={styles.productImage} />

        <View style={styles.productInfoContainer}>
          <Text style={styles.productPrice}>₱{productPrice}</Text>
          <Text style={styles.productName}>{productName}</Text>

          <Button mode="contained" onPress={handleAddToCart}>
            Add to Cart
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
  },
  productImageContainer: {
    width: "100%",
    height: 250,
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  productName: {
    fontFamily: "LilitaOne-Regular",
    textAlign: "left",
    fontSize: 24,
  },
  productPrice: {
    fontFamily: "Inconsolata-Bold",
    fontSize: 24,
  },
  button: {
    position: "absolute",
    top: 40,
    left: 10,
    zIndex: 1,
  },
  productInfoContainer: {
    justifyContent: "space-around",
    alignContent: "space-between",
    padding: 16,
  },
});
export default ProductScreen;
