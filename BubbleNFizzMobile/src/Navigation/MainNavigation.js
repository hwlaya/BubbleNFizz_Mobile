import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import InitialLoginScreen from "../Auth/InitialLoginScreen";
import LoginScreen from "../Auth/LoginScreen";
import RegisterScreen from "../Auth/RegisterScreen";
import PollScreen1 from "../Auth/PollScreen1";
import PollScreen2 from "../Auth/PollScreen2";
import PollScreen3 from "../Auth/PollScreen3";
import PollScreen4 from "../Auth/PollScreen4";
import PollScreen5 from "../Auth/PollScreen5";
import PollScreen6 from "../Auth/PollScreen6";
import PollScreen7 from "../Auth/PollScreen7";
import PollScreen10 from "../Auth/PollScreen10";
import PollScreen9 from "../Auth/PollScreen9";
import PollScreen8 from "../Auth/PollScreen8";
import PollProfileScreen from "../Auth/PollProfileScreen";

const AuthStack = createNativeStackNavigator();

const AuthStackScreen = () => {
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name="InitialLoginScreen"
        component={InitialLoginScreen}
      />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
      <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
      <AuthStack.Screen name="PollScreen1" component={PollScreen1} />
      <AuthStack.Screen name="PollScreen2" component={PollScreen2} />
      <AuthStack.Screen name="PollScreen3" component={PollScreen3} />
      <AuthStack.Screen name="PollScreen4" component={PollScreen4} />
      <AuthStack.Screen name="PollScreen5" component={PollScreen5} />
      <AuthStack.Screen name="PollScreen6" component={PollScreen6} />
      <AuthStack.Screen name="PollScreen7" component={PollScreen7} />
      <AuthStack.Screen name="PollScreen8" component={PollScreen9} />
      <AuthStack.Screen name="PollScreen9" component={PollScreen9} />
      <AuthStack.Screen name="PollScreen9" component={PollScreen9} />
      <AuthStack.Screen
        name="PollProfileScreen"
        component={PollProfileScreen}
      />
    </AuthStack.Navigator>
  );
};

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function MainNavigation() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator screenOptions={{ headerShown: false }}>
        <AuthStack.Screen
          name="InitialLoginScreen"
          component={InitialLoginScreen}
        />
        <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
        <AuthStack.Screen name="RegisterScreen" component={RegisterScreen} />
        <AuthStack.Screen name="PollScreen1" component={PollScreen1} />
        <AuthStack.Screen name="PollScreen2" component={PollScreen2} />
        <AuthStack.Screen name="PollScreen3" component={PollScreen3} />
        <AuthStack.Screen name="PollScreen4" component={PollScreen4} />
        <AuthStack.Screen name="PollScreen5" component={PollScreen5} />
        <AuthStack.Screen name="PollScreen6" component={PollScreen6} />
        <AuthStack.Screen name="PollScreen7" component={PollScreen7} />
        <AuthStack.Screen name="PollScreen8" component={PollScreen8} />
        <AuthStack.Screen name="PollScreen9" component={PollScreen9} />
        <AuthStack.Screen
          name="PollProfileScreen"
          component={PollProfileScreen}
        />
        <AuthStack.Screen name="PollScreen10" component={PollScreen10} />

        <AuthStack.Screen name="Home" component={HomeScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
