import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
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
import api from "../../config/api";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const onSubmitRegister = () => {
    api
      .post("register", {
        name: name,
        email: email,
        password: password,
        password_confirmation: cPassword,
      })
      .then((response) => {
        console.log(response.data);
        navigation.navigate("LoginScreen");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

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
            CREATE ACCOUNT{" "}
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
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              EMAIL ADDRESS{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={email}
              onChangeText={(text) => setEmail(text)}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              PASSWORD{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={!passwordVisible}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  iconColor={"black"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <Text style={styles.inputText} variant="bodySmall">
              {" "}
              CONFIRM PASSWORD{" "}
            </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={cPassword}
              onChangeText={(text) => setCPassword(text)}
              secureTextEntry={!cPasswordVisible}
              right={
                <TextInput.Icon
                  icon={cPasswordVisible ? "eye-off" : "eye"}
                  iconColor={"black"}
                  onPress={() => setCPasswordVisible(!cPasswordVisible)}
                />
              }
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("LoginScreen");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.loginText}> Already Have An Account? </Text>
                <Text style={styles.loginText2}>Login </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button
              mode="elevated"
              buttonColor="#EDBF47"
              onPress={onSubmitRegister}
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
    padding: 1,
    marginTop: 20,
    margintop: 20,
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
  loginText: {
    fontFamily: "Poppins-SemiBold",
  },
  loginText2: {
    fontFamily: "Poppins-SemiBold",
    color: "red",
  },
});
export default RegisterScreen;
