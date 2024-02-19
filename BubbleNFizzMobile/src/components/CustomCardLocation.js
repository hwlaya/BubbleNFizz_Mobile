import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardLocation = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleSelect = (location) => {
    console.log("Selected location:", location);
    setActiveCard(location);
  };

  const renderCard = (label) => {
    const isActive = activeCard === label;
    return (
      <TouchableOpacity style={styles.card} onPress={() => handleSelect(label)}>
        <View style={styles.cardContent}>
          <Card
            style={[
              styles.cardItem,
              { borderColor: isActive ? "#EDBF47" : "white" },
            ]}
          >
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              {label}
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cardContainer}>
      {renderCard("Dry or desert climate")}
      {renderCard("Extremely hot or cold climate")}
      {renderCard("City/Urban Area")}
      {renderCard("Mountain/high altitude environment.")}
      {renderCard("Coastal/beach area")}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: 150, // Set a fixed width for all cards
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  cardContent: {
    width: "100%",
    height: 180, // Set a fixed height for all cards
  },
  cardItem: {
    borderWidth: 2,
    height: "105%", // Ensure the card takes up the full height of the cardContent
    borderColor: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
    borderRadius: 10,
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default CustomCardLocation;
