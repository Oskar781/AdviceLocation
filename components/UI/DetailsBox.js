import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const DetailsBox = ({ title, icon, data }) => {
  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <View style={styles.actions}>
        {icon}
        <Text style={styles.opinion}>{data}</Text>
      </View>
    </>
  );
};

export default DetailsBox;

const styles = StyleSheet.create({
  text: {
    color: Colors.white,
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 20,
  },

  actions: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  opinion: {
    color: Colors.lightgreen,
    fontWeight: "bold",
    fontSize: 10,
  },
});
