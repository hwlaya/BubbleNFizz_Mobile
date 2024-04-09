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
import { useNavigation, useRoute } from "@react-navigation/native";
import { Rating } from "react-native-ratings";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";

const ProductScreen = ({ route }) => {
  const { id, product } = route.params;
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [userReviews, setUserReviews] = useState([]);

  // //submit review api
  // const submitReview = () => {
  //   api
  //     .post("/shopping/addreview", {
  //       user_id: user.id,
  //       product_id: product.id,
  //       product_rating: rating,
  //       product_description: review,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       Alert.alert("Review Added!", "Your review has been added!", [
  //         { text: "OK", onPress: () => setReview("") },
  //       ]);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //       Alert.alert("Error", "An error occurred while adding the review.");
  //     });
  // };

  const addQuantity = () => {
    if (quantity < product.product_stock) {
      setQuantity((prevQuantity) => Number(prevQuantity) + 1);
      setTotalPrice(
        (prevTotalPrice) =>
          Number(prevTotalPrice) + Number(product.product_price)
      ); // Update Total Price
    } else {
      Alert.alert("Error", "Exceeded stock amount");
    }
  };

  const subQuantity = () => {
    if (quantity > 1) {
      setQuantity((prevQuantity) => Number(prevQuantity) - 1);
      setTotalPrice(
        (prevTotalPrice) =>
          Number(prevTotalPrice) - Number(product.product_price)
      ); // Update Total Price
    } else {
      Alert.alert("Error", "Quantity cannot be lower than 1");
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      setQuantity(1); // Reset quantity to 1 when the screen is focused
      setTotalPrice(Number(product.product_price)); // Reset Total Price based on the product price
    });

    return unsubscribe;
  }, [navigation]);

  //add to cart API
  const addToCart = () => {
    console.log("Product ID:", product.id);
    console.log("User ID:", user.user.id);
    console.log("Cart Quantity:", quantity);
    console.log("Cart Price:", totalPrice);

    api
      .post("shopping/addtocart", {
        product_id: product.id,
        user_id: user.user.id,
        cart_quantity: quantity,
        cart_price: totalPrice,
      })
      .then((response) => {
        console.log(response.data);
        Alert.alert("Added to Cart!", "Item has been added to cart!", [
          { text: "OK" },
        ]);
      })
      .catch((error) => {
        console.error(error);
        Alert.alert(
          "Error",
          "An error occurred while adding the item to the cart."
        );
      });
  };

  return (
    <ScrollView>
      {Object.keys(product).length === 0 ? (
        <Text>Loading...</Text>
      ) : (
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
            source={{
              uri: decodeURI(
                `https://bubblenfizz-store.com/BubbleNFizz-main/public/image/products/${product.product_images}`
              ),
            }}
            style={styles.productImage}
          />

          {/* Product Info */}
          <View style={styles.productInfoContainer}>
            {/* Product Price */}
            <Text style={styles.productPrice}>₱{product.product_price}</Text>
            {/* Product Name */}
            <Text style={styles.productName}>{product.product_name}</Text>
            {/* Product Scent */}
            <Text
              style={[
                {
                  fontFamily: "LexendExa-ExtraLight",
                  textAlign: "right",
                  marginTop: 10,
                },
              ]}
            >
              Scent:
              {product.product_scent_name}
            </Text>
          </View>
          {/* Divider */}
          <View
            style={{
              width: "100%",
              height: 1,
              backgroundColor: "black",
              marginVertical: 10,
            }}
          />
          {/* Quantity */}
          <View style={styles.productInfo}>
            <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
              Quantity:{" "}
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity onPress={subQuantity}>
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
              <TouchableOpacity onPress={addQuantity}>
                <AntDesign name="plussquare" size={40} color="black" />
              </TouchableOpacity>
            </View>
            <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
              Total Price: ₱{totalPrice}
            </Text>
            <Text style={[{ fontFamily: "Inconsolata-Light", fontSize: 16 }]}>
              Stock: {product.product_stock}
            </Text>
            <Button style={styles.button} mode="contained" onPress={addToCart}>
              Add to Cart
            </Button>
            <Rating
              type="star"
              value={rating}
              imageSize={20}
              readonly
              precision={0.1}
            />

            <View style={styles.divider} />

            {/* Change to reusable component the reviews */}
            <Text style={styles.productDescription}>Description</Text>
            <Text style={styles.productDescription}>
              {" "}
              {String(product.product_description).replace(/~/g, "\n")}
            </Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "white",
    marginTop: 30,
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
    textAlign: "justify",
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 10,
    zIndex: 1,
  },
  cartButton: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
  productInfoContainer: {
    justifyContent: "space-around",
    alignContent: "space-between",
    padding: 10,
    width: "100%",
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
    width: "100%",
  },
  button: {
    marginVertical: 10,
    borderRadius: 8,
    backgroundColor: "#E79E4F",
  },
});

export default ProductScreen;
