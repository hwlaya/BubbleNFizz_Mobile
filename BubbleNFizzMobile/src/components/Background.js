import React from "react";
import { ImageBackground } from "react-native";

const Background = ({ children, source }) => {
  return (
    <ImageBackground
      source={require("../assets/images/login_screen.png")}
      style={{ flex: 1, justifyContent: "flex-end", alignItems: "center" }}
    >
      {children}
    </ImageBackground>
  );
};

export default Background;
