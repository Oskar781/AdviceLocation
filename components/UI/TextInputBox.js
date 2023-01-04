import { View, Text, TextInput } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const TextInputBox = ({
  onChangeText,
  placeholder,
  value,
  upperText,
  icon,
}) => {
  return (
    <View>
      <View style={styles.textInputTopBox}>
        <View style={styles.textInputIconBorder}>{icon}</View>
        <View style={styles.textInputTextBorder}>
          <Text style={styles.titleText}>{upperText}</Text>
        </View>
      </View>
      <View style={styles.inputText}>
        <TextInput
          value={value}
          multiline={true}
          onChangeText={onChangeText}
          placeholder={placeholder}
        />
      </View>
    </View>
  );
};

export default TextInputBox;

const styles = StyleSheet.create({
  textInputTopBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textInputIconBorder: {
    borderColor: Colors.iconBorders,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.iconBackgrounds,
    marginVertical: 10,
  },
  textInputTextBorder: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 16,
    padding: 10,
  },
  titleText: {
    color: Colors.white,
  },
  inputText: {
    flex: 1,
    borderColor: "white",
    backgroundColor: "white",
    paddingVertical: 12,
    borderRadius: 8,
  },
});
