import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";

const CustomCardIngredients = ({ onSelect }) => {
  const windowWidth = useWindowDimensions().width;
  const windowHeight = useWindowDimensions().height;

  const [selectedIngredient, setSelectedIngredient] = useState(null);

  const handleSelect = (ingredient) => {
    console.log("Selected Ingredient:", ingredient);
    setSelectedIngredient(ingredient);
  };

  const renderCard = (label, description) => {
    const isActive = selectedIngredient === label;
    return (
      <TouchableOpacity onPress={() => handleSelect(label)}>
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
      {renderCard(
        "Synthetic Chemicals",
        "Grown without the use of synthetic chemicals"
      )}
      {renderCard(
        "Artificial Chemicals",
        "Often produced using artificial chemicals"
      )}
      {renderCard(
        "Natural Ingredients",
        "Composed of ingredients that are from nature and not artificial."
      )}
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
export default CustomCardIngredients;
