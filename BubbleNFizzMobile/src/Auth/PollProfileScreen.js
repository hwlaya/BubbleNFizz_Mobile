import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import CustomInput from "../components/CustomInput";
import CustomInputBirthday from "../components/CustomInputBirthday";
import { UserContext } from "../providers/UserProvider";
import api from "../../config/api";
import moment from "moment";

const PollProfileScreen = () => {
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollsHeader />
      <View style={styles.container}>
        <Text style={styles.title}> Complete your profile!</Text>
      </View>

      <CustomInputBirthday
        label={"Birthday"}
        value={birthday}
        onChangeText={(text) => setBirthday(text)}
      />
      <CustomInput
        label={"Address"}
        value={address}
        onChangeText={(text) => setAddress(text)}
      />
      <CustomInput
        label={"City"}
        value={city}
        onChangeText={(text) => setCity(text)}
      />
      <CustomInput
        label={"Postal Code"}
        value={postalCode}
        onChangeText={(text) => setPostalCode(text)}
      />
      <CustomInput
        label={"Contact Number"}
        value={contactNumber}
        onChangeText={(text) => setContactNumber(text)}
      />
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
            api
              .post("usermanagement/adduserprofile", {
                user_id: user.user.id,
                birthday: birthday,
                address: address,
                city: city,
                postal_code: postalCode,
                contact_no: contactNumber,
              })
              .then((response) => {
                Alert.alert(
                  "Results are in!",
                  "Thank you!! Your account is all set. You may now get the best deals our shop has to offer."
                );
                navigation.navigate("LoginScreen");
              })
              .catch((error) => {
                console.log(error.response);
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
