import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CartContext } from '../context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { useAuth } from '../context/AuthContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const { user } = useAuth();
  const navigation = useNavigation();

  useEffect(() => {
    console.log('Cart Items:', cartItems);
  }, [cartItems]);

  const totalCost = cartItems.reduce((sum, item) => {
    const price = typeof item.price === 'number' ? item.price : 0;
    return sum + (price * item.quantity);
  }, 0);

  const handleCheckout = (product) => {
    if (!user) {
      navigation.navigate('Login');
    } else {
      navigation.navigate('Payment', { product });
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            {item.image && (
              <Image
                source={{ uri: item.image }}
                style={styles.image}
              />
            )}
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.title}</Text>
              <Text style={styles.itemPrice}>₹{(item.price * item.quantity).toFixed(2)}</Text>
              <View style={styles.sizeColorContainer}>
                <View style={[styles.colorCircle, { backgroundColor: item.color }]}></View>
                <Text style={styles.itemSize}>{item.size}</Text>
                <Text style={styles.itemQuantity}>Qty: {item.quantity}</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.deleteButton} onPress={() => removeFromCart(item.id)}>
              <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
      <View style={styles.totalContainer}>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Total:</Text>
          <Text style={styles.totalValue}>₹{totalCost.toFixed(2)}</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Shipping:</Text>
          <Text style={styles.totalValue}>₹0.00</Text>
        </View>
        <View style={styles.totalRow}>
          <Text style={styles.totalLabel}>Grand Total:</Text>
          <Text style={styles.totalValue}>₹{totalCost.toFixed(2)}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkoutButton} onPress={handleCheckout}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  cartItem: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    marginBottom: 5,
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 10,
    borderRadius: 8,
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  sizeColorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorCircle: {
    width: 16,
    height: 16,
    borderRadius: 8,
    marginRight: 5,
  },
  itemSize: {
    fontSize: 14,
  },
  itemQuantity: {
    fontSize: 14,
    marginLeft: 10,
  },
  deleteButton: {
    justifyContent: 'center',
    padding: 5,
  },
  totalContainer: {
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 2,
  },
  totalLabel: {
    fontSize: 16,
  },
  totalValue: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkoutButton: {
    margin: 10,
    padding: 15,
    backgroundColor: '#FF6347',
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Cart;
