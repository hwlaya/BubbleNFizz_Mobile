import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, Text } from "react-native";
import InitialLoginScreen from "../Auth/InitialLoginScreen";
import LoginScreen from "../Auth/LoginScreen";
import RegisterScreen from "../Auth/RegisterScreen";
import PollFirstScreen from "../Auth/PollFirstScreen";
import PollSecondScreen from "../Auth/PollSecondScreen";

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
      <AuthStack.Screen name="PollFirstScreen" component={PollFirstScreen} />
      <AuthStack.Screen name="PollSecondScreen" component={PollSecondScreen} />
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
        <AuthStack.Screen name="PollFirstScreen" component={PollFirstScreen} />
        <AuthStack.Screen
          name="PollSecondScreen"
          component={PollSecondScreen}
        />
        <AuthStack.Screen name="Home" component={HomeScreen} />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}
