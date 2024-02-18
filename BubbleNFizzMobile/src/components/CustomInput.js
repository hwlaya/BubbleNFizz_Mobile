import React from "react";
import { Input } from "@ui-kitten/components";
import { View, StyleSheet } from "react-native";
import { Text, TextInput } from "react-native-paper";

const CustomInput = ({ label }) => {
  return (
    <View>
      <Text style={styles.inputText} variant="bodySmall">
        {" "}
        {label}{" "}
      </Text>
      <TextInput
        style={styles.input}
        mode="flat"
        outlineColor="white"
        onFocus={() => console.log("Focused")}
        onBlur={() => console.log("Blurred")}
      />
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
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
    },
  },
  inputText: {
    fontFamily: "LexendExa-ExtraLight",
  },
});
export default CustomInput;
