import React, { useState } from "react";
import {
  Image,
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
import { LinearGradient } from "expo-linear-gradient";

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogIn = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and Password are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    // Your login logic here
    console.log("Username:", username);
    console.log("Password:", password);
    // Example: Perform API call for login, etc.

    // Reset fields and error state after successful login
    setUsername("");
    setPassword("");
    setError("");

    // Display an alert or navigate to another screen
    showAlert("Success", "Login Successful");
  };

  const showAlert = (title, message) => {
    if (Platform.OS === "web") {
      // Custom alert for web
      alert(`${title}\n\n${message}`);
    } else {
      // Use Alert.alert for Android and iOS
      Alert.alert(title, message, [{ text: "OK" }]);
    }
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
          <Image
            source={{
              uri: "https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg",
            }}
            style={styles.logo}
          />
          <Text style={styles.helloText}>Hello</Text>
          <Text style={styles.signInText}>Sign in to your account</Text>

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
            <Fontisto
              name="locked"
              size={24}
              color="#9A9A9A"
              style={styles.inputIcon}
            />
            <TextInput
              style={styles.textInput}
              placeholder="Password"
              placeholderTextColor="#9A9A9A"
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>

          {error ? (
            <Text style={styles.errorText}>{error}</Text>
          ) : null}

          <TouchableOpacity
            style={styles.forgotPasswordContainer}
            onPress={() => console.log("Forgot password pressed")}
          >
            <Text style={styles.forgotPasswordText}>
              Forgot your password?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.signInButton} onPress={handleLogIn}>
            <LinearGradient
              colors={["#F97794", "#623AA2"]}
              style={styles.linearGradient}
            >
              <Text style={styles.signInButtonText}>Sign In</Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.createAccountContainer}
            onPress={() => navigation.navigate("Signup")}
          >
            <Text style={styles.createAccountText}>
              Don't have an account?{" "}
              <Text style={styles.createText}>Create</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 50,
  },
  helloText: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#262626",
    marginBottom: 10,
  },
  signInText: {
    fontSize: 18,
    color: "#262626",
    marginBottom: 20,
  },
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    alignSelf: "flex-end",
    width: "90%",
    marginTop: 10,
  },
  forgotPasswordText: {
    color: "#F97794",
    fontSize: 15,
    textDecorationLine: "underline",
    fontWeight: "bold",
  },
  signInButton: {
    marginTop: 20,
  },
  signInButtonText: {
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
  createAccountContainer: {
    marginTop: 20,
  },
  createAccountText: {
    fontSize: 16,
    color: "#262626",
    textAlign: "center",
  },
  createText: {
    textDecorationLine: "underline",
    color: "#F97794",
    fontWeight: "bold",
  },
});

export default LoginScreen;
