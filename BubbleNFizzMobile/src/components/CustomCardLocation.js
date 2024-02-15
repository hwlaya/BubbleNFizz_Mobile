import React from "react";
import { View, Text, Image, useWindowDimensions } from "react-native";
import { Card } from "react-native-paper";

const CustomCardimage = () => {
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
        <Text>Dry or desert climate</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Hot/humid in the summer, moderate to severely cold winters.</Text>
      </Card>
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Mountain/high altitude environment.</Text>
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
      <Card
        style={{
          width: windowWidth * 0.4,
          height: windowHeight * 0.15,
          borderRadius: 10,
        }}
      >
        <Text>Coastal/beach area</Text>
      </Card>
    </View>
  );
};

export default CustomCardimage;
