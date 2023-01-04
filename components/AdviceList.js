import { View, Text, FlatList, StyleSheet, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

import AdviceItem from "./AdviceItem";
import { deleteAdvice } from "../util/database";
import LottieView from "lottie-react-native";
import { Colors } from "../constants/Colors";
const { width } = Dimensions.get("screen");

const AdviceList = ({ advice }) => {
  const navigation = useNavigation();

  const selectAdviceHandler = (id) => {
    navigation.navigate("AdviceDetails", { adviceId: id });
  };

  const deleteAdviceHandler = (id) => {
    deleteAdvice({ adviceId: id });
  };

  if (!advice || advice.length === 0) {
    return (
      <View style={styles.noAdvice}>
        <LottieView
          autoPlay
          loop
          source={require("../lottie/noData.json")}
          style={{
            width: 200,
            height: 200,
          }}
        />
        <Text style={styles.noAdviceText}>
          No advice added ! Maybe add some ?
        </Text>
      </View>
    );
  }

  return (
    <FlatList
      style={styles.screen}
      data={advice}
      horizontal
      pagingEnabled
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.list}>
          <AdviceItem
            advice={item}
            onSelect={selectAdviceHandler}
            onDelete={deleteAdviceHandler}
          />
        </View>
      )}
    ></FlatList>
  );
};

export default AdviceList;

const styles = StyleSheet.create({
  noAdvice: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.darkgreen,
  },
  noAdviceText: {
    fontWeight: "bold",
    fontSize: 18,
    color: Colors.lightgreen,
  },
  screen: {
    flex: 1,
    backgroundColor: Colors.darkgreen,
  },
  list: {
    width,
    justifyContent: "center",
    alignItems: "center",
  },
});
