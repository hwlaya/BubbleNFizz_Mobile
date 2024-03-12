import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Text } from "react-native-paper";

const PollHeader = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const headerContainerStyles = {
    paddingVertical: windowHeight * 0.02, // Adjust vertical padding
    paddingHorizontal: windowWidth * 0.04, // Adjust horizontal padding
    marginTop: windowHeight * 0.01, // Adjust top margin
  };
  return (
    <View style={[styles.headerContainer, headerContainerStyles]}>
      <Text
        style={{
          fontFamily: "Poppins-ExtraBold",
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
