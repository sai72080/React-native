import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Header from "../components/Header";

const orders = [
  { id: '1', date: '2023-01-15', total: '₹150.00', status: 'Delivered' },
  { id: '2', date: '2023-02-20', total: '₹200.00', status: 'In Transit' },
  { id: '3', date: '2023-03-05', total: '₹100.00', status: 'Cancelled' },
];

const OrdersPage = () => {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <LinearGradient
        colors={["#F97794", "#623AA2"]}
        style={styles.headerContainer}
      >
        <Text style={styles.headerText}>My Orders</Text>
      </LinearGradient>
      <View style={styles.contentContainer}>
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.orderItem}>
              <Text style={styles.orderText}>Order ID: {item.id}</Text>
              <Text style={styles.orderText}>Date: {item.date}</Text>
              <Text style={styles.orderText}>Total: {item.total}</Text>
              <Text style={styles.orderText}>Status: {item.status}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  headerContainer: {
    paddingVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  contentContainer: {
    flex: 1,
    padding: 20,
  },
  orderItem: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  orderText: {
    fontSize: 16,
    color: "#000",
  },
});

export default OrdersPage;
