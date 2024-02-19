import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardBathType = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedShower, setSelectedShower] = useState(null);

  const renderCard = (label, description) => {
    const isActive = selectedShower === label;
    return (
      <TouchableOpacity
        onPress={() => {
          console.log("Selected shower:", label);
          setSelectedShower(label);
        }}
      >
        <Card
          style={[
            styles.card,
            { borderWidth: 2, borderColor: isActive ? "#EDBF47" : "white" },
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
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cardContainer}>
      {[
        { label: "Hot Shower", description: "Description for Hot Shower" },
        { label: "Cold Shower", description: "Description for Cold Shower" },
        { label: "Warm Shower", description: "Description for Warm Shower" },
      ].map((data, index) => (
        <View key={index}>{renderCard(data.label, data.description)}</View>
      ))}
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
    width: 150,
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default CustomCardBathType;
