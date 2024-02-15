import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { Card } from "react-native-paper";

const CustomCard = () => {
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
        <Text>Fresh</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Floral</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Woody</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Oriental</Text>
      </Card>
    </View>
  );
};

export default CustomCard;
