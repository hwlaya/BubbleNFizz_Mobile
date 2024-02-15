import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Card } from "react-native-paper";

const CustomCardIngredients = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
      }}
    >
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Grown without the use of synthetic chemicals</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Often produced using artificial chemicals</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>
          composed of ingredients that are from nature and not artificial.
        </Text>
      </Card>
    </View>
  );
};

export default CustomCardIngredients;
