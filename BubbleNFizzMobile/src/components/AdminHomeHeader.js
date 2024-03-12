import React from "react";
import { View, useWindowDimensions, StyleSheet } from "react-native";
import { IconButton, Title } from "react-native-paper";
import { useNavigation, DrawerActions } from "@react-navigation/native";

const AdminHomeHeader = ({ title, showMenuIcon }) => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const openDrawer = () => {
    navigation.dispatch(DrawerActions.openDrawer());
  };
  return (
    <View style={styles.container}>
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
          flex: 1,
          textAlign: "center",
          paddingVertical: windowWidth * 0,
          paddingHorizontal: windowWidth * 0.03,
          fontFamily: "Poppins-ExtraBold",
          fontSize: 26,
          marginTop: 20,
          marginBottom: 20,
          right: 30,
        }}
      >
        {title}
      </Title>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    marginTop: 30,
  },
});
export default AdminHomeHeader;
