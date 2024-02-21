import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardBathType from "../components/CustomCardBathType";

const PollScreen9 = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
          What type of bath do you prefer?
        </Text>
        <CustomCardBathType />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <View style={styles.previousButtonContainer}>
          <NavigationButton
            onPress={() => {
              console.log("Previous Pressed");
              navigation.navigate("PollScreen8");
            }}
            text="Back"
            buttonColor="#EDBF47"
          />
        </View>
        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <NavigationButton
            onPress={() => {
              console.log("Next Pressed");
              navigation.navigate("PollScreen10");
            }}
            text="Next"
            buttonColor="#EDBF47"
          />
        </View>
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

export default PollScreen9;
