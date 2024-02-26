import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardBathType from "../components/CustomCardBathType";
import  api  from "../../config/api";
import { UserContext } from "../providers/UserProvider";

const PollScreen9 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user = useContext(UserContext);
  const { gender, fragrance, location, ingredients, texture, design, ageBracket, frequency } = route.params;

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const [bath, setBath] = useState(null);

  const handleUserPoll = () => {
    api
      .post("/addUserPoll", {
        user_id: "1",
        gender: gender,
        fragrance: fragrance,
        location: location,
        ingredients: ingredients,
        texture: texture,
        design: design,
        age_bracket: ageBracket,
        frequency: frequency,
        bath_type: bath,
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
        <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
          What type of bath do you prefer?
        </Text>
        <CustomCardBathType setBath={setBath} />
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <View style={styles.previousButtonContainer}>
          <NavigationButton
            onPress={() => {
              console.log("Previous Pressed");
              navigation.navigate("PollScreen8");
            }}
            text="Back"
            buttonColor="#EDBF47"
          />
        </View>
        {/* Next Button */}
        <View style={styles.nextButtonContainer}>
          <NavigationButton
            onPress={() => {
              // console.log(gender, fragrance, location, ingredients, texture, design, ageBracket, frequency, bath);
              api.post("usermanagement/adduserpoll", {
              user_id: user.user.id,
              gender: gender,
              scent: fragrance,
              location: location,
              ingredients: ingredients,
              texture: texture,
              design: design,
              age_bracket: ageBracket,
              frequency: frequency,
              bath_type: bath,  
              }).then((response) => {
                console.log(response.data)
              }).catch((error) => {
                console.log(error.response)

              })
              navigation.navigate("PollProfileScreen", {
                gender: gender,
                fragrance: fragrance,
                location: location,
                ingredients: ingredients,
                texture: texture,
                design: design,
                ageBracket: ageBracket,
                frequency: frequency,
                bath_type: bath,
              })
            }}
            text="Next"
            buttonColor="#EDBF47"
          />
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
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
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    //Manipulate this part if image not showing
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default PollScreen9;
