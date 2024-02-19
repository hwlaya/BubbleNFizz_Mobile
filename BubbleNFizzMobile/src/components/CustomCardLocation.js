import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardLocation = ({ onSelect }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleSelect = (location) => {
    setSelectedLocation(location);
    onSelect(location);
  };
  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity onPress={() => handleSelect("Dry or desert climate")}>
        <Card style={styles.card}>
          <Image
            source={require("../assets/images/bg_object2.png")}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={4} style={styles.cardLabel}>
            Dry or desert climate
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() =>
          handleSelect(
            "Hot/humid in the summer, moderate to severely cold winters."
          )
        }
      >
        <Card style={styles.card}>
          <Image
            source={require("../assets/images/bg_object2.png")}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={4} style={styles.cardLabel}>
            Hot/humid in the summer, moderate to severely cold winters.
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleSelect("City/Urban Area")}>
        <Card style={styles.card}>
          <Image
            source={require("../assets/images/bg_object2.png")}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={4} style={styles.cardLabel}>
            City/Urban Area
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => handleSelect("Mountain/high altitude environment.")}
      >
        <Card style={styles.card}>
          <Image
            source={require("../assets/images/bg_object2.png")}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={4} style={styles.cardLabel}>
            Mountain/high altitude environment.
          </Text>
        </Card>
      </TouchableOpacity>
      <TouchableOpacity>
        <Card style={styles.card}>
          <Image
            source={require("../assets/images/bg_object2.png")}
            resizeMode="cover"
            style={styles.cardImage}
          />
          <Text numberOfLines={4} style={styles.cardLabel}>
            Coastal/beach area
          </Text>
        </Card>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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
export default CustomCardLocation;
