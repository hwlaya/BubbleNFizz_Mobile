import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Image, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardTexture from "../components/CustomCardTexture";

const PollScreen5 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [selectedTexture, setSelectedTexture] = useState(null);
  const { gender, fragrance, location, ingredients } = route.params;
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollsHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: windowWidth * 0.07 }]}>
          What Texture do you prefer?
        </Text>
        <CustomCardTexture setTexture={setSelectedTexture} />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen4");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => {
            console.log(
              gender,
              fragrance,
              location,
              ingredients,
              selectedTexture
            );
            navigation.navigate("PollScreen6", {
              gender: gender,
              fragrance: fragrance,
              location: location,
              ingredients: ingredients,
              texture: selectedTexture,
            });
          }}
          text="Next"
          buttonColor="#EDBF47"
          style={styles.button}
        />
      </View>
    </Background>
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
  cardImage: {
    //Manipulate this part if image not showing
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default PollScreen5;
