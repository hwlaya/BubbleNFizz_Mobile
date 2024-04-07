import { useNavigation } from "@react-navigation/native";
import React, { useState, onPress, useContext } from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Background from "../components/Background";
import { Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import { UserContext } from "../providers/UserProvider";

const PollScreen1 = () => {
  const navigation = useNavigation();
  const windowWidth = useWindowDimensions().width;

  const { user } = useContext(UserContext);

  const [gender, setGender] = useState("");

  const handleSelectGender = () => {
    console.log("Selected gender:", gender);
    setGender(gender);
    navigation.navigate("PollScreen2", { gender: gender });
  };
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollsHeader />
      <View style={styles.container}>
        <View style={[styles.contentContainer, { width: windowWidth * 0.8 }]}>
          <View style={styles.bodyContainer}>
            <View style={{ flexDirection: "row" }}>
              <Text style={[styles.intro, { fontSize: windowWidth * 0.08 }]}>
                Hi,{" "}
              </Text>
              <Text style={[styles.name, { fontSize: windowWidth * 0.08 }]}>
                {user.name}
              </Text>
            </View>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              To get the best Bath
            </Text>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              experience, tell us about
            </Text>
            <Text style={[styles.textStyle, { fontSize: windowWidth * 0.05 }]}>
              yourself! Your response will be kept private.
            </Text>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                marginTop: 10,
              }}
            >
              <TouchableOpacity onPress={() => setGender("He")}>
                <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
                  He
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGender("She")}>
                <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
                  She
                </Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setGender("They")}>
                <Text style={[styles.title, { fontSize: windowWidth * 0.08 }]}>
                  They
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonContainer}>
            {/* ReusableButton for Next */}
            <NavigationButton
              onPress={handleSelectGender}
              text="Next"
              buttonColor="#EDBF47"
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: "10%",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "#EDBF47",
  },
  intro: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 34,
    color: "black",
  },
  name: {
    fontFamily: "Poppins-SemiBold",
    color: "#EDBF47",
  },
  textStyle: {
    fontFamily: "LexendExa-ExtraLight",
    textAlign: "center",
  },
  buttonContainer: {
    marginBottom: "5%",
  },
});

export default PollScreen1;
