import { StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import { Text, TextInput } from "react-native-paper";

const CustomInputContactNo = ({ label, value, onChangeText }) => {
  const [error, setError] = useState(null);

  const handleTextChange = (text) => {
    onChangeText(text);

    const regex = /^(09|\+639)\d{9}$/;
    if (text && !regex.test(text)) {
      const length = text.length;
      if (length === 0) {
        setError("Please enter a phone number.");
      } else if (length < 11) {
        setError("Invalid phone number. Must contain exactly 11 digits.");
      } else {
        setError("Invalid phone number. Must begin with +63 or 09.");
      }
    } else {
      setError(null);
    }
  };
  return (
    <View>
      <Text style={styles.inputText} variant="bodySmall">{label}</Text>
      <TextInput
        style={styles.input}
        mode="flat"
        outlineColor="white"
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
        value={value}
        onChangeText={handleTextChange}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

export default CustomInputContactNo;

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
})