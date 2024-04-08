import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen6 = ({ navigation, route }) => {
  const { gender, fragrances, texture, design, age } = route.params;
  const [selectedFrequency, setSelectedFrequency] = useState(null);

  const handleFrequency = (frequency) => {
    console.log("Selected Frequency:", frequency);
    setSelectedFrequency(frequency);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (selectedFrequency) {
      navigation.navigate("PollScreen7", {
        gender,
        fragrances,
        texture,
        design,
        age,
        frequency: selectedFrequency,
      });
    } else {
      Alert.alert(
        "Select Frequency",
        "Please select how often you take a bath before proceeding."
      );
    }
  };

  const renderButton = (label) => {
    const isActive = selectedFrequency === label;
    return (
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={[
            styles.buttonStyle,
            { backgroundColor: isActive ? "#EDBF47" : "grey" },
          ]}
          onPress={() => handleFrequency(label)}
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
          <Text style={styles.title}>How often do you take a bath?</Text>
          <View style={styles.buttonContainer1}>
            {renderButton("1 Day")}
            {renderButton("2 Days")}
            {renderButton("3 Days")}
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

export default PollScreen6;
