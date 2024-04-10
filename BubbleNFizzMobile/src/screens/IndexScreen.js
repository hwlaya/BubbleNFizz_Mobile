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

const IndexScreen = () => {
  const user = useContext(UserContext);

  const navigation = useNavigation();
  const [products, setProducts] = useState([]);
  const [bestProducts, setBestProducts] = useState([]);
  const [similarProducts, setSimilarProducts] = useState([]);
  const [pollProducts, setPollProducts] = useState([]);

  useEffect(() => {
    if (user == null) {
      api
        .get("shopping/getthreeproducts")
        .then((response) => {
          setProducts(response.data);
        })
        .catch((err) => {
          console.log("Error fetching three products:", err.response);
        });
    } else {
      api
        .post("recommenditems", {
          user_id: user.id,
        })
        .then((response) => {
          setProducts(response.data);
          console.log("Recommend items response:", response.data);
        })
        .catch((err) => {
          console.log("Error recommending items:", err.response);
        });
      api
        .post("usermanagement/getuserpoll", {
          user_id: user.user.id,
        })
        .then((response) => {
          const fragrance = response.data.fragrance;
          console.log("Fragrance:", response.data.fragrance);
          api
            .post("customerpollresult", {
              product_scent: JSON.parse(fragrance),
            })
            .then((response) => {
              setPollProducts(response.data);
              console.log("Poll result response:", response.data);
            })
            .catch((err) => {
              console.log("Error getting user poll result:", err.response);
            });
        })
        .catch((err) => {
          console.log("Error getting user poll:", err.response);
        });
    }

    api
      .get("shopping/getbestsellers")
      .then((response) => {
        setBestProducts(response.data);
        console.log("Bestsellers response:", response.data);
      })
      .catch((err) => {
        console.log("Error fetching bestsellers:", err.response);
      });

    api
      .get("shopping/similarproducts")
      .then((response) => {
        setSimilarProducts(response.data);
        console.log("Similar Products response:", response.data);
      })
      .catch((err) => {
        console.log("Error fetching similar products:", err.response);
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
        <Text style={[styles.categoryText, { color: "gray", fontSize: 12 }]}>
          Here are the products that other users are buying!
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {products.map((item, index) => {
            if (index < 6) {
              return (
                // Reusable component for displaying Products
                <RenderCard
                  key={index}
                  item={item}
                  title={String(item.product_name).replace("Bubble N Fizz", "")}
                  price={item.product_price}
                  rating={item.product_rating}
                  scentName={item.product_scent_name}
                  onPress={() => {
                    console.log("Productsss", item);
                    navigation.navigate("ProductScreen", {
                      product: item,
                      productId: item.id,
                    });
                  }}
                  sales={item.category.product_sales}
                  image={item.product_images}
                />
              );
            }
          })}
        </View>
      </ScrollView>

      {/* Products- Poll */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>POLL RESULTS—</Text>
        <Text style={[styles.categoryText, { color: "gray", fontSize: 12 }]}>
          Here are the products that your poll result has generated!
        </Text>
      </View>

      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {pollProducts.map((item, index) => {
            if (index < 6) {
              return (
                // Reusable component for displaying Products
                <RenderCard
                  key={index}
                  item={item}
                  title={String(item.product_name).replace("Bubble N Fizz", "")}
                  price={item.product_price}
                  rating={item.product_rating}
                  scentName={item.product_scent_name}
                  onPress={() => {
                    console.log("Poll Productss", item);
                    navigation.navigate("ProductScreen", {
                      product: item,
                      productId: item.id,
                    });
                  }}
                  sales={item.category.product_sales}
                  image={item.product_images}
                />
              );
            }
          })}
        </View>
      </ScrollView>

      {/* Products- Similar Products */}
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryText}>SIMILAR PRODUCTS YOU LIKE—</Text>
        <Text style={[styles.categoryText, { color: "gray", fontSize: 12 }]}>
          Here are the products that other users are checking out!
        </Text>
      </View>

      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {similarProducts.map((item, index) => {
            return (
              // Reusable component for displaying Products
              <RenderCard
                key={index}
                item={item}
                title={String(item.product_name).replace("Bubble N Fizz", "")}
                price={item.product_price}
                rating={item.product_rating}
                scentName={item.product_scent_name}
                onPress={() => {
                  console.log("Productss", item);
                  navigation.navigate("ProductScreen", {
                    product: item,
                    productId: item.id,
                  });
                }}
                sales={item.category.product_sales}
                image={item.product_images}
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
        <Text style={[styles.categoryText, { color: "gray", fontSize: 12 }]}>
          Here are the best selling products!
        </Text>
      </View>
      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          {bestProducts.map((item, index) => {
            return (
              // console.log("CARDDDDDDDD", item.product_details);
              <RenderCard
                key={index}
                item={item.product_details}
                image={item.product_details.product_images}
                title={item.product_details.product_name}
                price={item.product_details.product_price}
                rating={item.product_details.product_rating}
                scentName={item.product_details.product_scent_name}
                onPress={() => {
                  console.log("Best Sellerrr", item);
                  navigation.navigate("ProductScreen", {
                    product: item.product_details,
                    productId: item.id,
                  });
                }}
              />
            );
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
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "left",
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
