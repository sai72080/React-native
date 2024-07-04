import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

const TextInputField = ({
  iconName,
  iconType = "FontAwesome",
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
}) => {
  const IconComponent = iconType === "FontAwesome" ? FontAwesome : Fontisto;

  return (
    <View style={styles.inputContainer}>
      <IconComponent name={iconName} size={24} color="#9A9A9A" style={styles.inputIcon} />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        placeholderTextColor="#9A9A9A"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    fontSize: 18,
    color: "#262626",
    outline: "none",
    borderWidth: 0,
    appearance: "none",
  },
});

export default TextInputField;
