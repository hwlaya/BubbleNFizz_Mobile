import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardFragrance from "../components/CustomCardFragrance";

const PollScreen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedFragrance, setSelectedFragrance] = useState(null);

  const { gender } = route.params;

  const handleSelectFragrance = (fragrance) => {
    console.log("Selected gender:", gender, "Selected fragrance:", fragrance);
    setSelectedFragrance(fragrance);
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollsHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
          What is your fragrance type?
        </Text>
        <CustomCardFragrance onSelect={handleSelectFragrance} />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen1");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => navigation.navigate("PollScreen3", {gender: gender, fragrance: selectedFragrance})}
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

export default PollScreen2;
