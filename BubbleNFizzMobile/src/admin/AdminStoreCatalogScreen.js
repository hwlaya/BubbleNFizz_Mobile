import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Text } from "react-native-paper";
import AdminHomeHeader from "../components/AdminHomeHeader";
import CustomAdminButtons from "../components/CustomAdminButtons";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

const AdminStoreCatalogScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <AdminHomeHeader
        title="Bubble N' Fizz"
        showMenuIcon={true}
        showShoppingIcon={true}
      />
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.title}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons
                name="arrow-back-circle-sharp"
                size={40}
                color="black"
              />
            </TouchableOpacity>
            <Text
              variant="displayMedium"
              style={{
                padding: 10,
                fontFamily: "LexendExa-ExtraLight",
              }}
            >
              Store Catalog Management
            </Text>
          </View>
          <CustomAdminButtons navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  bodyContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardRow: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    marginBottom: 10,
  },
  title: {
    flexDirection: "row",
    fontSize: 24,
    alignSelf: "flex-start",
    marginLeft: -10,
  },
});

export default AdminStoreCatalogScreen;
