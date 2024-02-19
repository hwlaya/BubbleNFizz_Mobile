import React from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Button, Text } from "react-native-paper";

const CustomButtonAgeBracket = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.buttonContainer}>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>Under 18</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>18-24</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>25-34</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>35-44</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>45-55</Text>
        </Button>
      </View>
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={styles.buttonStyle}
        >
          <Text style={styles.textStyle}>56+</Text>
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    height: 50,
    width: 180,
    margin: 10,
    borderRadius: 16,
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    alignSelf: "center",
    padding: 5,
  },
});

export default CustomButtonAgeBracket;
