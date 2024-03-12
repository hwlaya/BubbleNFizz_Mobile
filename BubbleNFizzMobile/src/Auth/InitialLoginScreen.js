import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { Button } from "react-native-paper";

const InitialLoginScreen = () => {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/Initial_landing_screen.png")}
        style={styles.imageBackground}
      >
        <View
          style={[styles.box, { width: width * 1, height: height * 0.001 }]}
        >
          {/* Black Circle */}
          <View style={styles.circle} />
          {/* Texts */}
          <View style={styles.bodyContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.textStyle1}>Welcome to</Text>
              <Text style={styles.textStyle2}>Bubble N Fizz</Text>
            </View>

            {/* Buttons */}
            <View style={styles.buttonContainer}>
              <View style={{ alignItems: "center" }}>
                <View style={{ zIndex: 2 }}>
                  <Button
                    mode="contained-tonal"
                    buttonColor="#E79E4F"
                    style={{
                      borderRadius: 40,
                      width: 170,
                      height: 80,
                      justifyContent: "center",
                      marginRight: -70,
                      // alignItems: "flex-start",
                      // marginRight: -90,
                    }}
                    onPress={() => {
                      console.log("Sign-Up Pressed");
                      navigation.navigate("RegisterScreen");
                    }}
                  >
                    <Text style={styles.textStyle3}>Sign-Up</Text>
                  </Button>
                </View>
              </View>
              <View>
                <Button
                  mode="contained-tonal"
                  buttonColor="white"
                  style={[styles.button, styles.loginButton]}
                  onPress={() => {
                    console.log("Login Pressed");
                    navigation.navigate("LoginScreen");
                  }}
                >
                  <Text style={styles.textStyle4}>Login</Text>
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    backgroundColor: "black",
    borderRadius: 500, // Adjust the radius as needed
    width: 500,
    height: 500,
    position: "absolute",
    bottom: -100, // Adjust the positioning as needed
  },
  bodyContainer: {
    marginTop: -450,
  },
  textContainer: {
    alignItems: "center",
    paddingBottom: 50,
  },
  textStyle1: {
    fontSize: 30,
    fontFamily: "Poppins-ExtraBold",
    color: "white",
  },
  textStyle2: {
    fontSize: 30,
    color: "#E79E4F",
    fontFamily: "Poppins-ExtraBold",
  },
  textStyle3: {
    color: "white",
    fontSize: 20,
    fontFamily: "LexendExa-ExtraLight",
  },
  textStyle4: {
    color: "black",
    fontSize: 20,
    fontFamily: "LexendExa-ExtraLight",
  },
  buttonContainer: {
    flexDirection: "row",
    paddingBottom: 50,

    alignItems: "center",
  },
  button: {
    borderRadius: 40,
    width: 170,
    height: 80,
    justifyContent: "center",
    // alignItems: "flex-end",
    // marginBottom: 100,
    //   marginLeft: -20,
  },
  loginButton: {
    paddingLeft: 45,
  },
});

export default InitialLoginScreen;
