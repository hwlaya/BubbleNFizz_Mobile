import React, { useState } from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardFragrance = ({ onSelect }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedFragrance, setSelectedFragrance] = useState(null);

  const handleSelect = (fragrance) => {
    setSelectedFragrance(fragrance);
    onSelect(fragrance);
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleSelect("Fresh")}>
        <View>
          <Card
            style={[
              styles.card,
              selectedFragrance === "Fresh" && styles.selectedCard,
            ]}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>
              Fresh
            </Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, { backgroundColor: "#DAF7A6" }]} />
            </View>
            <Text numberOfLines={4} style={styles.cardLabel}>
              Comprise of citrus, water and green notes.
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelect("Floral")}>
        <View>
          <Card
            style={[
              styles.card,
              selectedFragrance === "Floral" && styles.selectedCard,
            ]}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>
              Floral
            </Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, { backgroundColor: "#FF5733" }]} />
            </View>
            <Text numberOfLines={4} style={styles.cardLabel}>
              Sweet and flowery scent such as roses, jasmine, lilies and
              peonies.
            </Text>
          </Card>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelect("Woody")}>
        <View>
          <Card
            style={[
              styles.card,
              selectedFragrance === "Woody" && styles.selectedCard,
            ]}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>
              Woody
            </Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, { backgroundColor: "#FFC300" }]} />
            </View>
            <Text numberOfLines={6} style={styles.cardLabel}>
              Mysterious and captivating scent favoured like cedarwood,
              sandalwood, vetiver and amber.
            </Text>
          </Card>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => handleSelect("Oriental")}>
        <View>
          <Card
            style={[
              styles.card,
              selectedFragrance === "Oriental" && styles.selectedCard,
            ]}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>
              Oriental
            </Text>
            <View style={styles.circleContainer}>
              <View style={[styles.circle, { backgroundColor: "#C70039" }]} />
            </View>
            <Text numberOfLines={5} style={styles.cardLabel}>
              Luxurious fragrance family, oriental from floral oriental, soft
              oriental and woody oriental.
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: "column",
    justifyContent: "space-between", // Adjust as needed
    // Adjust as needed
    borderWidth: 1,
    borderColor: "black",
    width: 300,
    height: 600,
  },
  card: {
    width: "53%",
    marginBottom: 10,
    alignItems: "center",
    padding: 10,
    borderWidth: 2,
    borderColor: "white",
  },
  selectedCard: {
    borderColor: "#EDBF47",
  },
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 80,
    height: 80,
    borderRadius: 50,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    textAlign: "center",
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default CustomCardFragrance;
