import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useAuth } from "../context/AuthContext";
import TextInputField from "../components/TextInputField";
import GradientButton from "../components/GradientButton";

const LoginScreen = ({ navigation, route }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const { from } = route.params || {};

  const handleLogIn = () => {
    if (!username.trim() || !password.trim()) {
      setError("Username and Password are required");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }

    const user = { name: username, email: `${username}@example.com` }; // Replace with actual user data
    login(user);

    setUsername("");
    setPassword("");
    setError("");

    if (from) {
      navigation.navigate(from);
    } else {
      navigation.navigate("Account");
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

          <TextInputField
            iconName="user"
            placeholder="Username"
            value={username}
            onChangeText={setUsername}
          />
          <TextInputField
            iconName="locked"
            iconType="Fontisto"
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />

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

          <GradientButton onPress={handleLogIn} text="Sign In" iconName="arrowright" />

          <TouchableOpacity
            style={styles.createAccountContainer}
            onPress={() => navigation.navigate("SignUp")}
          >
            <Text style={styles.createAccountText}>
              Don't have an account? <Text style={styles.createText}>Create</Text>
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
  errorText: {
    color: "red",
    marginBottom: 10,
  },
  forgotPasswordContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: "#F97794",
    fontWeight: "bold",
  },
  createAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  createAccountText: {
    fontSize: 16,
    color: "#262626",
  },
  createText: {
    color: "#F97794",
    fontWeight: "bold",
  },
});

export default LoginScreen;
