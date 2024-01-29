import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";

const PollFirstScreen = () => {
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
            color: "#EDBF47",
          }}
          variant="displaySmall"
        >
          {" "}
          Hi
        </Text>
        <Text
          style={{
            fontFamily: "LexendExa-ExtraLight",
            fontSize: 24,
            alignSelf: "center",
          }}
        >
          To get the best Bath experience, tell us about yourself! Your response
          will be kept private.
        </Text>
        <View style={{ alignSelf: "flex-end" }}>
          <Button
            mode="elevated"
            buttonColor="#EDBF47"
            onPress={() => {
              console.log("Next Pressed");
              navigation.navigate("PollSecondScreen");
            }}
          >
            <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>Next</Text>
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

export default PollFirstScreen;
