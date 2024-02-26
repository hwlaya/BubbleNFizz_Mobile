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

const CustomCardDesign = ({setDesign}) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedDesign, setSelectedDesign] = useState(null);

  const handleSelect = (design) => {
    console.log("Selected Design:", design);
    setSelectedDesign(design);
    setDesign(design);
  };

  const renderCard = (description) => {
    const isActive = selectedDesign === description;
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
              source={require("../assets/images/bg_object2.png")}
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
      {renderCard("Vibrant colors are present in the product")}
      {renderCard("Colors present in the product are nonchalant")}
      {renderCard("Vivid and bold colors are present in the product")}
      {renderCard("Product only has a single tone of color")}
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
    width: 150,
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
