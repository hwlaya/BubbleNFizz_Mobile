import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardTexture = () => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedTexture, setSelectedTexture] = useState(null);

  const handleSelect = (texture) => {
    console.log("Selected Texture:", texture);
    setSelectedTexture(texture);
  };

  const renderCard = (description) => {
    const isActive = selectedTexture === description;
    return (
      <TouchableOpacity onPress={() => handleSelect(description)}>
        <View>
          <Card
            style={[
              styles.card,
              { borderWidth: 2, borderColor: isActive ? "#EDBF47" : "white" },
            ]}
          >
            <Image
              source={require("../assets/images/login_screen.png")}
              resizeMode="cover"
              style={styles.cardImage}
            />
            <Text numberOfLines={4} style={styles.cardLabel}>
              {description}
            </Text>
          </Card>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.cardContainer}>
      {renderCard(
        "Lightweight skin care product with a high concentration of active ingredients"
      )}
      {renderCard(
        "A care that acts in depth despite its application on the surface"
      )}
      {renderCard("The perfect consistency if you like layered products")}
      {renderCard("*INSERT DESCRIPTION HERE*")}
      {renderCard("*INSERT DESCRIPTION HERE*")}
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
    width: 130,
    marginBottom: 16,
    alignItems: "center",
    padding: 5,
    height: 200,
  },
  cardImage: {
    //Manipulate this part if image not showing
    height: 100,
    width: 100,
    marginBottom: 10,
  },
  cardLabel: {
    fontSize: 12,
    textAlign: "center",
  },
});

export default CustomCardTexture;
