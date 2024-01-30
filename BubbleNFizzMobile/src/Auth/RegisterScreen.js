import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Image, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { Input } from "@ui-kitten/components";
import { Text, TextInput, Button } from "react-native-paper";

const RegisterScreen = () => {
  const navigation = useNavigation();
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
        <Text style={{ fontFamily: "Poppins-Light" }} variant="headlineMedium">
          {" "}
          CREATE ACCOUNT{" "}
        </Text>
        <View style={styles.bodyContainer}>
          <Text style={styles.inputText} variant="bodySmall">
            {" "}
            FIRST NAME{" "}
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
            LAST NAME{" "}
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
