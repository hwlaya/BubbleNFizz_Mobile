import React from "react";
import { View, StyleSheet, useWindowDimensions, Button } from "react-native";
import { Text } from "react-native-paper";

const CustomButtonFrequency = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.buttonContainer}>
      <View style={{ padding: 10 }}>
        <Button
          buttonColor="#EDBF47"
          style={{ height: 50, width: 180, margin: 10 }}
        >
          <Text style={styles.textStyle}>1 Day</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          buttonColor="#EDBF47"
          style={{ height: 50, width: 180, margin: 10 }}
        >
          <Text style={styles.textStyle}>2 Days</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button buttonColor="#EDBF47" style={{ height: 50, width: 180 }}>
          <Text style={styles.textStyle}>3 Days +</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
  },
});
export default CustomButtonFrequency;
