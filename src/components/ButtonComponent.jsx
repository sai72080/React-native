import React, { useState } from "react";
import { TouchableOpacity, Text, StyleSheet, Pressable } from "react-native";

const ButtonComponent = ({
  title = "My Button",
  btnKind,
  variant,
  size,
  onPress,
}) => {
  const [hovered, setHovered] = useState(false);

  const buttonStyles = [
    styles.button,
    styles[btnKind], 
    styles[variant], 
    styles[size], 
    hovered && styles.hoveredButton, 
  ];
  const textStyle = [
    variant === "info" || variant === "light"
      ? { color: "black" }
      : styles.text,
  ];

  return (
    <Pressable
      onPress={onPress}
      style={buttonStyles}
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: 200, 
    transition: "transform 0.3s",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
  rounded: {
    borderRadius: 30,
  },
  outlined: {
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "transparent",
  },
  primary: {
    backgroundColor: "blue",
  },
  secondary: {
    backgroundColor: "gray",
  },
  success: {
    backgroundColor: "green",
  },
  warning: {
    backgroundColor: "orange",
  },
  danger: {
    backgroundColor: "red",
  },
  info: {
    backgroundColor: "cyan",
  },
  dark: {
    backgroundColor: "black",
  },
  light: {
    backgroundColor: "#f2f2f2",
  },
  sm: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    fontSize: 14,
  },
  md: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    fontSize: 16,
  },
  lg: {
    paddingVertical: 16,
    paddingHorizontal: 32,
    fontSize: 18,
  },
  hoveredButton: {
    transform: [{ scale: 1.05 }],
    shadowColor: "#fff",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 6,
  },
});

export default ButtonComponent;
