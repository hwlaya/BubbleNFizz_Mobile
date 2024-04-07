import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen4 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const { gender, fragrance, location, ingredients, texture } = route.params;

  // Define Design with descriptions
  const designs = [
    {
      design: "Minimalist",
      description:
        "Clean, simple, and understated designs with sleek lines and neutral colors, often focusing on functionality and clarity.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      design: "Bohemian",
      description:
        "Free-spirited and eclectic designs that incorporate vibrant colors, eclectic patterns, and artisanal elements like handcrafted pottery or woven textures.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      design: "Elegant2",
      description:
        "Sophisticated and refined designs that exude luxury and opulence, featuring sleek packaging, metallic accents, and understated embellishments.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      //Same Design Variable Take Note in web same
      design: "Elegant",
      description:
        "Whimsical and imaginative designs that spark joy and creativity, often featuring whimsical illustrations, quirky shapes, and bright colors.",
      image: require("../assets/images/bestseller1.jpg"),
    },
  ];

  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleSelectDesign = (design) => {
    setSelectedDesign(design);
    console.log("Selected design:", design);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (selectedDesign) {
      navigation.navigate("PollScreen5", {
        gender: gender,
        fragrance: fragrance,
        location: location,
        ingredients: ingredients,
        texture: texture,
        design: selectedDesign,
      });
    } else {
      Alert.alert("Select Design", "Please select a design before proceeding.");
    }
  };

  return (
    <ScrollView>
      <Background>
        <PollsHeader />
        <View style={styles.container}>
          <Text style={styles.title}>What Design do you prefer?</Text>
          <View style={styles.cardContainer}>
            {designs.map((design, index) => (
              <Card
                key={index}
                style={[
                  styles.card,
                  selectedDesign === design.design && styles.selectedCard,
                ]}
                onPress={() => handleSelectDesign(design.design)}
              >
                <Card.Content>
                  <Text style={styles.cardLabel}>{design.design}</Text>
                  <Image source={design.image} style={styles.cardImage} />
                  <Text numberOfLines={4} style={styles.cardDescription}>
                    {design.description}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {/* Previous Button */}
          <NavigationButton
            onPress={handlePrevious}
            text="Back"
            buttonColor="#EDBF47"
            style={styles.button}
          />
          {/* Next Button */}
          <NavigationButton
            onPress={handleNext}
            text="Next"
            buttonColor="#EDBF47"
            style={styles.button}
          />
        </View>
      </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "150%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  selectedCard: {
    borderColor: "#EDBF47",
    borderWidth: 2,
  },
  cardLabel: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default PollScreen4;
