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
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
        </TouchableOpacity>
        <Image source={productImage} style={styles.productImage} />

        <View style={styles.productInfoContainer}>
          <Text style={styles.productPrice}>₱{productPrice}</Text>
          <Text style={styles.productName}>{productName}</Text>
          <View style={styles.divider} />
          <Text style={styles.productDescription}>
            Handcrafted artisan soaps are a departure from mass-produced
            commercial soaps. Each bar is carefully made in small batches,
            allowing for individual attention to detail and the incorporation of
            unique ingredients and designs. From the selection of nourishing
            oils and butters to the infusion of botanical extracts and essential
            oils, these soaps are a celebration of nature's bounty. By choosing
            handcrafted artisan soaps, you not only elevate your self-care
            routine but also support local artisans and small businesses. Each
            bar represents hours of dedication, expertise, and a commitment to
            creating a product that brings joy and indulgence to your everyday
            life. So why settle for the ordinary when you can experience the
            extraordinary? Explore the world of handcrafted artisan soaps and
            unlock a whole new level of bathing luxury and self-care bliss.
          </Text>
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
