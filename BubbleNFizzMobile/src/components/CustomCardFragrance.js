import React from "react";
import { View, Text, useWindowDimensions, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const CustomCard = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
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
      <Card style={styles.card}>
        <Text numberOfLines={1} style={styles.cardTitle}>
          Floral
        </Text>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: "#FF5733" }]} />
        </View>
        <Text numberOfLines={4} style={styles.cardLabel}>
          Sweet and flowery scent such as roses, jasmine, lilies and peonies.
        </Text>
      </Card>
      <Card style={styles.card}>
        <Text numberOfLines={1} style={styles.cardTitle}>
          Woody
        </Text>
        <View style={styles.circleContainer}>
          <View style={[styles.circle, { backgroundColor: "#FFC300" }]} />
        </View>
        <Text numberOfLines={6} style={styles.cardLabel}>
          Mysterious and captivating scent favoured like cedarwood, sandalwood,
          vetiver and amber.
        </Text>
      </Card>
      <Card style={styles.card}>
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
  );
};

const styles = StyleSheet.create({
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
  circleContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50, // This makes the View circular
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

export default CustomCard;
