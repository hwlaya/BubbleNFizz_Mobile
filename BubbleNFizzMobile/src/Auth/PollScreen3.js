import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardLocation from "../components/CustomCardLocation";

const PollScreen3 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const { gender } = route.params;
  const { fragrance } = route.params;

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelectLocation = (location) => {
    console.log(
      "Selected gender:",
      gender,
      "Selected fragrance:",
      fragrance,
      "Selected location:",
      location
    );
    setSelectedLocation(location);
    navigation.navigate("PollScreen3", {
      gender: gender,
      fragrance: selectedFragrance,
    });
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
          Where do you live?
        </Text>
        <CustomCardLocation onSelect={handleSelectLocation} />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen2");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={handleSelectLocation}
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
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
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
});

export default PollScreen3;
