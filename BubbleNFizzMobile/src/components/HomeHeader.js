import React from "react";
import { View, Text, useWindowDimensions } from "react-native";
import { IconButton, Title } from "react-native-paper";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const HomeHeader = ({ title, showMenuIcon, showShoppingIcon }) => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "white",
        marginTop: 30,
      }}
    >
      {showMenuIcon && (
        <IconButton
          icon="menu"
          onPress={() => {
            openDrawer();
            console.log("Menu icon pressed");
          }}
        />
      )}
      <Title
        onPress={() => {
          console.log(`${title} title pressed`);
        }}
        style={{
          padding: 8,
          fontFamily: "Poppins-ExtraBold",
          fontSize: windowWidth * 0.08,
          marginTop: 20,
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
