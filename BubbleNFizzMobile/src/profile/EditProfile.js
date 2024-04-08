import React, { useState, useContext, useEffect } from "react";
import {
  View,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Alert,
} from "react-native";
import Background from "../components/Background";
import { Text, TextInput, Button } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../providers/UserProvider";
import Loading from "../components/Loading";
import api from "../../config/api";

const EditProfile = () => {
  const navigation = useNavigation();
  const { width, height } = Dimensions.get("window");
  const [loading, setLoading] = useState(false);

  const user = useContext(UserContext);

  const [name, setName] = useState(user.user.name);
  const [email, setEmail] = useState(user.user.email);
  const [gender, setGender] = useState(user.user.profile.gender);
  const [contactNo, setContactNo] = useState(user.user.profile.contact_no);

  const [address, setAddress] = useState(user.user.profile.address);
  const [city, setCity] = useState(user.user.profile.city);
  const [postalCode, setPostalCode] = useState(user.user.profile.postal_code);

  const [password, setPassword] = useState("");
  const [nPassword, setNPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [nPasswordVisible, setNPasswordVisible] = useState(false);
  const [cPasswordVisible, setCPasswordVisible] = useState(false);

  useEffect(() => {
    setContactNo(user.user.profile.contact_no);

    setAddress(user.user.profile.address);
    setCity(user.user.profile.city);
    setPostalCode(user.user.profile.postal_code);

    setPassword(user.user.password);
    setNPassword(user.user.newPassword);
    setCPassword(user.user.confPassword);

    const unsubscribe = navigation.addListener("focus", () => {
      setContactNo(user.user.profile.contact_no);

      setAddress(user.user.profile.address);
      setCity(user.user.profile.city);
      setPostalCode(user.user.profile.postal_code);

      setPassword(user.user.password);
      setNPassword(user.user.newPassword);
      setCPassword(user.user.confPassword);
    });
    return unsubscribe;
  }, [navigation]);

  const handleEditProfileSubmit = () => {
    if (contactNo.length == 11) {
      const updatedContactNo = {
        user_id: user.user.id,
        contact_no: contactNo,
      };
      api
        .post("usermanagement/editcontactno", updatedContactNo)
        .then((response) => {
          console.log(response.data);
          setLoading(false);
          if (response.data.success == "true") {
            console.log(response.data);
            user.user = response.data.user;
            user.userProfile = response.data.user_profile;
            Alert.alert(
              "Success!",
              "You have successfully edited your profile"
            );
          }
        })
        .catch((err) => {
          setLoading(false);
          console.log(err.response.data);
        });
    } else {
      Alert.alert("Invalid Contact No!", "Please Enter 11 Digits Contact No");
    }
  };

  const handleChangeAddressSubmit = () => {
    const updatedAddress = {
      user_id: user.user.id,
      address: address,
      city: city,
      postal_code: postalCode,
    };
    api
      .post("usermanagement/editaddress", updatedAddress)
      .then((response) => {
        console.log(response.data);
        setLoading(false);
        if (response.data.success == "true") {
          console.log(response.data);
          user.user = response.data.user;
          user.userProfile = response.data.user_profile;
          Alert.alert("Success!", "You have successfully edited your profile");
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response.data);
      });
  };

  const handleChangePasswordSubmit = () => {
    if (password !== password) {
      alert("Current password is incorrect.");
    } else if (nPassword !== cPassword) {
      alert("New password and confirm password must match.");
    } else {
      // Send a request to update the user's password
      const newPasswordData = {
        user_id: user.user.id,
        newPassword: nPassword, // current pass
        currPassword: cPassword, //new pass
        // confPassword: cPassword, //confirm
      };

      console.log(newPasswordData);

      api
        .post("usermanagement/changepassword", newPasswordData)
        .then((response) => {
          setLoading(false);
          console.log(response.data);
          alert("Password changed successfully");
        })
        .catch((error) => {
          setLoading(false);
          console.log(error.response.data);
          // console.error("Error updating password:", error);
          alert("Failed to change password. Please try again.");
        });
    }
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back-circle-sharp" size={40} color="black" />
      </TouchableOpacity>
      <ScrollView styles={styles.scrollView}>
        <Loading loading={loading} />
        <View style={styles.container}>
          <View
            style={[styles.box, { width: width * 1, height: height * 0.6 }]}
          >
            <Text
              style={{ fontFamily: "Poppins-Light" }}
              variant="headlineMedium"
            >
              {" "}
              EDIT PROFILE{" "}
            </Text>
            <View style={styles.bodyContainer}>
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                NAME{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={name}
                editable={false}
              />

              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                EMAIL{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={email}
                editable={false}
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                GENDER{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={gender}
                editable={false}
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                CONTACT NO{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={contactNo}
                onChangeText={(value) => setContactNo(value)}
              />
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                mode="elevated"
                buttonColor="#EDBF47"
                onPress={handleEditProfileSubmit}
              >
                <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>
                  SUBMIT
                </Text>
              </Button>
            </View>
          </View>

          {/* CHANGE ADDRESS */}
          <View
            style={[styles.box, { width: width * 1, height: height * 0.5 }]}
          >
            <Text
              style={{ fontFamily: "Poppins-Light" }}
              variant="headlineMedium"
            >
              {" "}
              CHANGE ADDRESS{" "}
            </Text>
            <View style={styles.bodyContainer}>
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                ADDRESS{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={address}
                onChangeText={(value) => setAddress(value)}
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                CITY{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={city}
                onChangeText={(value) => setCity(value)}
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                POSTAL CODE{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={postalCode}
                onChangeText={(value) => setPostalCode(value)}
              />
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                mode="elevated"
                buttonColor="#EDBF47"
                onPress={handleChangeAddressSubmit}
              >
                <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>
                  SUBMIT
                </Text>
              </Button>
            </View>
          </View>

          {/* CHANGE PASSWORD */}
          <View
            style={[styles.box, { width: width * 1, height: height * 0.5 }]}
          >
            <Text
              style={{ fontFamily: "Poppins-Light" }}
              variant="headlineMedium"
            >
              {" "}
              CHANGE PASSWORD{" "}
            </Text>
            <View style={styles.bodyContainer}>
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                CURRENT PASSWORD{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={password}
                onChangeText={(value) => setPassword(value)}
                secureTextEntry={!passwordVisible}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? "eye-off" : "eye"}
                    iconColor={"black"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                NEW PASSWORD{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={nPassword}
                onChangeText={(value) => setNPassword(value)}
                secureTextEntry={!nPasswordVisible}
                right={
                  <TextInput.Icon
                    icon={nPasswordVisible ? "eye-off" : "eye"}
                    iconColor={"black"}
                    onPress={() => setNPasswordVisible(!nPasswordVisible)}
                  />
                }
              />
              <Text style={styles.inputText} variant="bodySmall">
                {" "}
                CONFIRM PASSWORD{" "}
              </Text>
              <TextInput
                style={styles.input}
                mode="flat"
                outlineColor="white"
                value={cPassword}
                onChangeText={(value) => setCPassword(value)}
                secureTextEntry={!cPasswordVisible}
                right={
                  <TextInput.Icon
                    icon={cPasswordVisible ? "eye-off" : "eye"}
                    iconColor={"black"}
                    onPress={() => setCPasswordVisible(!cPasswordVisible)}
                  />
                }
              />
            </View>
            <View style={{ alignSelf: "center" }}>
              <Button
                mode="elevated"
                buttonColor="#EDBF47"
                onPress={handleChangePasswordSubmit}
              >
                <Text style={{ fontFamily: "LexendExa-ExtraLight" }}>
                  SUBMIT
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
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
  backButton: {
    position: "absolute",
    top: 35,
    left: 10,
    zIndex: 1,
  },
});

export default EditProfile;
