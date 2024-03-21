import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, DataTable, Text } from "react-native-paper";
import AdminHomeHeader from "../components/AdminHomeHeader";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../providers/UserProvider";

const AdminDashboardScreen = () => {
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const [dashboardData, setDashboardData] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [monthlyLabel, setMonthlyLabel] = useState([]);
  const [monthlyData, setMonthlyData] = useState([]);

  const [salesReports, setSalesReports] = useState([]);
  const [salesData, setSalesData] = useState([]);
  const [salesLabel, setSalesLabel] = useState([]);

  // Redirect to customer poll if user is not customer
  useEffect(() => {
    if (user.user_role === 3) {
      Alert.alert("Redirecting...", "You will be redirected for shopping!", [
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("IndexScreen");
          },
        },
      ]);
    } else {
      console.log("not customer :D");
      console.log(user.profile === null);
    }

    //admin info API
    api
      .get("dashboard")
      .then((response) => {
        setDashboardData(response.data);
        console.log("yung data", response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

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
                <Text style={styles.titleCard}>Total Products</Text>
                <Text style={styles.data}>{dashboardData.product_counts}</Text>
              </Card>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#4d7c0f",
                }}
              >
                <Text style={styles.titleCard}>Total Revenue</Text>
                <Text style={styles.data}>{dashboardData.total_revenue}</Text>
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
                <Text style={styles.titleCard}>Total Customer</Text>
                <Text style={styles.data}>{dashboardData.total_customer}</Text>
              </Card>
              <Card
                style={{
                  borderRadius: 50,
                  width: "50%",
                  height: 100,
                  backgroundColor: "#1a56db",
                }}
              >
                <Text style={styles.titleCard}>Total Orders</Text>
                <Text style={styles.data}>{dashboardData.total_orders}</Text>
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
  titleCard: {
    textAlign: "center",
    paddingTop: 16,
    color: "white",
    fontFamily: "Poppins-SemiBold",
  },
  data: {
    textAlign: "center",
    paddingTop: 10,
    color: "white",
    fontSize: 20,
    fontFamily: "Poppins-SemiBold",
  },
});

export default AdminDashboardScreen;
