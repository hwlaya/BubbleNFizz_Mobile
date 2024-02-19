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
            text="Previous"
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  textStyle: {
    fontFamily: "LexendExa-ExtraLight",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: "5%",
    paddingHorizontal: "10%",
  },
  previousButtonContainer: {
    flex: 1,
    alignItems: "flex-start",
  },
  nextButtonContainer: {
    flex: 1,
    alignItems: "flex-end",
  },
});

export default PollScreen9;
