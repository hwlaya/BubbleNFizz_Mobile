import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Text } from "react-native-paper";

const PollHeader = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.headerContainer}>
      <Text
        style={{
          fontFamily: "Poppins-ExtraBold",
          fontSize: windowWidth * 0.08,
        }}
        variant="displayMedium"
      >
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
