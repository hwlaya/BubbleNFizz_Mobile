import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Background from "../components/Background";
import { Input } from "@ui-kitten/components";
import { Text, TextInput, Button } from "react-native-paper";
import { UserContext } from "../providers/UserProvider";
import axios from "axios";
import api from "../../config/api";
const LoginScreen = () => {
  const navigation = useNavigation();

  const user = useContext(UserContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { width, height } = Dimensions.get("window");

  const onSubmitLogin = () => {
    api
      .post("/mobilelogin", {
        email: email,
        password: password,
        device_name: "mobile",
      })
      .then((response) => {
        user.user = response.data.user_profile;
        user.userProfile = response.data.user_profile;
        navigation.navigate("PollScreen1");
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <View style={styles.headerContainer}>
        <Text
          style={{ fontFamily: "Poppins-ExtraBold" }}
          variant="displayMedium"
        >
          Bubble N Fizz
        </Text>
      </View>
      <View style={styles.container}>
        <View style={[styles.box, { width: width * 1, height: height * 0.5 }]}>
          <Text
            style={{ fontFamily: "Poppins-Light" }}
            variant="headlineMedium"
          >
            {" "}
            LOG IN{" "}
          </Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.inputText}> USERNAME OR EMAIL </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={email}
              onChangeText={setEmail}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <Text style={styles.inputText}> PASSWORD </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
              right={<TextInput.Icon icon="eye" />}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.registerText}> New to Bubble N Fizz? </Text>
                <Text style={styles.registerText2}>Sign up </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button
              mode="elevated"
              buttonColor="#EDBF47"
              onPress={onSubmitLogin}
            >
              <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>SUBMIT</Text>
            </Button>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    marginTop: 20,
  },
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
  registerText: {
    fontFamily: "Poppins-SemiBold",
  },
  registerText2: {
    fontFamily: "Poppins-SemiBold",
    color: "red",
  },
});
export default LoginScreen;
