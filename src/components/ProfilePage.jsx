import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../context/AuthContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

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
  const [isEditing, setIsEditing] = useState(true);

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const profileData = await AsyncStorage.getItem('profileData');
        if (profileData) {
          const { profilePicture, name, contactNumber, email, language, bankAccount, cardDetails } = JSON.parse(profileData);
          setProfilePicture(profilePicture);
          setName(name);
          setContactNumber(contactNumber);
          setEmail(email);
          setLanguage(language);
          setBankAccount(bankAccount);
          setCardDetails(cardDetails);
          setIsEditing(false);
        }
      } catch (error) {
        console.error('Failed to load profile data:', error);
      }
    };

    loadProfileData();
  }, []);

  const handleSave = async () => {
    try {
      const profileData = { profilePicture, name, contactNumber, email, language, bankAccount, cardDetails };
      await AsyncStorage.setItem('profileData', JSON.stringify(profileData));
      console.log('Profile updated:', profileData);
      setIsEditing(false);
    } catch (error) {
      console.error('Failed to save profile data:', error);
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('profileData');
    } catch (error) {
      console.error('Failed to remove profile data:', error);
    }
    logout();
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        {user ? (
          <>
            {isEditing ? (
              <View style={styles.userInfoContainer}>
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
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.saveButtonText}>Save</Text>
                </TouchableOpacity>
              </View>
            ) : (
              <View style={styles.userInfoContainer}>
                <Text style={styles.detailText}>Name: {name}</Text>
                <Text style={styles.detailText}>Contact Number: {contactNumber}</Text>
                <Text style={styles.detailText}>Email: {email}</Text>
                <Text style={styles.detailText}>Bank Account: {bankAccount}</Text>
                <Text style={styles.detailText}>Card Details: {cardDetails}</Text>
                <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                  <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
              </View>
            )}
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutButtonText}>Logout</Text>
            </TouchableOpacity>
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
              onPress={() => navigation.navigate("SignUp")}
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
  detailText: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#f8f8f8",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    textAlign: 'left',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
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
  editButton: {
    width: "100%",
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: "#FF8C00",
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
  editButtonText: {
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
