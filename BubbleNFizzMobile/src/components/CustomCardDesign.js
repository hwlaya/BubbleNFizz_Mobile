import React from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardDesign = () => {
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
          Vibrant colors are present in the product
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Colors present in the product are nonchalant
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Vivid and bold colors are present in the product
        </Text>
      </Card>
      <Card style={styles.card}>
        <Image
          source={require("../assets/images/bg_object2.png")}
          resizeMode="cover"
          style={styles.cardImage}
        />
        <Text numberOfLines={4} style={styles.cardLabel}>
          Product only has a single tone of color
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
export default CustomCardDesign;