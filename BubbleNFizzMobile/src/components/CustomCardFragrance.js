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

  const handleSelectFragrance = (fragrance) => {
    setSelectedFragrance(fragrance);
    onSelect(fragrance)
  };

  const renderCard = (
    title,
    label,
    backgroundColor,
    description,
    selectedFragrance
  ) => {
    const isActive = selectedFragrance === label;
    return (
      <TouchableOpacity onPress={() => handleSelectFragrance(title)}>
        <View>
          <Card
            style={[
              styles.card,
              { borderWidth: 2, borderColor: isActive ? "#EDBF47" : "white" },
            ]}
          >
            <Text numberOfLines={1} style={styles.cardTitle}>
              {label}
            </Text>
            <View style={styles.circleContainer}>
              <View
                style={[styles.circle, { backgroundColor: backgroundColor }]}
              />
            </View>
            <Text numberOfLines={6} style={styles.cardLabel}>
              {description}
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardRow}>
        {renderCard(
          "Fresh",
          "Fresh",
          "#DAF7A6",
          "Comprise of citrus, water and green notes.",
          selectedFragrance
        )}
        {renderCard(
          "Floral",
          "Floral",
          "#FF5733",
          "Sweet and flowery scent such as roses, jasmine, lilies and peonies.",
          selectedFragrance
        )}
      </View>
      <View style={styles.cardRow}>
        {renderCard(
          "Woody",
          "Woody",
          "#FFC300",
          "Mysterious and captivating scent favoured like cedarwood, sandalwood, vetiver and amber.",
          selectedFragrance
        )}
        {renderCard(
          "Oriental",
          "Oriental",
          "#C70039",
          "Luxurious fragrance family, oriental from floral oriental, soft oriental and woody oriental.",
          selectedFragrance
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "90%",
    marginBottom: 12,
    alignItems: "center",
  },
  card: {
    width: 150,
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
    height: 250,
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
    flexWrap: "wrap",
  },
});

export default CustomCardFragrance;
