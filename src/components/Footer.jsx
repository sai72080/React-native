import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CartContext } from '../context/CartContext';
import homeIcon from '../assets/normal/home.png';
import categoriesIcon from '../assets/normal/reorder.png';
import cartIcon from '../assets/normal/shopping_cart.png';
import accountIcon from '../assets/normal/account.png';

const Footer = ({ navigation }) => {
  const { cartItems } = useContext(CartContext);

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.tab}>
        <Image source={homeIcon} style={[styles.icon, { tintColor: 'pink' }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Categories')} style={styles.tab}>
        <Image source={categoriesIcon} style={[styles.icon, { tintColor: 'pink' }]} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')} style={styles.tab}>
        <Image source={cartIcon} style={[styles.icon, { tintColor: 'pink' }]} />
        {cartItems.length > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{cartItems.length}</Text>
          </View>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Account')} style={styles.tab}>
        <Image source={accountIcon} style={[styles.icon, { tintColor: 'pink' }]} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    backgroundColor: "#ffffff",
    borderTopWidth: 1,
    borderColor: "#e0e0e0",
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  icon: {
    height: 24,
    width: 24,
  },
  badge: {
    position: 'absolute',
    right: -10,
    top: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
  },
});

export default Footer;
