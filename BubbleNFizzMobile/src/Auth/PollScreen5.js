import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Image } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollHeader from "../components/PollHeader";
import NavigationButton from "../components/NavigationButton";

const PollScreen5 = () => {
  const navigation = useNavigation();

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollHeader />
      <View style={styles.container}>
        <Text style={styles.question}>What Texture Do You Prefer?</Text>
        <View style={styles.cardContainer}>
          <Card style={styles.card}>
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              Lightweight skin care product with a high concentration of active
              ingredients.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              A care that acts in depth despite its application on the surface.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              The perfect consistency if you like layered products.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              If you want a touch of nature.
            </Text>
          </Card>
          <Card style={styles.card}>
            <Image
              source={require("../assets/images/bg_object2.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              A comfortable and milky creamy texture.
            </Text>
          </Card>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        {/* Previous Button */}
        <NavigationButton
          onPress={() => {
            console.log("Previous Pressed");
            navigation.navigate("PollScreen4");
          }}
          text="Back"
          buttonColor="#EDBF47"
          style={styles.button}
        />
        {/* Next Button */}
        <NavigationButton
          onPress={() => {
            console.log("Next Pressed");
            navigation.navigate("PollScreen6");
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
  container: {
    flex: 1,
    padding: 16,
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
  question: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  card: {
    width: "48%",
    marginBottom: 16,
    alignItems: "center",
    padding: 10,
  },
  cardImage: {
    //Manipulate this part if image not showing
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default PollScreen5;
