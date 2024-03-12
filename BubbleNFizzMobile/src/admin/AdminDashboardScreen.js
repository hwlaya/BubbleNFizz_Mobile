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
import { useNavigation } from "@react-navigation/native";

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <AdminHomeHeader title="Bubble N' Fizz" showMenuIcon={true} />
      <View style={styles.container}>
        <View style={styles.bodyContainer}>
          <View style={styles.title}>
            <Text
              variant="displayMedium"
              style={{
                padding: 10,
                fontFamily: "LexendExa-ExtraLight",
              }}
            >
              Dashboard
            </Text>
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.cardRow}>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#ffa008",
                }}
              >
                <Text style={{ textAlign: "center", paddingTop: 20 }}>
                  Total Products
                </Text>
              </Card>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#4d7c0f",
                }}
              >
                <Text style={{ textAlign: "center", paddingTop: 20 }}>
                  Total Revenue
                </Text>
              </Card>
            </View>
            <View style={styles.cardRow}>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#e02424",
                }}
              >
                <Text style={{ textAlign: "center", paddingTop: 20 }}>
                  Total Customer
                </Text>
              </Card>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#1a56db",
                }}
              >
                <Text style={{ textAlign: "center", paddingTop: 20 }}>
                  Total Orders
                </Text>
              </Card>
            </View>
          </View>
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
    fontSize: 24,
    alignSelf: "flex-start",
    marginLeft: -20,
  },
});

export default AdminDashboardScreen;
