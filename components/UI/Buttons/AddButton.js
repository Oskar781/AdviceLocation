import { Text, Pressable, StyleSheet } from "react-native";
import React from "react";

const AddButton = ({ children, onPress }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default AddButton;

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginTop: 40,
    backgroundColor: "orange",
    elevation: 2,
    shadowColor: "black",
    shadowOpacity: 0.15,
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 2,
    borderRadius: 4,
  },
  pressed: { opacity: 0.7 },
  text: {
    textAlign: "center",
    fontSize: 16,
    color: "black",
  },
});
