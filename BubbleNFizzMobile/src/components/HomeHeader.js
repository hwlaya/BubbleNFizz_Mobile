import React from "react";
import { View, Text } from "react-native";
import { IconButton, Title } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const HomeHeader = ({ title, showMenuIcon, showShoppingIcon }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 20,
        padding: 10,
      }}
    >
      {showMenuIcon && (
        <IconButton
          icon="menu"
          onPress={() => {
            console.log("Menu icon pressed");
          }}
        />
      )}
      <Title
        onPress={() => {
          console.log(`${title} title pressed`);
        }}
      >
        {title}
      </Title>
      {showShoppingIcon && (
        <IconButton
          icon="shopping"
          onPress={() => {
            console.log("Shopping icon pressed");
            navigation.navigate("CartScreen");
          }}
        />
      )}
    </View>
  );
};

export default HomeHeader;
