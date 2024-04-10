import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Alert,
  Image,
  ScrollView,
} from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen3 = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  const { gender, fragrances } = route.params;

  // Define textures with descriptions
  const textures = [
    {
      texture: "Foamy",
      description:
        "Light and airy textures that create a rich lather for cleansing and refreshing the skin.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      texture: "Exfoliating",
      description:
        "Gritty or granular textures that help slough away dead skin cells, leaving the skin smooth and revitalized.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      texture: "Bubbly",
      description:
        "Textures that produce abundant bubbles or fizz when agitated, adding a fun and playful element to bath time.",
      image: require("../assets/images/bestseller1.jpg"),
    },
    {
      texture: "Grainy",
      description:
        "Coarse or grainy textures that offer gentle exfoliation and may contain natural exfoliating particles like sugar or salt.",
      image: require("../assets/images/bestseller1.jpg"),
    },
  ];

  const [selectedTexture, setSelectedTexture] = useState(null);

  const handleSelectTexture = (texture) => {
    setSelectedTexture(texture);
    console.log("Selected texture:", texture);
  };

  const handlePrevious = () => {
    navigation.goBack();
  };

  const handleNext = () => {
    if (selectedTexture) {
      navigation.navigate("PollScreen4", {
        gender: gender,
        fragrances: fragrances,
        texture: selectedTexture,
      });
    } else {
      Alert.alert(
        "Select Texture",
        "Please select a texture before proceeding."
      );
    }
  };

  return (
    <ScrollView>
      <Background source={require("../assets/images/login_screen.png")}>
        <PollsHeader />
        <View style={styles.container}>
          <Text style={[styles.title, { fontSize: windowWidth * 0.07 }]}>
            What Texture do you prefer?
          </Text>
          <View style={styles.cardContainer}>
            {textures.map((texture, index) => (
              <Card
                key={index}
                style={[
                  styles.card,
                  selectedTexture === texture.texture && styles.selectedCard,
                ]}
                onPress={() => handleSelectTexture(texture.texture)}
              >
                <Card.Content>
                  <Text style={styles.cardLabel}>{texture.texture}</Text>
                  <Image source={texture.image} style={styles.cardImage} />
                  <Text numberOfLines={4} style={styles.cardDescription}>
                    {texture.description}
                  </Text>
                </Card.Content>
              </Card>
            ))}
          </View>
        </View>
        <View style={styles.buttonContainer}>
          {/* Previous Button */}
          <NavigationButton
            onPress={handlePrevious}
            text="Back"
            buttonColor="#EDBF47"
            style={styles.button}
          />
          {/* Next Button */}
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
  selectedCard: {
    borderColor: "#EDBF47",
    borderWidth: 2,
  },
  cardLabel: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  cardDescription: {
    fontSize: 14,
    textAlign: "center",
  },
  cardImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default PollScreen3;
