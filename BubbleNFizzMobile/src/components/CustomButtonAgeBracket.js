import React, { useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { Button, Text } from "react-native-paper";

const CustomButtonAgeBracket = ({setAgeBracket}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedBracket, setSelectedBracket] = useState(null);

  const handleAge = (ageBracket) => {
    console.log("Selected Age Bracket:", ageBracket);
    setSelectedBracket(ageBracket);
    setAgeBracket(ageBracket)
  };

  const renderButton = (label) => {
    const isActive = selectedBracket === label;
    return (
      <View style={{ padding: 10 }}>
        <Button
          mode="contained"
          buttonColor="#EDBF47"
          style={[
            styles.buttonStyle,
            { backgroundColor: isActive ? "#EDBF47" : "grey" },
          ]}
          onPress={() => handleAge(label)}
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
      {renderButton("Under 18")}
      {renderButton("18-24")}
      {renderButton("25-34")}
      {renderButton("35-44")}
      {renderButton("45-55")}
      {renderButton("56+")}
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

export default CustomButtonAgeBracket;
