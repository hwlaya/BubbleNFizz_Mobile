import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";
import Background from "../components/Background";
import { Text, Button } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen7 = () => {
  const navigation = useNavigation();

  const { width, height } = Dimensions.get("window");
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.box, { width: 300, height: 300 }]}>
          <Text
            style={{
              fontFamily: "Poppins-SemiBold",
              fontSize: 34,
              alignSelf: "center",
            }}
            variant="displaySmall"
          >
            {" "}
            How often do you take a bath?
          </Text>
          <View
            style={{
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ padding: 10 }}>
              <Button
                buttonColor="#EDBF47"
                style={{ height: 50, width: 180, margin: 10 }}
              >
                <Text style={styles.textStyle}>1 Day</Text>
              </Button>
            </View>
            <View style={{ padding: 10 }}>
              <Button
                buttonColor="#EDBF47"
                style={{ height: 50, width: 180, margin: 10 }}
              >
                <Text style={styles.textStyle}>2 Days</Text>
              </Button>
            </View>
            <View style={{ padding: 10 }}>
              <Button buttonColor="#EDBF47" style={{ height: 50, width: 180 }}>
                <Text style={styles.textStyle}>3 Days +</Text>
              </Button>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen6");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => {
            console.log("Next Pressed");
            navigation.navigate("PollScreen8");
          }}
          text="Next"
          buttonColor="#EDBF47"
          style={styles.button}
        />
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    padding: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginBottom: 10,
    width: "150%",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  box: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 20,
    alignSelf: "center",
    padding: 10,
  },
});

export default PollScreen7;
