import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";

const HeroSection = () => {
  return (
    <View style={styles.heroSection}>
      <Image
        source={require("../assets/images/richpeoplesoap.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.heroText}>Rich</Text>
        <Text style={styles.heroText}>People's</Text>
        <Text style={styles.heroText}>Soap</Text>
        <Button
          style={[{ marginVertical: 10, borderRadius: 6 }]}
          mode="contained"
          buttonColor="#E79E4F"
          onPress={() => console.log("Bath Now button pressed")}
        >
          Bath Now!
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heroSection: {
    alignItems: "center",
    justifyContent: "center",
    height: 240,
  },
  heroText: {
    fontSize: 36,
    color: "black",
    fontFamily: "PaytoneOne-Regular",
    marginVertical: -10,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  textContainer: {
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default HeroSection;
