import React, { useEffect, useState } from "react";
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

const IndexScreen = () => {
  const navigation = useNavigation();
  const [threeProducts, setThreeProducts] = useState([]);
  const [bestSellers, setBestSellers] = useState([]);
  useEffect(() => {
    api
      .get("shopping/getthreeproducts")
      .then((response) => {
        //console.log(response.data);
        setThreeProducts(response.data);
      })
      .catch((err) => {
        // console.log(err.response);
      });
  }, []);

  useEffect(() => {
    api
      .get("shopping/getbestsellers")
      .then((response) => {
        // console.log(response.data);
        setBestSellers(response.data);
      })
      .catch((err) => {
        // console.log(err.response);
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
            //console.log("Item at index", index, ":", item),
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
          {bestSellers.map((item, index) => {
            const {
              product_name,
              product_price,
              product_scent_name,
              product_rating,
              product_description,
            } = item;
            return (
              <RenderCard
                item={item}
                key={index}
                productName={product_name}
                productPrice={product_price}
                productScentName={product_scent_name}
                productRating={product_rating}
                productDescription={product_description}
              />
            );
          })}
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
