import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  Alert,
} from "react-native";
import Background from "../components/Background";
import { Text, Card } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen2 = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedFragrances, setSelectedFragrances] = useState([]);
  const [prevSelectedFragrances, setPrevSelectedFragrances] = useState([]);

  const [gender, setGender] = useState("");

  useEffect(() => {
    const { gender } = route.params;
    setGender(gender);
  }, []);

  const fragrances = [
    {
      title: "Floral",
      description:
        "These fragrance categories both evoke natural elements and botanical scents, with one focusing more on fresh, green, and herbal notes reminiscent of gardens and meadows.",
    },
    {
      title: "Earthy-Woody Vibes",
      description:
        "Fragrances in this category often feature warm, earthy, or woody notes such as sandalwood, cedarwood, or patchouli. They evoke images of forests, trees, and the great outdoors.",
    },
    {
      title: "Gourmand Sweet",
      description:
        "These fragrances feature edible or dessert-like scents such as vanilla, caramel, chocolate, or pastry notes. They evoke feelings of comfort, indulgence, and sweetness.",
    },
    {
      title: "Tropically Fruity",
      description:
        "These fragrances feature fruity or tropical notes such as citrus, berries, or exotic fruits like mango or papaya. They evoke feelings of freshness, brightness, and tropical escapes.",
    },
    {
      title: "Fresh and Clean",
      description:
        "Fragrances in this category feature crisp, clean, or aquatic notes such as sea breeze, rain, or laundry-fresh scents. They evoke feelings of cleanliness, purity, and revitalization.",
    },
    {
      title: "Aquatic or Oceanic",
      description:
        "These fragrances capture the essence of the sea with notes that evoke the ocean breeze, saltwater, or marine accords. They evoke images of coastal landscapes, beach vacations, and aquatic adventures.",
    },
    {
      title: "Oriental Spice",
      description:
        "These fragrances feature warm, exotic, or spicy notes such as cinnamon, cloves, or amber. They evoke images of bazaars, spices, and mysterious oriental landscapes, adding depth and richness to the scent.",
    },
  ];

  // Array of colors for titles
  const titleColors = [
    "#33CC1A",
    "#493F07",
    "#F2C6E3",
    "#FF0000",
    "#B2DFDB",
    "#007EA7",
    "#9C640C",
  ];

  const handleSelectFragrance = (fragrances) => {
    console.log("Selected fragrances:", fragrances);
    let selFrag = [...selectedFragrances, fragrances];
    console.log(selFrag);
    setSelectedFragrances(selFrag);
    // setSelectedFragrances((prevSelected) => {
    //   const isSelected = prevSelected.includes(fragrances);
    //   const updatedSelected = isSelected
    //     ? prevSelected.filter((item) => item !== fragrances)
    //     : [...prevSelected, fragrances];
    //   console.log("Updated selected fragrances:", updatedSelected);
    //   return updatedSelected;
    // });
  };

  const handlePrevious = () => {
    navigation.navigate("PollScreen1");
  };

  const handleNext = () => {
    if (selectedFragrances.length === 0) {
      // Display an alert if no fragrance type is chosen
      Alert.alert("Error", "Please select at least one fragrance type");
      return;
    }
    navigation.navigate("PollScreen3", {
      gender: gender,
      fragrances: selectedFragrances,
    });
  };

  return (
    <ScrollView>
      <Background source={require("../assets/images/login_screen.png")}>
        <PollsHeader />
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
            What are your fragrance types?
          </Text>
          <View style={styles.cardsContainer}>
            {fragrances.map((fragrance, index) => (
              <Card
                key={index}
                style={[
                  styles.card,
                  selectedFragrances.includes(fragrance.title) &&
                    styles.selectedCard,
                ]}
                onPress={() => handleSelectFragrance(fragrance.title)}
              >
                <Card.Content>
                  <Text
                    numberOfLines={4}
                    style={[
                      styles.cardTitle,
                      {
                        color: titleColors[index],
                      },
                    ]}
                  >
                    {fragrance.title}
                  </Text>
                  <Text numberOfLines={4} style={styles.cardDescription}>
                    {fragrance.description}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <NavigationButton
            onPress={handlePrevious}
            text="Back"
            buttonColor="#EDBF47"
            style={styles.button}
          />
          <NavigationButton
            onPress={handleNext}
            text="Next"
            buttonColor="#EDBF47"
            style={styles.button}
          />
        </View>
      </Background>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
    marginBottom: 20,
  },
  cardsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: 150,
    margin: 10,
  },
  selectedCard: {
    borderColor: "#EDBF47",
    borderWidth: 2,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 18,
    textAlign: "center",
  },
  cardDescription: {
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

export default PollScreen2;
