// HomeScreen.js

import React from "react";
import { StyleSheet, Text, View, StatusBar, ImageBackground, SafeAreaView, Image, TouchableOpacity, Platform } from "react-native"; // Added Platform import
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaView style={[styles.container, { paddingTop: insets.top }]}>
      <ImageBackground
        source={require('../assets/background.jpg')}
        resizeMode="cover"
        style={styles.background}
      >
        <Image
          style={styles.logo}
          source={{ uri: 'https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg' }}
        />
        <View>
          <Text style={styles.title}>TrendyMart</Text>
          <Text style={styles.subTitle}>Your one-stop shop for all things trendy!</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, styles.login]}
            onPress={() => navigation.navigate("Login")} 
          >
            <Text style={styles.loginText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.register]}
            onPress={() => navigation.navigate("Signup")} 
          >
            <Text style={styles.loginText}>Register</Text>
          </TouchableOpacity>
        </View>
       
        <TouchableOpacity
          style={[styles.button, styles.customButton]}
          onPress={() => navigation.navigate("ButtonScreen")} 
        >
          <Text style={styles.loginText}>Show Buttons</Text>
        </TouchableOpacity>
      </ImageBackground>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginTop: 50,
    borderRadius: 50,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 50,
    marginBottom: Platform.OS === "android" ? 20 : 0, // Add marginBottom only for Android
  },
  button: {
    height: 50,
    width: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 25,
    marginHorizontal: 10,
    marginBottom: 10, // Add marginBottom for all buttons
  },
  login: {
    backgroundColor: "#007bff", 
  },
  register: {
    backgroundColor: "#28a745", 
  },
  customButton: {
    backgroundColor: "purple", // Example color
  },
  loginText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "black",
    alignSelf: "center",
    marginTop: 20,
  },
  subTitle: {
    fontSize: 18,
    color: "black",
    alignSelf: "center",
    marginTop: 10,
    textAlign: "center",
    paddingHorizontal: 20,
    fontWeight: "bold"
  },
});

export default HomeScreen;
