import { View, Text } from "react-native";
import React from "react";
import { SelectList } from "react-native-dropdown-select-list";
import { StyleSheet } from "react-native";
import { Colors } from "../../constants/Colors";

const SelectListBox = ({
  data,
  setSelected,
  placeholder,
  upperListText,
  icon,
}) => {
  return (
    <>
      <View style={styles.selectListTopBox}>
        <View style={styles.selectListIconBorder}>{icon}</View>
        <View style={styles.selectListTextBorder}>
          <Text style={styles.selectListText}>{upperListText}</Text>
        </View>
      </View>
      <View>
        <SelectList
          setSelected={(val) => setSelected(val)}
          data={data}
          boxStyles={{ backgroundColor: "white" }}
          dropdownStyles={{ backgroundColor: "white" }}
          save="key"
          placeholder={placeholder}
          style={styles.selectList}
        />
      </View>
    </>
  );
};

export default SelectListBox;

const styles = StyleSheet.create({
  selectListTopBox: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  selectListIconBorder: {
    borderColor: Colors.iconBorders,
    borderWidth: 2,
    padding: 10,
    borderRadius: 50,
    backgroundColor: Colors.iconBackgrounds,
    marginVertical: 10,
  },
  selectListTextBorder: {
    borderColor: Colors.white,
    borderWidth: 2,
    borderRadius: 16,
    padding: 10,
  },
  selectListText: {
    color: Colors.white,
  },
});
