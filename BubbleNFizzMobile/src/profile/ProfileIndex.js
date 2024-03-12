import React, { useContext, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { Icon, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { UserContext } from "../providers/UserProvider";
import { Feather, FontAwesome5 } from "@expo/vector-icons";
import HomeHeader from "../components/HomeHeader";
import Background from "../components/Background";
const ProfileIndex = () => {
  const navigation = useNavigation();
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   console.log(user.profile.birthday);
  // });

  return (
    <ImageBackground
      source={require("../assets/images/login_screen.png")}
      style={styles.background}
    >
      <HomeHeader
        title="Bubble N' Fizz"
        showMenuIcon={true}
        showShoppingIcon={true}
      />
      <View style={styles.container}>
        <View style={styles.profileInfo}>
          <Image
            style={styles.image}
            source={require("../assets/images/user.png")}
          />
          <View style={styles.nameDetails}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.email}>{user.email}</Text>
          </View>
        </View>
        {/* Icons */}

        <View style={styles.divider} />
        <View style={styles.iconContainer}>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Feather
                name="user"
                size={38}
                color="black"
                style={{ marginVertical: 15 }}
                onPress={() => navigation.navigate("EditProfile")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>My Account</Text>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Feather
                name="shopping-cart"
                size={38}
                color="black"
                style={{ marginVertical: 15 }}
              />
            </TouchableOpacity>
            <Text style={styles.text}>My Purchases</Text>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <Feather
                name="shopping-cart"
                size={38}
                color="black"
                style={{ marginVertical: 15 }}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Notifications</Text>
          </View>
          <View style={styles.icon}>
            <TouchableOpacity>
              <FontAwesome5
                name="eye"
                size={38}
                color="black"
                style={{ marginVertical: 15 }}
              />
            </TouchableOpacity>
            <Text style={styles.text}>Recently Viewed</Text>
          </View>
        </View>
        <View style={styles.divider} />

        {/* Profile More Details */}
        <View style={styles.profileDetails}>
          <Text style={styles.profileText}>
            Contact No: {user.profile.contact_no}
          </Text>
          <Text style={styles.profileText}>
            Address: {user.profile.address}
          </Text>
          <Text style={styles.profileText}>
            Birthday: {user.profile.birthday}
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  nameDetails: {
    padding: 16,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: "-25%",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icon: {
    alignItems: "center",
    width: "20%", // Adjust the width as needed
    margin: 12, // Adjust the margin as needed
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 5,
    flexWrap: "wrap",
    textAlign: "center",
  },
  profileText: {
    textAlign: "left",
    marginVertical: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
  },
  email: {
    fontStyle: "italic",
  },
  divider: {
    borderColor: "black",
    borderWidth: 0.5,
    width: "100%",
  },
  profileDetails: {
    alignItems: "left",
  },
});

export default ProfileIndex;
