import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

const NavigationButton = ({ onPress, text, buttonColor }) => {
  return (
    <TouchableOpacity
      style={[styles.buttonContainer, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  text: {
    fontFamily: "LexendExa-ExtraLight",
    fontSize: 16,
    color: "#FFFFFF",
  },
});

export default NavigationButton;
