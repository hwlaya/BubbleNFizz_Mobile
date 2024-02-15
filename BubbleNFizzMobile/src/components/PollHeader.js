import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const PollHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={{ fontFamily: "Poppins-ExtraBold" }} variant="displayMedium">
        Bubble N Fizz
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    marginTop: 20,
  },
});

export default PollHeader;
