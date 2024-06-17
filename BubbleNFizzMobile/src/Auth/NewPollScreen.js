import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, Alert, Dimensions, ScrollView, TouchableOpacity } from "react-native";
import Background from "../components/Background";
import { Card, Text } from "react-native-paper";
import PollsHeader from "../components/PollsHeader";
import NavigationButton from "../components/NavigationButton";
import CustomInput from "../components/CustomInput";
import CustomInputBirthday from "../components/CustomInputBirthday";
import CustomInputContactNo from "../components/CustomInputContactNo";
import { FontAwesome5, Foundation } from "@expo/vector-icons";
import { UserContext } from "../providers/UserProvider";
import moment from "moment";
import api from "../../config/api";

const screenWidth = Dimensions.get('window').width;

const PollProfileScreen = () => {
  const navigation = useNavigation();

  const { user } = useContext(UserContext);

  const [active, setActive] = useState(0);
  const [step, setStep] = useState(1);

  // FOR PROFILE
  const [gender, setGender] = useState("");
  const [birthday, setBirthday] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [contactNumber, setContactNumber] = useState("");
    
  // SCENT
  const [selectedScent, setSelectedScent] = useState([]);
  const [skinType, setSkinType] = useState('')

  // POLL QUESTIONS
  const questions = [
    {
        id: 1,
        question:
            "Do you frequently experience tightness or discomfort on your body due to dry skin?",
        value: "1",
    },
    {
        id: 2,
        question:
            "Do you find that your skin often feels itchy or irritated, especially after showering or bathing?",
        value: "Dry Skin",
    },
    {
        id: 3,
        question:
            "Are you looking for effective body care tips or products specifically designed to manage and relieve dry skin on your body?",
        value: "Dry Skin",
    },
    {
        id: 4,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Dry Skin:Allergic",
    },
    {
        id: 5,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Dry Skin:AllergicF",
    },
    {
        id: 6,
        question:
            "Do you often notice an oily or greasy feeling on your back, chest, or other parts of your body?",
        value: "2",
    },
    {
        id: 7,
        question:
            "Are you concerned about body acne or breakouts in areas like your shoulders or back due to excess oil?",
        value: "Oily Skin",
    },
    {
        id: 8,
        question:
            "Do you find that your clothing frequently becomes stained or feels uncomfortable due to your oily skin?",
        value: "Oily Skin",
    },
    {
        id: 9,
        question:
            "Have you tried various body care products to control oiliness but haven't found a lasting solution?",
        value: "Oily Skin",
    },
    {
        id: 10,
        question:
            "Are you looking for effective body care tips or products specifically designed to manage and reduce oily skin on your body?",
        value: "Oily Skin",
    },
    {
        id: 11,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Oily Skin:Allergic",
    },
    {
        id: 12,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Oily Skin:AllergicF",
    },
    {
        id: 13,
        question:
            "Do you often experience redness, itching, or irritation on your body after using certain skincare products or after showering?",
        value: "3",
    },
    {
        id: 14,
        question:
            "Are you concerned about frequent reactions to common ingredients in body soaps?",
        value: "Sensitive Skin",
    },
    {
        id: 15,
        question:
            "Do you find that your skin is easily affected by changes in weather or environmental factors, causing discomfort or sensitivity?",
        value: "Sensitive Skin",
    },
    {
        id: 16,
        question:
            "Are you looking for gentle and effective body care tips or products specifically designed to soothe and protect sensitive skin on your body?",
        value: "Sensitive Skin",
    },
    {
        id: 17,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Sensitive Skin:Allergic",
    },
    {
        id: 18,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Sensitive Skin:AllergicF",
    },
    {
        id: 19,
        question:
            "Do you notice that some areas of your body are oily while other areas are dry or normal?",
        value: "4",
    },
    {
        id: 20,
        question:
            "Are you concerned about finding the right balance of body care products that can address both oily and dry areas effectively?",
        value: "Combination Skin",
    },
    {
        id: 21,
        question:
            "Have you struggled to find body care routines or products that cater to the different needs of your combination skin?",
        value: "Combination Skin",
    },
    {
        id: 22,
        question:
            "Are you looking for specific tips or products to help manage and balance the unique challenges of combination skin on your body?",
        value: "Combination Skin",
    },
    {
        id: 23,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Combination Skin:Allergic",
    },
    {
        id: 24,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Combination Skin:AllergicF",
    },
    {
        id: 25,
        question:
            "Do you find that your skin is generally well-balanced, without frequent dryness or oiliness?",
        value: "5",
    },
    {
        id: 26,
        question:
            "Are you looking for body soaps to maintain your skin's healthy appearance and prevent potential issues?",
        value: "Normal Skin",
    },
    {
        id: 27,
        question:
            "Do you experience occasional breakouts or irritations, but overall have smooth and clear skin?",
        value: "Normal Skin",
    },
    {
        id: 28,
        question:
            "Have you been searching for body care products that will help keep your skin in its current healthy condition?",
        value: "Normal Skin",
    },
    {
        id: 29,
        question:
            "Are you interested in learning about products that can enhance and preserve the natural balance of your normal skin?",
        value: "Normal Skin",
    },
    {
        id: 30,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Normal Skin:Allergic",
    },
    {
        id: 31,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Normal Skin:AllergicF",
    },
    {
        id: 32,
        question:
            "Are you concerned about flaky, rough, or scaly patches on areas like your arms, legs, or torso?",
        value: "6",
    },
    {
        id: 33,
        question:
            "Do you frequently notice rough, scaly patches on areas like your elbows, knees, or other parts of your body?",
        value: "Scaly Skin",
    },
    {
        id: 34,
        question:
            "Are you concerned about the appearance and texture of your skin due to persistent scaling or flaking?",
        value: "Scaly Skin",
    },
    {
        id: 35,
        question:
            "Do you experience itching or discomfort in areas where your skin is particularly scaly?",
        value: "Scaly Skin",
    },
    {
        id: 36,
        question:
            "Have you tried various body care products to smooth and hydrate your skin but haven't found a lasting solution?",
        value: "Scaly Skin",
    },
    {
        id: 37,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Scaly Skin:Allergic",
    },
    {
        id: 38,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Scaly Skin:AllergicF",
    },
    {
        id: 39,
        question:
            "Do you frequently experience breakouts or pimples on your back, chest, or other areas of your body?",
        value: "7",
    },
    {
        id: 40,
        question:
            "Are you concerned about acne scars or dark spots resulting from previous breakouts on your body?",
        value: "Acne Prone Skin",
    },
    {
        id: 41,
        question:
            "Do you find that your body acne worsens with certain activities, such as sweating or wearing tight clothing?",
        value: "Acne Prone Skin",
    },
    {
        id: 42,
        question:
            "Have you tried various body care products or routines to control acne but haven't found a lasting solution?",
        value: "Acne Prone Skin",
    },
    {
        id: 43,
        question:
            "Are you concerned about body acne or breakouts in areas like your shoulders or back due to excess oil?",
        value: "Acne Prone Skin",
    },
    {
        id: 44,
        question:
            "Are you allergic to the following ingredients? (Coconut oil, Palm oil, Olive oil)",
        value: "Acne Prone Skin:Allergic",
    },
    {
        id: 45,
        question:
            "Do you suffer from an allergic reaction to strong fragrances?",
        value: "Acne Prone Skin:AllergicF",
    },
  ];

  // FRAGRANCES
  const fragrances = [
    {
      title: "Floral",
      description:
        "These fragrance categories both evoke natural elements and botanical scents, with one focusing more on fresh, green, and herbal notes reminiscent of gardens and meadows.",
    },
    {
      title: "Earthy-Woody Vibes",
      description:
        "Fragrances in this category often feature warm, earthy, or woody notes such as sandalwood, cedarwood, or patchouli. They evoke images of forests, trees, and the great outdoors.",
    },
    {
      title: "Gourm and Sweet",
      description:
        "These fragrances feature edible or dessert-like scents such as vanilla, caramel, chocolate, or pastry notes. They evoke feelings of comfort, indulgence, and sweetness.",
    },
    {
      title: "Tropically Fruity",
      description:
        "These fragrances feature fruity or tropical notes such as citrus, berries, or exotic fruits like mango or papaya. They evoke feelings of freshness, brightness, and tropical escapes.",
    },
    {
      title: "Fresh and Clean",
      description:
        "Fragrances in this category feature crisp, clean, or aquatic notes such as sea breeze, rain, or laundry-fresh scents. They evoke feelings of cleanliness, purity, and revitalization.",
    },
    {
      title: "Aquatic or Oceanic",
      description:
        "These fragrances capture the essence of the sea with notes that evoke the ocean breeze, saltwater, or marine accords. They evoke images of coastal landscapes, beach vacations, and aquatic adventures.",
    },
    {
      title: "Oriental Spice",
      description:
        "These fragrances feature warm, exotic, or spicy notes such as cinnamon, cloves, or amber. They evoke images of bazaars, spices, and mysterious oriental landscapes, adding depth and richness to the scent.",
    },
  ];

  const titleColors = [
    "#33CC1A",
    "#493F07",
    "#F2C6E3",
    "#FF0000",
    "#B2DFDB",
    "#007EA7",
    "#9C640C",
  ];

  const onSubmit = () => {
    const skinTypeVal = questions[active].value
    const skinTypeArr = skinTypeVal.split(':')

    if (!birthday || !address || !city || !postalCode || !contactNumber) {
      Alert.alert(
        "Incomplete Profile",
        "Please complete your profile before proceeding."
      );
    } else {
      api.post("usermanagement/adduserprofile", {
        user_id: user.id,
        gender: gender,
        birthday: moment(birthday).format("YYYY-MM-DD"),
        address: address,
        city: city,
        postal_code: postalCode,
        contact_no: contactNumber,
        skin_type: skinTypeArr[0],
        scent: JSON.stringify(selectedScent),
        allergic: skinTypeArr[1] != undefined && skinTypeArr[1] == 'Allergic' ? skinTypeArr[1] : null
      }).then((response) => {
        console.log(response.data);
        setSkinType(skinTypeArr[0])
        setStep(step + 1);
      }).catch((err) => {
        console.log(err.response);
      });
    }
  }

  useEffect(() => {
      questions[active];
  }, [active]);

  const onNegative = () => {
      const answerVal = questions[active].value;
      const answerValArr = answerVal.split(":");
      console.log(answerValArr)
      setTimeout(() => {
          console.log("no");
          if (questions[active].id == 1) {
              setActive(5);
              console.log(questions[active].value);
          } else if (questions[active].id == 6) {
              setActive(12);
              console.log(questions[active].value);
          } else if (questions[active].id == 13) {
              setActive(18);
              console.log(questions[active].value);
          } else if (questions[active].id == 19) {
              setActive(24);
              console.log(questions[active].value);
          } else if (questions[active].id == 25) {
              setActive(31);
              console.log(questions[active].value);
          } else if (questions[active].id == 32) {
              setActive(38);
              console.log(questions[active].value);
          } else if (questions[active].id == 39) {
              setActive(0);
              console.log(questions[active].value);
          } else {
            if (answerValArr[1] !== undefined && answerValArr[1] == 'AllergicF') {
                console.log("Pili ng scent")
                setStep(2)
            } else {
                setActive(active + 1);
                console.log(questions[active].id);
            }
          }
      }, 500);
  };

  const onPositive = () => {
      const answerVal = questions[active].value;
      const answerValArr = answerVal.split(":");
      setTimeout(() => {
        if (answerValArr[1] !== undefined && answerValArr[1] == 'Allergic') {
          console.log("Allergic ya");
          console.log("yes");
            setStep(3)
        } else if (answerValArr[1] !== undefined && answerValArr[1] == 'AllergicF') {
          console.log("Allergic Fragrance ya");
          console.log("yes");
            setStep(3)
        } else {
          console.log("yes");
          setActive(active + 1);
        }
      }, 500);
  };

  return (
    <Background source={require("../assets/images/login_screen.png")}>
      <PollsHeader />
      {step === 1 ? (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.intro} variant="headlineSmall">Hi, {user.name}</Text>
            <Text style={styles.intro} variant="headlineSmall">Tell us about yourself!</Text>
            <View style={[styles.bodyContainer, {paddingHorizontal: 20}]}>
              <Text style={styles.title} variant="headlineMedium">{questions[active].question}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <NavigationButton
                  onPress={onNegative}
                  text="NO"
                  buttonColor="#EDBF47"
                  style={styles.button}
                />
                <NavigationButton
                  onPress={onPositive}
                  text="YES"
                  buttonColor="#EDBF47"
                  style={styles.button}
                />
            </View>
          </View>
        </View>
      ) : step === 2 ? (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <Text style={styles.intro} variant="headlineMedium">What is your fragrance type?</Text>
            <ScrollView style={{ marginVertical: 20 }}>
              <View style={styles.cardContainer}>
              {fragrances.map((fragrance, index) => (
              <Card
                key={index}
                style={[styles.card, selectedScent.includes(fragrance.title) && styles.selectedCard]}
                onPress={() => {
                    let tempScent = selectedScent;
                    if (!tempScent.includes(fragrance.title)) {
                        tempScent = [...selectedScent, fragrance.title]
                        
                    } else {
                        const index = tempScent.indexOf(fragrance.title)
                        tempScent = tempScent.filter(scent => scent !== fragrance.title);
                    }
                    setSelectedScent(tempScent)
                }}
              >
                <Card.Content>
                  <Text style={[styles.cardTitle, {color: titleColors[index]}]}>
                    {fragrance.title}
                  </Text>
                  <Text style={styles.cardDescription}>
                    {fragrance.description}
                  </Text>
                </Card.Content>
              </Card>
            ))}
              </View>
            </ScrollView>
          </View>
          <NavigationButton
            onPress={() => setStep(3)}
            text="Next"
            buttonColor="#EDBF47"
            style={styles.button}
          />
        </View>
      ) : step === 3 ? (
        <View style={styles.container}>
          <Text style={styles.title} variant="headlineMedium">Complete your Profile!</Text>
          <View style={styles.contentContainer}>
            <ScrollView style={{ marginVertical: 10 }}>
              <CustomInputBirthday
                label={"Birthday"}
                value={birthday}
                onChangeText={(text) => setBirthday(text)}
              />

              <CustomInput
                label={"Address"}
                value={address}
                onChangeText={(text) => setAddress(text)}
              />
              <CustomInput
                label={"City"}
                value={city}
                onChangeText={(text) => setCity(text)}
              />
              <CustomInput
                label={"Postal Code"}
                value={postalCode}
                onChangeText={(text) => setPostalCode(text)}
              />

              <CustomInputContactNo
                label={"Contact Number"}
                value={contactNumber}
                onChangeText={(text) => setContactNumber(text)}
              />
            </ScrollView>
          </View>
          
          <NavigationButton
            onPress={onSubmit}
            text="Next"
            buttonColor="#EDBF47"
            style={styles.button}
          />
        </View>
      ) : (
        <View style={styles.container}>
          <View style={styles.contentContainer}>
            <View style={styles.bodyContainer}>
              <Text style={[styles.title, {marginBottom: 50}]} variant="headlineMedium">Your poll answers reveal your skin type and according to the results you may have <Text style={[styles.title, { textDecorationLine: 'underline' }]}>{skinType}!</Text></Text>
              <Text style={styles.intro} variant="titleMedium">And with your favorite fragrances in mind, we’ll suggest body soaps that are perfect for your skin and smell amazing!</Text>
            </View>
          </View>
          <NavigationButton
            onPress={() => navigation.navigate("LoginScreen")}
            text="SHOP NOW!"
            buttonColor="#EDBF47"
            style={styles.button}
          />
        </View>
      )}
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bodyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    width: "150%",
  },
  intro: {
    fontFamily: "Poppins-SemiBold",
    // fontSize: 34,
    color: "black",
    textAlign: "center",
  },
  title: {
    fontFamily: "Poppins-SemiBold",
    // fontSize: 34,
    color: "#EDBF47",
    textAlign: "center",
  },
  button: {
    flex: 1,
    marginHorizontal: 10,
  },
  selectedCard: {
    borderColor: "#EDBF47",
    borderWidth: 2,
  },
  card: {
    width: screenWidth / 2 - 20,
    marginBottom: 20,
    padding: 10,
  },
  cardTitle: {
    fontFamily: "Poppins-SemiBold",
    fontSize: 16,
    textAlign: "center",
  },
  cardDescription: {
    textAlign: "center",
    fontSize: 12,
  },
});
export default PollProfileScreen;
