import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useContext } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import api from "../../config/api";
import { UserContext } from "../providers/UserProvider";
import { Alert } from "react-native";

const PollScreen7 = ({ navigation, route }) => {
  const user = useContext(UserContext);

  const { gender, fragrances, texture, design, age, frequency } = route.params;
  const [selectedBathType, setSelectedBathType] = useState(null);

  const handleBathType = (bathType) => {
    console.log("Selected Bath Type:", bathType);
    setSelectedBathType(bathType);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (!selectedBathType) {
      Alert.alert(
        "Select Bath Type",
        "Please select the type of bath you prefer before proceeding."
      );
    } else {
      api
        .post("usermanagement/adduserpoll", {
          user_id: user.user.id,
          gender: gender,
          fragrance: fragrances,
          // location: location,
          // ingredients: ingredients,
          texture: texture,
          design: design,
          age_bracket: age,
          frequency: frequency,
          bath_type: selectedBathType,
        })
        .then((response) => {
          navigation.navigate("PollProfileScreen");
          console.log(response.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    }
  };

  const renderButton = (label) => {
    const isActive = selectedBathType === label;
    return (
      <Button
        mode="contained"
        onPress={() => handleBathType(label)}
        style={[
          styles.buttonStyle,
          { backgroundColor: isActive ? "#EDBF47" : "grey" },
        ]}
        labelStyle={[
          styles.textStyle,
          { color: isActive ? "white" : "#EDBF47" },
        ]}
      >
        {label}
      </Button>
    );
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <PollsHeader />
        <View style={styles.container}>
          <Text style={styles.title}>What type of bath do you prefer?</Text>
          <View style={styles.buttonContainer1}>
            {renderButton("Cold Shower")}
            {renderButton("Hot Shower")}
            {renderButton("Warm Shower")}
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
    paddingVertical: 20,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
    marginBottom: 20,
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
    borderRadius: 16,
    marginVertical: 5,
    minWidth: 120,
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
  },
});

export default PollScreen7;
