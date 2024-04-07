import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen5 = ({ navigation, route }) => {
  const { gender, fragrance, location, ingredients, texture, design } =
    route.params;
  const [selectedBracket, setSelectedBracket] = useState(null);

  const handleAge = (ageBracket) => {
    console.log("Selected Age Bracket:", ageBracket);
    setSelectedBracket(ageBracket);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (selectedBracket) {
      navigation.navigate("PollScreen6", {
        gender,
        fragrance,
        location,
        ingredients,
        texture,
        design,
        ageBracket: selectedBracket,
      });
    } else {
      Alert.alert("Select Age", "Please select your age before proceeding.");
    }
  };

  const renderButton = (label) => {
    const isActive = selectedBracket === label;
    return (
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={[
            styles.buttonStyle,
            { backgroundColor: isActive ? "#EDBF47" : "grey" },
          ]}
          onPress={() => handleAge(label)}
        >
          <Text
            style={[
              styles.textStyle,
              { color: isActive ? "white" : "#EDBF47" },
            ]}
          >
            {label}
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PollsHeader />
        <View style={styles.container}>
          <Text style={styles.title}>How old are you?</Text>
          <View style={styles.buttonContainer1}>
            {renderButton("Under 18")}
            {renderButton("18-24")}
            {renderButton("25-34")}
            {renderButton("35-44")}
            {renderButton("45-55")}
            {renderButton("56+")}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <NavigationButton
            onPress={handlePrevious}
            text="Back"
            buttonColor="#EDBF47"
          />
          <NavigationButton
            onPress={handleNext}
            text="Next"
            buttonColor="#EDBF47"
          />
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  buttonContainer1: {
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginBottom: 10,
    //width: "120%", // Changed width to 100%
  },
  buttonStyle: {
    height: 50,
    width: 180,
    margin: 10,
    borderRadius: 16,
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    alignSelf: "center",
    padding: 5,
  },
});

export default PollScreen5;
