import React from "react";
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

const IndexScreen = () => {
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
        <TouchableOpacity onPress={() => console.log("Chatbot button pressed")}>
          <Image
            source={require("../assets/images/chatbot.png")}
            style={{ width: 50, height: 50 }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView horizontal={true} style={styles.cardContainer}>
        <View style={styles.productContainer}>
          <RenderCard
            productName="BNF Handcrafted Toasted Marshmallow Body Bar 120g"
            productCategory="Nourishing oils and butters"
            productPrice="100"
            productImage={require("../assets/images/product1.jpg")}
          />
          <RenderCard
            productName="BNF Handcrafted Activated Charcoal Body Bar 120g"
            productCategory="Handcrafted artisan soaps"
            productPrice="95"
            productImage={require("../assets/images/product2.jpg")}
          />
          <RenderCard
            productName="BNF Handcrafted Oh Papaya! Body Bar 120g"
            productCategory="Nourishing oils and butters"
            productPrice="105"
            productImage={require("../assets/images/product3.jpg")}
          />
          <RenderCard
            productName="BNF Handcrafted Rosewood Soap 120g"
            productCategory="Celebration of nature's bounty"
            productPrice="100"
            productImage={require("../assets/images/product1.jpg")}
          />
          <RenderCard
            productName="BNF Handcrafted Rosewood Soap 120g"
            productCategory="Nourishing oils and butters"
            productPrice="100"
            productImage={require("../assets/images/product2.jpg")}
          />
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
          <RenderCard
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
          />
        </View>
      </ScrollView>

      {/* Section - Rating Certified */}
      <Section />

      <View style={[{ padding: 100 }]}>
        <Text>Carousel</Text>
      </View>
      <View style={[{ padding: 100 }]}>
        <Text>Footer</Text>
      </View>
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
