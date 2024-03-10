import React, { useContext, useEffect, useState } from "react";
import { Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-paper";
import { UserContext } from "../providers/UserProvider";
import { useNavigation } from "@react-navigation/native";

function ProfileScreen() {
  const { user } = useContext(UserContext);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.profileInfo}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../assets/images/user.png")}
          />
        </View>
        <View style={styles.profileDetails}>
          <Text style={styles.name}>{user.name}</Text>
          <TouchableOpacity
            style={styles.editProfileButton}
            onPress={navigation.navigate("EditProfile")}
          >
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
          <TouchableOpacity onPress={console.log("My Account")}>
            <Image
              source={require("../assets/images/user.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <Text style={styles.buttonLabel}>My Account</Text>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity onPress={console.log("My Purchases")}>
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

      <View style={styles.detailsContainer}>
        <Text style={styles.text}>Email: {user.email}</Text>
        <Text style={styles.text}>Name: {user.name}</Text>
        <Text style={styles.text}>Address: {user.profile.address}</Text>
        <Text style={styles.text}>Birthday: {user.profile.birthday}</Text>
        <Text style={styles.text}>City: {user.profile.city}</Text>
        <Text style={styles.text}>Contact No: {user.profile.contact_no}</Text>
      </View>
    </View>
  );
}

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
  detailsContainer: {
    borderColor: "gray",
    borderWidth: 1,
    flex: 1,
    width: "100%",
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: "left",
  },
});

export default ProfileScreen;
