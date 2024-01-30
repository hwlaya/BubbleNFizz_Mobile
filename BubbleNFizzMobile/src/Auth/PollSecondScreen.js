import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";

const PollSecondScreen = () => {
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
        <Text
          style={{
            fontFamily: "Poppins-SemiBold",
            fontSize: 34,
          }}
          variant="displaySmall"
        >
          {" "}
          How often do you take a bath?
        </Text>
        <View style={{ justifyContent: "center" }}>
          <Button buttonColor="#EDBF47" style={{ height: 50, width: 180 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 20,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              1 Day
            </Text>
          </Button>
          <Button buttonColor="#EDBF47" style={{ height: 50, width: 180 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 20,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              2 Days
            </Text>
          </Button>
          <Button buttonColor="#EDBF47" style={{ height: 50, width: 180 }}>
            <Text
              style={{
                fontFamily: "Poppins-SemiBold",
                fontSize: 20,
                alignSelf: "center",
                justifyContent: "center",
              }}
            >
              3 Days +
            </Text>
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
});

export default PollSecondScreen;
