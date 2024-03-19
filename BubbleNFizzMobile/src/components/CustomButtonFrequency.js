import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Button, Text } from "react-native-paper";

const CustomButtonFrequency = ({ setDay }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedDay, setSelectedDay] = useState(null);

  const handleSelect = (day) => {
    console.log("Selected Bath Day:", day);
    setDay(day);
    setSelectedDay(day);
  };

  const renderButton = (label) => {
    const isActive = selectedDay === label;
    return (
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={[
            styles.buttonStyle,
            { backgroundColor: isActive ? "#EDBF47" : "grey" },
          ]}
          onPress={() => handleSelect(label)}
        >
          <Text
            style={[
              styles.textStyle,
              { color: isActive ? "white" : "#EDBF47" },
            ]}
          >
            {label}
          </Text>
        </Button>
      </View>
    );
  };

  return (
    <View style={[styles.buttonContainer, { width: windowWidth }]}>
      {renderButton("1x Day")}
      {renderButton("2x Day")}
      {renderButton("3x Day")}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10, // Adjust margin top if necessary
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

export default CustomButtonFrequency;
