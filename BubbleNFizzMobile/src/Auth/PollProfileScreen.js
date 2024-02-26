import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Alert } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomInput from "../components/CustomInput";

const PollProfileScreen = () => {
  const navigation = useNavigation();
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <Text style={styles.title}> Complete your profile!</Text>
      </View>
      <CustomInput label={"Birthday"} />
      <CustomInput label={"Address"} />
      <CustomInput label={"City"} />
      <CustomInput label={"Postal Code"} />
      <CustomInput label={"Contact Number"} />
      <View style={styles.container}></View>
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
            console.log("Next Pressed");
            Alert.alert(
              "Results are in!",
              "Thank you!! Your account is all set. You may now get the best deals our shop has to offer."
            );
            navigation.navigate("LoginScreen");
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
    padding: 16,
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
export default PollProfileScreen;
