import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";

const CustomAdminButtons = ({ navigation }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const handleNavigation = (screenName) => {
    navigation.navigate(screenName);
  };

  const renderButton = (imageSource, label, screenName) => {
    return (
      <TouchableOpacity onPress={() => handleNavigation(screenName)}>
        <View style={{ padding: 10 }}>
          <Image source={imageSource} style={styles.imageStyle} />
          <Text style={styles.textStyle}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[styles.buttonContainer, { width: windowWidth }]}>
      {renderButton(require("../assets/images/plus.png"), "Add", "AddScreen")}
      {renderButton(require("../assets/images/edit.png"), "Edit", "EditScreen")}
      {renderButton(
        require("../assets/images/trash.png"),
        "Delete",
        "DeleteScreen"
      )}
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
    justifyContent: "space-around",
  },
  imageStyle: {
    width: 80, // Adjust image width
    height: 80, // Adjust image height
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    alignSelf: "center",
    padding: 5,
  },
});

export default CustomAdminButtons;
