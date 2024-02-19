import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import axios from "axios";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");

  const handleUserPoll = () => {
    api
      .post("/addUserPoll", {
        user_id: "1",
        gender: "male",
        fragrance: "fresh",
        location: "city",
        ingredients: "grown",
        texture: "a care",
        design: "vibrant",
        age_bracket: "18-24",
        frequency: "2 days",
        bath_type: "cold shower",
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.box, { width: 300, height: 300 }]}>
          <View
            style={{
              alignItems: "center",
            }}
          >
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
            <Text style={styles.textStyle}>To get the best Bath</Text>
            <Text style={styles.textStyle}>experience, tell us about</Text>
            <Text style={styles.textStyle}>
              yourself! Your response will be kept private.
            </Text>
          </View>
          <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
            What is your fragrance type?
          </Text>
          <CustomCardFragrance />
          <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
            To get the best Bath
          </Text>
          <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
            experience, tell us about
          </Text>
          <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
            yourself! Your response will be kept private.
          </Text>
          <View style={{ alignSelf: "flex-end", paddingBottom: "20%" }}>
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
  textStyle: {
    fontFamily: "LexendExa-ExtraLight",
    fontSize: 24,
  },
});

export default PollScreen;
