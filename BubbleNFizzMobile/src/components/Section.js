import React from "react";
import { View, Text, StyleSheet, Image } from "react-native"; // Import Image component
import { Button } from "react-native-paper";

const Section = () => {
  return (
    <View style={styles.sectionContainer}>
      <View
        style={[
          styles.iconContainer,
          { alignItems: "center", justifyContent: "center" },
        ]}
      >
        <Image
          source={require("../assets/images/certificate.png")}
          style={{ width: 50, height: 50 }}
        />
      </View>
      <Text style={[styles.boldText, { textAlign: "center" }]}>
        Ratings Certified
      </Text>
      <Text style={{ textAlign: "center", fontFamily: "Inconsolata-Light" }}>
        Our certified organic produce is rated 5 stars by over 1,000 customers.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderTopWidth: 2,
    borderBottomWidth: 2,
    borderColor: "black",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    marginBottom: 10,
  },
  boldText: {
    fontFamily: "PaytoneOne-Regular",
  },
});

export default Section;
