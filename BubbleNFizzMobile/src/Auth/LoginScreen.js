import React, { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Background from "../components/Background";
import { Text, TextInput, Button } from "react-native-paper";
import { UserContext } from "../providers/UserProvider";
import PollHeader from "../components/PollHeader";
import api from "../../config/api";

const LoginScreen = () => {
  const navigation = useNavigation();
  const user = useContext(UserContext);
  const [email, setEmail] = useState("lakers@email.com");
  const [password, setPassword] = useState("Password1!");

  const [passwordVisible, setPasswordVisible] = useState(false);

  const { width, height } = Dimensions.get("window");

  const onSubmitLogin = () => {
    if (email === "" || password === "") {
      Alert.alert("Please enter email and password");
      setLoading(false);
    } else {
      api
        .post("/mobilelogin", {
          email: email,
          password: password,
        })
        .then((response) => {
          // const userRole = response.data.user_profile.role;
          console.log(response.data.user);
          user.user = response.data.user;
          const userRole = response.data.user.user_role;

          console.log(userRole);
          if (userRole != 3) {
            navigation.navigate("AdminStack");
          } else {
            if (response.data.user.profile === null) {
              navigation.navigate("PollScreen1");
            } else {
              navigation.navigate("DrawerStack");
            }
          }

          // if (userRole === 1 || userRole === 2 || userRole === 3) {
          //   user.user = response.data.user_profile;
          //   user.userProfile = response.data.user_profile;
          //   console.log(response.data);

          //   if (userRole === 1) {
          //     navigation.navigate("AdminDashboardScreen");
          //   } else if (userRole === 2) {
          //     navigation.navigate("StaffDashboardScreen");
          //   } else if (user === 3) {
          //     navigation.navigate("PollScreen1");
          //   }
          // } else {
          //   Alert.alert("Invalid user");
          // }
        })
        .catch((err) => {
          console.log(err.response);
          Alert.alert("Error!", "Invalid credentials. Please try again.");
        });
    }
  };
  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <View style={[styles.box, { width: width * 1, height: height * 0.5 }]}>
          <Text
            style={{ fontFamily: "Poppins-Light" }}
            variant="headlineMedium"
          >
            {" "}
            LOG IN{" "}
          </Text>
          <View style={styles.bodyContainer}>
            <Text style={styles.inputText}> USERNAME OR EMAIL </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              value={email}
              onChangeText={setEmail}
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <Text> PASSWORD </Text>
            <TextInput
              style={styles.input}
              mode="flat"
              outlineColor="white"
              secureTextEntry={!passwordVisible}
              value={password}
              onChangeText={setPassword}
              right={
                <TextInput.Icon
                  icon={passwordVisible ? "eye-off" : "eye"}
                  iconColor={"black"}
                  onPress={() => setPasswordVisible(!passwordVisible)}
                />
              }
              onFocus={() => console.log("Focused")}
              onBlur={() => console.log("Blurred")}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("RegisterScreen");
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Text style={styles.registerText}> New to Bubble N Fizz? </Text>
                <Text style={styles.registerText2}>Sign up </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{ alignSelf: "center" }}>
            <Button
              mode="elevated"
              buttonColor="#EDBF47"
              onPress={onSubmitLogin}
              // onPress={() => {
              //   navigation.navigate("PollScreen1");
              // }}
            >
              <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>SUBMIT</Text>
            </Button>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    padding: 10,
    marginTop: 20,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
  input: {
    backgroundColor: "white",
    height: 60,
    width: 300,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: "#000000",
    borderLeftWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 0,
    borderTopWidth: 0,
    shadowColor: "#EDBF47",
    shadowOffset: {
      width: 0,
      height: 4,
      shadowOpacity: 0.1,
      shadowRadius: 10,
      elevation: 7,
    },
  },
  inputText: {
    fontFamily: "LexendExa-ExtraLight",
  },
  registerText: {
    fontFamily: "Poppins-SemiBold",
  },
  registerText2: {
    fontFamily: "Poppins-SemiBold",
    color: "red",
  },
});
export default LoginScreen;
