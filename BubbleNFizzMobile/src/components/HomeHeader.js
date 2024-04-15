import React from "react";
import { View, useWindowDimensions } from "react-native";
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
        marginTop: 10,
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
          paddingVertical: windowWidth * 0,
          paddingHorizontal: windowWidth * 0.03,
          fontFamily: "Poppins-ExtraBold",
          fontSize: 26,
          marginTop: 20,
          marginBottom: 20,
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
