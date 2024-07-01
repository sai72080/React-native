import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const DrawerContent = ({ closeDrawer }) => {
  const navigation = useNavigation();

  const handleNavigation = (route) => {
    closeDrawer();
    navigation.navigate(route);
  };

  return (
    <View style={styles.drawer}>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleNavigation("Home")}>
        <Image source={require("../assets/normal/home.png")} style={styles.drawerIcon} />
        <Text style={styles.drawerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleNavigation("Categories")}>
        <Image source={require("../assets/normal/reorder.png")} style={styles.drawerIcon} />
        <Text style={styles.drawerText}>Categories</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleNavigation("Cart")}>
        <Image source={require("../assets/normal/shopping_cart.png")} style={styles.drawerIcon} />
        <Text style={styles.drawerText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.drawerItem} onPress={() => handleNavigation("Account")}>
        <Image source={require("../assets/normal/account.png")} style={styles.drawerIcon} />
        <Text style={styles.drawerText}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  drawerItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
  },
  drawerIcon: {
    height: 24,
    width: 24,
    marginRight: 16,
  },
  drawerText: {
    fontSize: 16,
    color: "#000",
  },
});
