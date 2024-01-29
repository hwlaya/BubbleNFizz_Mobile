import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, ImageBackground, StyleSheet } from "react-native";
import { Button } from "react-native-paper";

const InitialLoginScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      source={require("../assets/images/Initial_landing_screen.png")}
      style={styles.imageBackground}
    >
      {/* Black Circle */}
      <View style={styles.circle} />
      {/* Texts */}
      <View style={styles.textContainer}>
        <Text style={styles.textStyle1}>Welcome to</Text>
        <Text style={styles.textStyle2}>Bubble N Fizz</Text>
      </View>

      {/* Buttons */}
      <View style={{ flexDirection: "row", marginBottom: 100 }}>
        <View style={{ paddingStart: 90 }}>
          <View style={{ zIndex: 2 }}>
            <Button
              mode="contained-tonal"
              buttonColor="#E79E4F"
              style={{
                borderRadius: 40,
                width: 170,
                height: 80,
                justifyContent: "center",
                // alignItems: "flex-start",
                marginRight: -90,
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
        <View style={{ paddingEnd: 90 }}>
          <Button
            mode="contained-tonal"
            buttonColor="white"
            style={{
              borderRadius: 40,
              width: 170,
              height: 80,
              justifyContent: "center",
              alignItems: "flex-end",
              //   marginLeft: -20,
            }}
            onPress={() => {
              console.log("Login Pressed");
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.textStyle4}>Login</Text>
          </Button>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    flex: 1,
    justifyContent: "flex-end",
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
  textContainer: {
    marginBottom: 80,
    paddingStart: 80,
    alignSelf: "flex-start",
  },
  textStyle1: {
    fontSize: 35,
    fontFamily: "Poppins-ExtraBold",
    color: "white",
  },
  textStyle2: {
    fontSize: 35,
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
});

export default InitialLoginScreen;
