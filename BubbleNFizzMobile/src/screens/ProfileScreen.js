import React from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import TemporaryUser from "../providers/TemporaryUser";

const { name, picture } = TemporaryUser();

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image source={picture} style={styles.image} />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.name}>{name}</Text>
          <TouchableOpacity style={styles.editProfileButton}>
            <Text
              style={[styles.editProfileText, { color: "gray", fontSize: 12 }]}
            >
              Edit Profile
            </Text>
            <Image
              source={require("../assets/images/edit.png")}
              style={[styles.editProfileIcon, { tintColor: "gray" }]}
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => handleAccountPress()}>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>My Account</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => handlePurchasePress()}>
            <Image
              source={require("../assets/images/cart.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>My Purchases</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => handleNotificationPress()}>
            <Image
              source={require("../assets/images/notification.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>Notifications</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={() => handleViewedProductsPress()}>
            <Image
              source={require("../assets/images/eye.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel} numberOfLines={2}>
            Recently Viewed
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 40,
  },
  profileInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileDetails: {
    marginLeft: 10,
  },
  editProfileIcon: {
    width: 20,
    height: 20,
  },
  imageContainer: {
    borderRadius: 50,
    overflow: "hidden",
    marginRight: 10,
  },
  image: {
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignContent: "space-around",
    width: "100%",
    marginTop: 20,
  },
  buttonGroup: {
    flex: 1,
    alignItems: "center",
  },
  buttonLabel: {
    marginTop: 10,
    fontSize: 10,
    textAlign: "center", // Center the text within each button
  },
  icon: {
    width: 30,
    height: 30,
  },
  editProfileButton: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
  editProfileText: {
    marginRight: 5, // Add some spacing between the text and icon
  },
  editProfileIcon: {
    width: 20,
    height: 20,
  },
});

export default ProfileScreen;
