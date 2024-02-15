import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";

const PollFirstScreen = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.contentContainer, { width: windowWidth * 0.8 }]}>
          <View style={styles.bodyContainer}>
            <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
              Hi
            </Text>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              To get the best Bath
            </Text>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              experience, tell us about
            </Text>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              yourself! Your response will be kept private.
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            {/* ReusableButton for Next */}
            <NavigationButton
              onPress={() => {
                console.log("Next Pressed");
                navigation.navigate("PollSecondScreen");
              }}
              text="Next"
              buttonColor="#EDBF47"
            />
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
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
  },
  textStyle: {
    fontFamily: "LexendExa-ExtraLight",
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: "5%",
  },
});

export default PollFirstScreen;
