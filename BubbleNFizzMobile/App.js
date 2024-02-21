// In App.js in a new project

import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, Layout } from "@ui-kitten/components";
import * as Font from "expo-font";
import MainNavigation from "./src/Navigation/MainNavigation";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from "react-native-safe-area-context";

// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

const fetchFonts = () => {
  return Font.loadAsync({
    "Poppins-ExtraBold": require("./src/assets/fonts/Poppins-ExtraBold.ttf"),
    "Poppins-Light": require("./src/assets/fonts/Poppins-Light.ttf"),
    "Poppins-SemiBold": require("./src/assets/fonts/Poppins-SemiBold.ttf"),
    "LexendExa-ExtraLight": require("./src/assets/fonts/LexendExa-ExtraLight.ttf"),
    "PaytoneOne-Regular": require("./src/assets/fonts/PaytoneOne-Regular.ttf"),
    "Rubik-Regular": require("./src/assets/fonts/Rubik-Regular.ttf"),
    "Inconsolata-Light": require("./src/assets/fonts/Inconsolata-Light.ttf"),
    "Inconsolata-Regular": require("./src/assets/fonts/Inconsolata-Regular.ttf"),
    "Inconsolata-SemiBold": require("./src/assets/fonts/Inconsolata-SemiBold.ttf"),
    "Inconsolata-Bold": require("./src/assets/fonts/Inconsolata-Bold.ttf"),
    "LilitaOne-Regular": require("./src/assets/fonts/LilitaOne-Regular.ttf"),
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    SplashScreen.preventAutoHideAsync(); // Prevent SplashScreen from auto-hiding
    loadFontsAndHideSplash();
  }, []);

  const loadFontsAndHideSplash = async () => {
    try {
      await fetchFonts();
      setFontLoaded(true);
      SplashScreen.hideAsync(); // Hide SplashScreen once fonts are loaded
    } catch (error) {
      console.log("Error loading fonts:", error);
    }
  };

  if (!fontLoaded) {
    return <View style={{ flex: 1 }} />; // Return an empty view until fonts are loaded
  }

  return (
    <SafeAreaProvider>
      <ApplicationProvider {...eva} theme={eva.light}>
        <MainNavigation />
      </ApplicationProvider>
    </SafeAreaProvider>
  );
}
