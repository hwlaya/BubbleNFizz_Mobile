import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Toast,
  Alert,
} from "react-native";
import { Button, Divider, IconButton } from "react-native-paper";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Rating } from "react-native-ratings";
import { UserContext, UserProvider } from "../providers/UserProvider";
import api from "../../config/api";

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
    productId,
  } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(productPrice);

  // USER DETAILS
  // to get user id = user.user.id
  // to get all user data = user.user
  // to get user profile = user.user.profile
  const user = useContext(UserContext);

  useEffect(() => {
    console.log("Product Scentttttt: ", productScentName);
  });

  const addToCart = () => {
    console.log("product_id", productId);
    console.log("userId", user.user.id);
    console.log("cart quantity", quantity);
    console.log("cart price", totalPrice);
    api
      .post("shopping/addtocart", {
        user_id: user.user.id,
        product_id: productId,
        cart_quantity: quantity,
        cart_price: totalPrice,
      })
      .then((response) => {
        console.log(response.data);
        Alert.alert("Added to cart", "Item has been added to cart!");
        navigation.goBack();
      })
      .catch((err) => {
        console.log(err.response);
      });
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
        <IconButton
          style={styles.cartButton}
          icon="shopping"
          onPress={() => {
            console.log("Shopping icon pressed");
            navigation.navigate("CartScreen");
          }}
        />
        <Image
          source={require("../assets/images/product1.jpg")}
          style={styles.productImage}
        />

        {/* Product Info */}
        <View style={styles.productInfoContainer}>
          <Text style={styles.productPrice}>₱{productPrice}</Text>
          <Text style={styles.productName}>{productName}</Text>
          <Text>Category: {productCategory}</Text>
          <Text
            style={[{ fontFamily: "LexendExa-ExtraLight", textAlign: "right" }]}
          >
            Scent:
            {productScentName}
          </Text>
        </View>

        <View
          style={{
            width: "100%",
            height: 1,
            backgroundColor: "black",
            marginVertical: 10,
          }}
        />

        <View style={styles.productInfo}>
          <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
            Quantity:{" "}
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1);
                  setTotalPrice(totalPrice - productPrice);
                }
              }}
            >
              <AntDesign name="minussquare" size={40} color="black" />
            </TouchableOpacity>

            <View style={styles.quantityText}>
              <Text
                style={{
                  borderWidth: 1,
                  borderColor: "black",
                  padding: 6,
                  paddingHorizontal: 10,
                }}
              >
                {quantity}
              </Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setQuantity(quantity + 1);
                setTotalPrice(Number(totalPrice) + Number(productPrice));
              }}
            >
              <AntDesign name="plussquare" size={40} color="black" />
            </TouchableOpacity>
          </View>
          <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
            Total Price: ₱{totalPrice}
          </Text>
          <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
            Stock: {productStock}
          </Text>
          <Button style={styles.button} mode="contained" onPress={addToCart}>
            Add to Cart
          </Button>
          <Rating
            type="star"
            startingValue={productRating}
            imageSize={20}
            readonly
            precision={0.1}
          />

          <View style={styles.divider} />
          <Text style={styles.productDescription}>{productDescription}</Text>
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
    backgroundColor: "white",
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "cover",
  },
  productName: {
    fontFamily: "LilitaOne-Regular",
    textAlign: "left",
    fontSize: 20,
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
  cartButton: {
    position: "absolute",
    top: 35,
    right: 10,
    zIndex: 1,
  },
  productInfoContainer: {
    justifyContent: "space-around",
    alignContent: "space-between",
    padding: 10,
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: "black",
    marginVertical: 10,
  },
  quantityText: {
    padding: 10,
  },
  productInfo: {
    padding: 12,
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#E79E4F",
  },
});

export default ProductScreen;
