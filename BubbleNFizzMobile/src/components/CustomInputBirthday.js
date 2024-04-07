// CustomInputBirthday component
import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";
import moment from "moment";

const CustomInputBirthday = ({ label, value, onChangeText }) => {
  const [error, setError] = useState(null);

  const handleTextChange = (text) => {
    onChangeText(text); // Update parent component state

    // Perform validation
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (text && !regex.test(text)) {
      setError("Invalid date format. Please use YYYY-MM-DD.");
    } else {
      setError(null);
    }
  };

  return (
    <View>
      <Text style={styles.inputText} variant="bodySmall">
        {label}
      </Text>
      <TextInput
        style={styles.input}
        mode="flat"
        outlineColor="white"
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
        value={value}
        onChangeText={handleTextChange} // Use the modified onChangeText function
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 60,
    width: 300,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "#000000",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    shadowColor: "#EDBF47",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    elevation: 7,
  },
  inputText: {
    fontFamily: "LexendExa-ExtraLight",
  },
  error: {
    color: "red",
    fontSize: 12,
  },
});

export default CustomInputBirthday;
