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
import { Input } from "@ui-kitten/components";
import { Text, TextInput, Button } from "react-native-paper";
import PollHeader from "../components/PollHeader";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitRegister = () => {
    console.log(name, email, password);

    api.post("/register", {
      name: name,
      email: email,
      password: password,
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
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
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
              secureTextEntry
              right={<TextInput.Icon icon="eye" />}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button
              mode="elevated"
              buttonColor="#EDBF47"
              onPress={() => {
                console.log("Login Pressed");
                navigation.navigate("InitialLoginScreen");
              }}
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
});
export default RegisterScreen;
