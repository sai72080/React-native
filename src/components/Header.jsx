import React from "react";
import {
  Image,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Animated,
  Dimensions,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { fonts } from "../utils/fonts";
import DrawerContent from "./DrawerContent"; 

const Header = ({ isCart }) => {
  const navigation = useNavigation();
  const [drawerVisible, setDrawerVisible] = React.useState(false);
  const slideAnim = React.useRef(new Animated.Value(-Dimensions.get("window").width * 0.6)).current;

  const handleBack = () => {
    navigation.navigate("Home");
  };

  const openDrawer = () => {
    setDrawerVisible(true);
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeDrawer = () => {
    Animated.timing(slideAnim, {
      toValue: -Dimensions.get("window").width * 0.6,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setDrawerVisible(false);
    });
  };

  const goToCart = () => {
    navigation.navigate("Cart");
  };

  return (
    <View style={styles.header}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.leftContainer}>
        {isCart ? (
          <TouchableOpacity style={styles.appDrawerContainer} onPress={handleBack}>
            <Image source={require("../assets/arrowback.png")} style={styles.appBackIcon} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.appDrawerContainer} onPress={openDrawer}>
            <Image source={require("../assets/apps.png")} style={styles.appDrawerIcon} />
          </TouchableOpacity>
        )}
        {isCart ? <Text style={styles.titleText}>My Cart</Text> : null}
      </View>

      {!isCart && (
        <View style={styles.searchContainer}>
          <TextInput style={styles.searchBar} placeholder="Search..." placeholderTextColor="#888" />
        </View>
      )}

      <TouchableOpacity onPress={goToCart} style={styles.cartContainer}>
        <Image
            source={{
              uri: "https://marketplace.canva.com/EAFvDRwEHHg/1/0/1600w/canva-colorful-abstract-online-shop-free-logo-cpI8ixEpis8.jpg",
            }}
            style={styles.profileImage}
          />
      </TouchableOpacity>

      <Modal
        visible={drawerVisible}
        animationType="none"
        transparent={true}
        onRequestClose={closeDrawer}
      >
        <View style={styles.modalContainer}>
          <Animated.View style={[styles.drawer, { transform: [{ translateX: slideAnim }] }]}>
            <DrawerContent closeDrawer={closeDrawer} />
            <TouchableOpacity style={styles.closeButton} onPress={closeDrawer}>
              <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    height: 80,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  appDrawerContainer: {
    backgroundColor: "white",
    height: 40,
    width: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  appDrawerIcon: {
    height: 34,
    width: 24,
  },
  appBackIcon: {
    height: 24,
    width: 24,
    marginLeft: 10,
  },
  profileImage: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  titleText: {
    fontSize: 20,
    fontFamily: fonts.regular,
    color: "#000000",
  },
  searchContainer: {
    flex: 1,
    marginHorizontal: 16,
  },
  searchBar: {
    height: 36,
    backgroundColor: "#f0f0f0",
    borderRadius: 18,
    paddingHorizontal: 16,
    fontSize: 14,
    fontFamily: fonts.regular,
    color: "#000",
  },
  modalContainer: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  drawer: {
    width: Dimensions.get("window").width * 0.6,
    height: "100%",
    backgroundColor: "#fff",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    padding: 20,
  },
  closeButton: {
    marginTop: 16,
    padding: 8,
    backgroundColor: "#ccc",
    borderRadius: 4,
    alignSelf: "center",
  },
  closeButtonText: {
    fontSize: 14,
    color: "#000",
  },
});

export default Header;
