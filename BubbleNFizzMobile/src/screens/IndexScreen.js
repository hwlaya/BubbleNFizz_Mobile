import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import HomeHeader from "../components/HomeHeader";
import RenderCard from "../components/RenderCard";
import Slider from "../components/Slider";
import Section from "../components/Section";
import HeroSection from "../components/HeroSection";
import { Divider } from "react-native-paper";
import api from "../../config/api";

const IndexScreen = () => {
  const [threeProducts, setThreeProducts] = useState([]);
  useEffect(() => {
    api
      .get("shopping/getthreeproducts")
      .then((response) => {
        console.log(response.data);
        setThreeProducts(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View>
        <HomeHeader
          title="Bubble N' Fizz"
          showMenuIcon={true}
          showShoppingIcon={true}
        />
      </View>
      <View>
        <HeroSection />
      </View>

      {/* Products- Recommended */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>RECOMMENDED—</Text>
      </View>

      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {/* <RenderCard
            productName={item.product_name}
            // productImage={item.product_image}
            productPrice={item.product_price}
            productRating={item.product_rating}
            productScentName={item.product_scent_name}
            productImage={require("../assets/images/product1.jpg")}
          /> */}
          {threeProducts.map((item, index) => (
            <RenderCard item={item} key={index} />
          ))}
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

      {/* Products- Best Sellers */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>BEST SELLERS—</Text>
      </View>

      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {/* <RenderCard
            productName="Bubble N Fizz Coffee Bath Bomb 200g"
            productCategory="Indulgent Coffee Bath Bombs"
            productPrice="179"
            productImage={require("../assets/images/bestseller1.jpg")}
          />
          <RenderCard
            productName="Bubble N Fizz Sunkissed Bath Bomb 200g"
            productCategory="Enchanting Sunkissed Bath Bomb"
            productPrice="179"
            productImage={require("../assets/images/bestseller2.jpg")}
          />
          <RenderCard
            productName="Bubble N Fizz Rainbow Bath Bomb 200g"
            productCategory="Spectacular Rainbow Bath Bomb"
            productPrice="199"
            productImage={require("../assets/images/bestseller3.jpg")}
          /> */}
          {threeProducts.map((item, index) => (
            <RenderCard item={item} key={index} />
          ))}
        </View>
      </ScrollView>

      {/* Section - Rating Certified */}
      <Section />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
