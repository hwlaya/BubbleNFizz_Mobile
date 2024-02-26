import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-paper";
import HomeHeader from "../components/HomeHeader";
import CustomAdminButtons from "../components/CustomAdminButtons";

const AdminDashboardScreen = () => {
  return (
    <ScrollView>
      <HomeHeader
        title="Bubble N' Fizz"
        showMenuIcon={true}
        showShoppingIcon={true}
      />
      <View style={styles.container}>
        <Text
          variant="displayMedium"
          style={{
            padding: 10,
            fontFamily: "LexendExa-ExtraLight",
            textAlign: "flex-start",
          }}
        >
          Admin
        </Text>

        <CustomAdminButtons />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AdminDashboardScreen;
