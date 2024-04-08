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
              <FontAwesome5
                name="truck-loading"
                size={38}
                color="black"
                style={{ marginVertical: 15 }}
                onPress={() => navigation.navigate("MyPurchases")}
              />
            </TouchableOpacity>
            <Text style={styles.text}>My Orders</Text>
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

        {/* Profile More Details */}
        <View style={styles.profileDetails}>
          <Text style={styles.profileText}>
            Contact No:{"  "}
            <Text style={{ color: "black" }}>{user.profile.contact_no}</Text>
          </Text>
          <Text style={styles.profileText}>
            Address:{"  "}
            <Text style={{ color: "black" }}>{user.profile.address}</Text>
          </Text>
          <Text style={styles.profileText}>
            Birthday:{"  "}
            <Text style={{ color: "black" }}>{user.profile.birthday}</Text>
          </Text>
          <Text style={styles.profileText}>
            Gender:{"  "}
            <Text style={{ color: "black" }}>{user.profile.gender}</Text>
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
    backgroundColor: "#f2f2f2",
    borderRadius: 10,
    marginLeft: 10,
    fontFamily: "LexendExa-ExtraLight",
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    marginLeft: "-20%",
  },
  iconContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderWidth: 1.5,
    borderColor: "gray",
  },
  icon: {
    alignItems: "center",
    width: "20%", // Adjust the width as needed
    margin: 10, // Adjust the margin as needed
    textAlign: "center",
    justifyContent: "center",
  },
  text: {
    textAlign: "center",
    marginTop: 1,
    flexWrap: "wrap",
    textAlign: "center",
    fontFamily: "Inconsolata-Light",
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
    fontFamily: "Poppins-ExtraBold",
  },
  email: {
    fontFamily: "Inconsolata-Light",
  },

  profileDetails: {
    alignItems: "left",
    padding: 16,
    width: "100%",
  },
  profileText: {
    textAlign: "left",
    marginVertical: 5,
    fontFamily: "Rubik-Regular",
    fontSize: 16,
    color: "#E79E4F",
  },
});

export default ProfileIndex;
