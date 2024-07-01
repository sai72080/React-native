import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";

const AddAddressPage = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleSaveAddress = () => {
    navigation.navigate("Account");
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>Add Address</Text>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={address.name}
          onChangeText={(text) => setAddress({ ...address, name: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="Street"
          value={address.street}
          onChangeText={(text) => setAddress({ ...address, street: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="City"
          value={address.city}
          onChangeText={(text) => setAddress({ ...address, city: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          value={address.state}
          onChangeText={(text) => setAddress({ ...address, state: text })}
        />
        <TextInput
          style={styles.input}
          placeholder="ZIP Code"
          value={address.zip}
          onChangeText={(text) => setAddress({ ...address, zip: text })}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Save Address</Text>
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
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#623AA2",
    marginBottom: 20,
    alignSelf: "center",
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "#000",
  },
  saveButton: {
    width: "100%",
    paddingVertical: 15,
    backgroundColor: "#623AA2",
    borderRadius: 10,
    alignItems: "center",
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default AddAddressPage;
