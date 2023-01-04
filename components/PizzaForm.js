import { View, ScrollView, StyleSheet } from "react-native";
import { useCallback, useState } from "react";
import { Alert } from "react-native";

import { Advice } from "../models/advice";
import AddButton from "./UI/Buttons/AddButton";
import LocationPicker from "./LocationPicker";
import ImagePicker from "./PhotoPicker";
import Knead from "../icons/Knead";
import Ingredients from "../icons/Ingredients";
import Service from "../icons/Service";
import Price from "../icons/Price";
import Title from "../icons/Title";
import Info from "../icons/Info";
import SelectListBox from "./UI/SelectListBox";
import TextInputBox from "./UI/TextInputBox";
import Restaurant from "../icons/Restaurant";
import { Colors } from "../constants/Colors";
import {
  doughQuality,
  ingredientsQuality,
  priceToQuality,
  serviceQuality,
} from "../constants/selectListData";

const PizzaForm = ({ onCreateAdvice }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredRestaurant, setEnteredRestaurant] = useState("");
  const [selectedDoughQuality, setSelectedDoughQuality] = useState();
  const [selectedQualityIngredients, setSelectedQualityIngredients] =
    useState();
  const [selectedServiceQuality, setSelectedServiceQuality] = useState();
  const [selectedPriceToQuality, setSelectedPriceToQuality] = useState();
  const [enteredDescription, setEnteredDescription] = useState("");
  const [pickedLocation, setPickedLocation] = useState();
  const [pickedPhoto, setPickedPhoto] = useState();

  const pickLocationHandler = useCallback((location) => {
    setPickedLocation(location);
  }, []);

  const selectImageHandler = (imageUri) => {
    setPickedPhoto(imageUri);
  };

  const changeTitleHandler = (enteredText) => {
    setEnteredTitle(enteredText);
  };

  const changeDescriptionHandler = (enteredText) => {
    setEnteredDescription(enteredText);
  };
  const changeRestaurantHandler = (enteredText) => {
    setEnteredRestaurant(enteredText);
  };

  const saveAdviceHandler = () => {
    const adviceData = new Advice(
      enteredRestaurant,
      enteredTitle,
      pickedPhoto,
      selectedDoughQuality,
      selectedQualityIngredients,
      selectedServiceQuality,
      selectedPriceToQuality,
      enteredDescription,
      pickedLocation
    );

    // Form must have all inputs fields filled, without doing it app won't work.

    const restaurantIsValid = enteredRestaurant.trim().length > 0;
    const titleIsValid = enteredTitle.trim().length > 0;
    const descriptionIsValid = enteredDescription.trim().length > 0;
    const photoIsValid = pickedPhoto !== undefined;
    const doughIsValid = selectedDoughQuality !== undefined;
    const ingredientsIsValid = selectedQualityIngredients !== undefined;
    const serviceIsValid = selectedServiceQuality !== undefined;
    const priceIsValid = selectedPriceToQuality !== undefined;
    const locationIsValid = pickedLocation.lat != 36.785834;

    if (!descriptionIsValid) {
      Alert.alert("Invalid input", "Description input can't be empty.");
      return;
    } else if (!titleIsValid) {
      Alert.alert("Invalid input", "Name of the meal input can't be empty.");
      return;
    } else if (!restaurantIsValid) {
      Alert.alert("Invalid input", "Restaurant name input can't be empty.");
      return;
    } else if (!photoIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without a picked photo."
      );
      return;
    } else if (!doughIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without selecting dough quality."
      );
      return;
    } else if (!ingredientsIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without selecting ingredients quality."
      );
      return;
    } else if (!serviceIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without selecting service quality."
      );
      return;
    } else if (!priceIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without selecting price to quality comparison."
      );
      return;
    } else if (!locationIsValid) {
      Alert.alert(
        "Invalid input",
        "Form can't be submitted without selecting location."
      );
      return;
    }

    onCreateAdvice(adviceData);
    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredRestaurant("");
  };

  return (
    // I decided to use scrollview insted of FlatList because we set the height of the form, and it can't become longer and longer
    // TextInputBox and SelectListBox are the components for reduce amount of code in the PizzaForm
    <ScrollView style={styles.screen}>
      <View style={styles.selectList}>
        <ImagePicker onSelectImage={selectImageHandler} />

        <TextInputBox
          onChangeText={changeTitleHandler}
          placeholder="Enter here name of the meal 🙂"
          value={enteredTitle}
          upperText="Set Name of the Meal"
          icon={<Title />}
        />
        <TextInputBox
          onChangeText={changeRestaurantHandler}
          placeholder="Enter name of the restaurant 🙂"
          value={enteredRestaurant}
          upperText="Restaurant Name"
          icon={<Restaurant />}
        />

        <View>
          <SelectListBox
            data={doughQuality}
            setSelected={setSelectedDoughQuality}
            upperListText="Quality of Pizza dough"
            placeholder="Select Quality of the pizza dough"
            icon={<Knead />}
          />

          <SelectListBox
            data={ingredientsQuality}
            setSelected={setSelectedQualityIngredients}
            upperListText="Quality of Ingredients"
            placeholder="Select quality of ingredients."
            icon={<Ingredients />}
          />
          <SelectListBox
            data={serviceQuality}
            setSelected={setSelectedServiceQuality}
            upperListText="Quality of Service"
            placeholder="Select quality of service"
            icon={<Service />}
          />
          <SelectListBox
            data={priceToQuality}
            setSelected={setSelectedPriceToQuality}
            upperListText="Price to Quality Comparison"
            placeholder="Rate price to quality comparison"
            icon={<Price />}
          />
        </View>
        <TextInputBox
          onChangeText={changeDescriptionHandler}
          placeholder="Enter here a short description 🙂"
          value={enteredDescription}
          upperText="Short description"
          icon={<Info />}
        />
        <LocationPicker onPickLocation={pickLocationHandler} />
        <AddButton onPress={saveAdviceHandler}>Add Advice</AddButton>
      </View>
    </ScrollView>
  );
};

export default PizzaForm;

const styles = StyleSheet.create({
  label: {
    alignItems: "center",
  },

  selectList: {
    flex: 1,
    margin: 20,
    marginTop: 40,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginVertical: 10,
  },

  screen: { backgroundColor: Colors.darkgreen },
});
