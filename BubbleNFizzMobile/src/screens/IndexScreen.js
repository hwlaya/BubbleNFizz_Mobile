import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import RenderCard from "../components/RenderCard";
import Slider from "../components/Slider";
import { useNavigation } from "@react-navigation/native";
import Section from "../components/Section";
import HeroSection from "../components/HeroSection";
import { Button, Divider } from "react-native-paper";
import api from "../../config/api";
import { UserContext } from "../providers/UserProvider";

const IndexScreen = (props) => {
  const user = useContext(UserContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [ThreeProduct, setThreeProduct] = useState([]);

  useEffect(() => {
    api
      .get("shopping/getthreeproducts")
      .then((response) => {
        setThreeProduct(response.data);
        console.log("get three products", response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });

    api
      .get("shopping/getbestsellers")
      .then((response) => {
        setBestProducts(response.data);
        console.log("get best products", response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View>
        {/* Reusable Header */}
        <HomeHeader
          title="Bubble N' Fizz"
          showMenuIcon={true}
          showShoppingIcon={true}
        />
      </View>
      <View>
        {/* Hero Section */}
        <HeroSection />
      </View>

      {/* Products- Recommended */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>RECOMMENDED—</Text>
      </View>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {ThreeProduct.map((item, index) => {
            return (
              // Reusable component for displaying Products
              <RenderCard
                key={index}
                item={item}
                title={item.product_name}
                price={item.product_price}
                rating={item.product_rating}
                scentName={item.product_scent_name}
                onPress={() => {
                  console.log("Productsssssssssssssssssssss", item);
                  navigation.navigate("ProductScreen", {
                    product: item,
                    productId: item.id,
                  });
                }}
              />
            );
          })}
        </View>
      </ScrollView>
      <Divider style={styles.divider} />
      <View style={styles.sliderContainer}>
        <Slider
          images={[
            require("../assets/images/slider1.jpg"),
            require("../assets/images/slider2.jpg"),
            require("../assets/images/slider3.jpg"),
            require("../assets/images/slider4.jpg"),
          ]}
        />
      </View>
      <Divider style={styles.divider} />
      {/* Products- Best Sellers  */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>BEST SELLERS—</Text>
      </View>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {bestProducts.map((item, index) => {
            <RenderCard
              key={index}
              item={item}
              title={item.product_name}
              price={item.product_price}
              rating={item.product_rating}
              scentName={item.product_scent_name}
              onPress={() => {
                console.log("Product", item);
                navigation.navigate("ProductScreen", {
                  product: item,
                  productId: item.id,
                });
              }}
            />;
          })}
        </View>
      </ScrollView>

      <Section />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  categoryContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
  },
  productContainer: {
    flexDirection: "row",
    marginVertical: 20,
  },
  categoryText: {
    fontFamily: "Rubik-Regular",
    fontSize: 20,
  },
  cardContainer: {
    flexDirection: "row",
    marginVertical: 12,
  },
  sliderContainer: {
    marginVertical: 36,
  },
  divider: {
    borderWidth: 1,
  },
});

export default IndexScreen;
