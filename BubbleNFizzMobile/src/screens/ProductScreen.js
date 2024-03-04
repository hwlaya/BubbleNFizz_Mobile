import React, { useState } from "react";
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
import { Rating } from "react-native-ratings";

const ProductScreen = ({ route }) => {
  const {
    productName,
    productPrice,
    productImage,
    productDescription,
    productCategory,
    productScentName,
    productStock,
    productRating,
  } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice);
  const handleAddToCart = () => {
    // Perform add to cart logic here
    console.log("Product added to cart:", productName);
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <Image
          source={require("../assets/images/product1.jpg")}
          style={styles.productImage}
        />

        <View style={styles.productInfoContainer}>
          <Text style={styles.productPrice}>₱{productPrice}</Text>
          <Text style={styles.productName}>{productName}</Text>
          <Text>{productCategory}</Text>
          <Text>{productScentName}</Text>
          <Text>{productStock}</Text>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Button
              onPress={() => {
                setQuantity(quantity - 1);
                setTotalPrice(totalPrice - productPrice);
              }}
            >
              Minus
            </Button>
            <Text>{quantity}</Text>
            <Text>P{totalPrice}</Text>
            <Button
              onPress={() => {
                setQuantity(quantity + 1);
                setTotalPrice(Number(totalPrice) + Number(productPrice));
              }}
            >
              Add
            </Button>
          </View>
          <Rating
            type="star"
            startingValue={productRating}
            imageSize={20}
            readonly
            precision={0.1}
          />
          <View style={styles.divider} />
          <Text style={styles.productDescription}>{productDescription}</Text>
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
  productDescription: {
    fontSize: 12,
    marginVertical: 10,
    fontFamily: "LexendExa-ExtraLight",
  },
  backButton: {
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
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
});

export default ProductScreen;
