import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
  Alert,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import AntDesign from "react-native-vector-icons/AntDesign";
import Entypo from "react-native-vector-icons/Entypo";
import { LinearGradient } from "expo-linear-gradient";

const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = () => {
    // Validation: Check if any field is empty
    if (!username.trim() || !mobile.trim() || !email.trim() || !password.trim()) {
      setError("All fields are required");
      return;
    }

    // Validation: Check if password length is less than 6 characters
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Your registration logic here
    console.log("Username:", username);
    console.log("Mobile:", mobile);
    console.log("Email:", email);
    console.log("Password:", password);
    // Example: Perform API call for registration, etc.

    // Reset fields and error state after successful registration
    setUsername("");
    setMobile("");
    setEmail("");
    setPassword("");
    setError("");

    // Display an alert or navigate to another screen
    if (Platform.OS === "web") {
      alert("Registration Successful");
    } else {
      Alert.alert("Success", "Registration Successful", [{ text: "OK" }]);
    }

    // Navigate to LoginScreen after successful registration
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: "https://st2.depositphotos.com/1760420/5432/i/450/depositphotos_54324565-stock-photo-online-shopping-and-e-commerce.jpg",
        }}
        resizeMode="cover"
        style={styles.background}
      >
        <View style={styles.formContainer}>
          <Text style={styles.createAccountText}>Create Account</Text>

          <View style={styles.inputContainer}>
            <FontAwesome
              name="user"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Username"
              placeholderTextColor="#9A9A9A"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign
              name="mobile1"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              placeholder="Mobile"
              placeholderTextColor="#9A9A9A"
              value={mobile}
              onChangeText={(text) => setMobile(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <AntDesign
              name="mail"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Email"
              placeholderTextColor="#9A9A9A"
              value={email}
              onChangeText={(text) => setEmail(text)}
            />
          </View>

          <View style={styles.inputContainer}>
            <Fontisto
              name="locked"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor="#9A9A9A"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleRegister}
          >
            <LinearGradient
              colors={["#F97794", "#623AA2"]}
              style={styles.linearGradient}
            >
              <Text style={styles.signUpButtonText}>Register</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.socialMediaContainer}
            onPress={() => console.log("Social media signup pressed")}
          >
            <Text style={styles.footerText}>
              Or create using social media
            </Text>
            <View style={styles.socialIconsContainer}>
              <Entypo
                name="facebook-with-circle"
                size={30}
                color="#3b5998"
                style={styles.socialIcon}
              />
              <Entypo
                name="twitter-with-circle"
                size={30}
                color="#1DA1F2"
                style={styles.socialIcon}
              />
              <AntDesign
                name="google"
                size={30}
                color="#DB4437"
                style={styles.socialIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    borderRadius: 20,
    padding: 30,
    alignItems: "center",
    width: "90%",
    maxWidth: 400,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 15,
    marginLeft: 600,
  },
  createAccountText: {
    textAlign: "center",
    fontSize: 30,
    color: "#262626",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
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
  signUpButton: {
    width: "100%",
    marginTop: 20,
  },
  signUpButtonText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 10,
  },
  linearGradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 25,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  footerText: {
    color: "#262626",
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
  },
  socialMediaContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  socialIconsContainer: {
    flexDirection: "row",
    marginTop: 10,
  },
  socialIcon: {
    marginHorizontal: 10,
    padding: 8,
    borderRadius: 50,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
    textAlign: "center",
  },
});

export default SignupScreen;
