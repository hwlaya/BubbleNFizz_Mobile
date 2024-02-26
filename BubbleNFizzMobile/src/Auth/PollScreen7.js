import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
} from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomButtonAgeBracket from "../components/CustomButtonAgeBracket";

const PollScreen7 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { gender, fragrance, location, ingredients, texture, design } = route.params;
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [ageBracket, setAgeBracket] = useState(null)

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
          How old are you?
        </Text>
        <CustomButtonAgeBracket setAgeBracket={setAgeBracket} />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            // console.log("Previous Pressed");
            navigation.navigate("PollScreen6");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => {
            // console.log("Next Pressed");
            navigation.navigate("PollScreen8", {
              gender: gender,
              fragrance: fragrance,
              location: location,
              ingredients: ingredients,
              texture: texture,
              design: design,
              ageBracket: ageBracket
            });
          }}
          text="Next"
          buttonColor="#EDBF47"
          style={styles.button}
        />
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
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "150%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
});

export default PollScreen7;
