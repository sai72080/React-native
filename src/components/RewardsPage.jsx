import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Header from "../components/Header";

const RewardsPage = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>My Rewards</Text>
        <Text style={styles.infoText}>You have no rewards yet.</Text>
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
  },
});

export default RewardsPage;
