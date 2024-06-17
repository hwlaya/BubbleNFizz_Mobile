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
    const currentYear = new Date().getFullYear(); // Get current year dynamically
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
    
    if (text && !regex.test(text)) {
      setError("Invalid date format. Please use YYYY-MM-DD.");

      const [year, monthString, day] = text.split("-");
      const month = parseInt(monthString, 10) - 1; // Adjust month for array indexing (0-based)
    
      if (year < 1900 || year > currentYear) {
        setError(`Invalid year. Year must be between 1900 and ${currentYear}.`);
      }
    
      const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
      // Leap year check for February
      if (month === 1) {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
          daysInMonth[month] = 29; // Calculate days for leap year
        } else {
          daysInMonth[month] = 28; // Calculate days for non-leap year
        }
      }
    
      if (day < 1 || day > daysInMonth[month]) {
        setError(`Invalid day of the month ${month + 1}.`);
      }
    } else {
      setError(null)
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
