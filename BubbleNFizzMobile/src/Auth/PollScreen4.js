import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";
import CustomCardIngredients from "../components/CustomCardIngredients";
import { useState } from "react";

const PollScreen4 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const { gender, fragrance, location } = route.params;

  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleSelectIngredients = (ingredient, gender, fragrance, location) => {
    console.log(
      "Selected ingredient:", ingredient,
      "Selected gender:", gender,
      "Selected fragrance:", fragrance,
      "Selected location:", location
    );
    setSelectedIngredient(ingredient);
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.contentContainer, { width: windowWidth * 0.8 }]}>
          <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
            What Ingredients do you prefer?
          </Text>
          <CustomCardIngredients onSelect={handleSelectIngredients} />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen3");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => {
            console.log(gender, fragrance, location, selectedIngredient);
            navigation.navigate("PollScreen5", {gender: gender, fragrance: fragrance, location: location, ingredients: selectedIngredient});
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

export default PollScreen4;
