import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AntDesign from "react-native-vector-icons/AntDesign";

const GradientButton = ({ onPress, text, iconName }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <LinearGradient colors={["#F97794", "#623AA2"]} style={styles.gradient}>
        <Text style={styles.buttonText}>{text}</Text>
        {iconName && <AntDesign name={iconName} size={24} color="white" />}
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    marginBottom: 20,
  },
  gradient: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginRight: 10,
  },
});

export default GradientButton;
