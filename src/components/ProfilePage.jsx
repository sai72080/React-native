import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import Header from "../components/Header";
import { Picker } from "@react-native-picker/picker";

const ProfilePage = () => {
  const navigation = useNavigation();
  const { user, logout } = useAuth();

  const [profilePicture, setProfilePicture] = useState(user?.profilePicture || '');
  const [name, setName] = useState(user?.name || '');
  const [contactNumber, setContactNumber] = useState(user?.contactNumber || '');
  const [email, setEmail] = useState(user?.email || '');
  const [language, setLanguage] = useState(user?.language || 'english');
  const [bankAccount, setBankAccount] = useState(user?.bankAccount || '');
  const [cardDetails, setCardDetails] = useState(user?.cardDetails || '');

  const handleSave = () => {
    
    console.log('Profile updated:', {
      profilePicture, name, contactNumber, email, language, bankAccount, cardDetails
    });
  };

  const handleLogout = () => {
    logout();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.contentContainer}>
        {user ? (
          <>
            <View style={styles.userInfoContainer}>
              {/* <TouchableOpacity onPress={() => {}}>
                <Image source={{ uri: profilePicture }} style={styles.profileImage} />
              </TouchableOpacity> */}
              <TextInput
                style={styles.input}
                placeholder="Name"
                value={name}
                onChangeText={setName}
              />
              <TextInput
                style={styles.input}
                placeholder="Contact Number"
                value={contactNumber}
                onChangeText={setContactNumber}
                keyboardType="phone-pad"
              />
              <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              {/* <View style={styles.pickerContainer}>
                <Text style={styles.pickerLabel}>Selected Language</Text>
                <Picker
                  selectedValue={language}
                  style={styles.picker}
                  onValueChange={(itemValue) => setLanguage(itemValue)}
                >
                  <Picker.Item label="English" value="english" />
                  <Picker.Item label="Hindi" value="hindi" />
                  <Picker.Item label="French" value="french" />
                 
                </Picker>
              </View> */}
              <TextInput
                style={styles.input}
                placeholder="Bank Account"
                value={bankAccount}
                onChangeText={setBankAccount}
                keyboardType="numeric"
              />
              <TextInput
                style={styles.input}
                placeholder="Card Details"
                value={cardDetails}
                onChangeText={setCardDetails}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.actionsContainer}>
              <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.saveButtonText}>Save</Text>
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
  userInfoContainer: {
    width: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  input: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  pickerContainer: {
    width: "100%",
    marginBottom: 15,
  },
  pickerLabel: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
  picker: {
    width: "100%",
    height: 50,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  actionsContainer: {
    width: "100%",
    alignItems: "center",
  },
  saveButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#623AA2",
    borderRadius: 10,
    marginBottom: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  saveButtonText: {
    fontSize: 18,
    color: "white",
  },
  logoutButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#F97794",
    borderRadius: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  authButtonText: {
    fontSize: 18,
    color: "white",
  },
});

export default ProfilePage;
