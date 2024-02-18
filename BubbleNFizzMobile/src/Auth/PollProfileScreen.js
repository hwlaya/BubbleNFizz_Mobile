import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
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
});
export default PollProfileScreen;
