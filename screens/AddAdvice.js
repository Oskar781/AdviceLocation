import { View } from "react-native";
import React from "react";

import PizzaForm from "../components/PizzaForm";
import { insertAdvice } from "../util/database";

const AddAdvice = ({ navigation }) => {
  const createAdviceHandler = async (advice) => {
    await insertAdvice(advice);
    navigation.navigate("AllAdvice");
  };

  return (
    <View>
      <PizzaForm onCreateAdvice={createAdviceHandler} />
    </View>
  );
};

export default AddAdvice;
