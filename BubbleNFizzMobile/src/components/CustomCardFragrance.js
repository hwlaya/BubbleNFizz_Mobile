import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCard = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;
  return (
    <View style={styles.cardContainer}>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Fresh
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Floral
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Woody
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Oriental
        </Text>
      </Card>
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
export default CustomCard;
