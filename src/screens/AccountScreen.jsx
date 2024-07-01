import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import { useAuth } from "../context/AuthContext";
import Footer from '../components/Footer';

const AccountScreen = ({ navigation }) => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#F97794", "#623AA2"]}
        style={styles.headerContainer}
      >
        <Text style={styles.headerText}>My Account</Text>
      </LinearGradient>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          {user ? (
            <>
              <View style={styles.userInfoContainer}>
                <FontAwesome name="user" size={50} color="#623AA2" />
                <Text style={styles.userName}>{user.name}</Text>
                {/* <Text style={styles.userEmail}>{user.email}</Text> */}
              </View>
              <View style={styles.actionsContainer}>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("Profile")}
                >
                  <Text style={styles.actionButtonText}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("AddAddress")}
                >
                  <Text style={styles.actionButtonText}>Add Address</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("Rewards")}
                >
                  <Text style={styles.actionButtonText}>My Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("Wishlist")}
                >
                  <Text style={styles.actionButtonText}>My Wishlist</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("Orders")}
                >
                  <Text style={styles.actionButtonText}>My Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.actionButton}
                  onPress={() => navigation.navigate("Help")}
                >
                  <Text style={styles.actionButtonText}>Help Center</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
                  <Text style={styles.logoutButtonText}>Logout</Text>
                </TouchableOpacity>
              </View>
            </>
          ) : (
            <View style={styles.authContainer}>
              <TouchableOpacity
                style={styles.authButton}
                onPress={() => navigation.navigate("Login")}
              >
                <Text style={styles.authButtonText}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.authButton}
                onPress={() => navigation.navigate("Signup")}
              >
                <Text style={styles.authButtonText}>Signup</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
  },
  scrollViewContent: {
    flexGrow: 1,
  },
  contentContainer: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  userInfoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    color: "#623AA2",
  },
  userEmail: {
    fontSize: 18,
    color: "#623AA2",
  },
  actionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  actionButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#F97794",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  actionButtonText: {
    fontSize: 18,
    color: "white",
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#623AA2",
    borderRadius: 10,
    alignItems: "center",
  },
  logoutButtonText: {
    fontSize: 18,
    color: "white",
  },
  authContainer: {
    width: "100%",
    alignItems: "center",
  },
  authButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#623AA2",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  authButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default AccountScreen;
