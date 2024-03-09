import React, { useState } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Background from "../components/Background";
import { Text, TextInput, Button } from "react-native-paper";
import PollHeader from "../components/PollHeader";

const EditProfileScreen = () => {
  const { width, height } = Dimensions.get("window");

  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [city, setCity] = useState("");
  const [contactNo, setContactNo] = useState("");

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.box, { width: width * 1, height: height * 0.5 }]}>
          <Text
            style={{ fontFamily: "Poppins-Light" }}
            variant="headlineMedium"
          >
            {" "}
            EDIT PROFILE{" "}
          </Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              NAME{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={name}
              onChangeText={(text) => setName(text)}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              ADDRESS{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={address}
              onChangeText={(text) => setAddress(text)}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              BIRTHDAY{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={birthday}
              onChangeText={(text) => setBirthday(text)}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              CITY{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={city}
              onChangeText={(text) => setCity(text)}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              CONTACT NO{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={contactNo}
              onChangeText={(text) => setContactNo(text)}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button mode="elevated" buttonColor="#EDBF47">
              <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>SUBMIT</Text>
            </Button>
          </View>
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
  },
  box: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    backgroundColor: "white",
    height: 60,
    width: 300,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "#000000",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    shadowColor: "#EDBF47",
    shadowOffset: {
      width: 0,
      height: 4,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
    },
  },
  inputText: {
    fontFamily: "LexendExa-ExtraLight",
  },
});

export default EditProfileScreen;
