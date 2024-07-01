import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Header from "../components/Header";

const HelpCenterPage = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Help Center</Text>
        <Text style={styles.infoText}>How can we assist you?</Text>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>FAQs</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Contact Us</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionButton}>
          <Text style={styles.optionButtonText}>Support</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#623AA2",
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: "#000",
    marginBottom: 20,
  },
  optionButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#623AA2",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  optionButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default HelpCenterPage;
