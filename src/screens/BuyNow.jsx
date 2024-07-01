import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput, Alert, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const BuyNow = ({ route }) => {
  const { product } = route.params;
  const navigation = useNavigation();
  const [quantity, setQuantity] = useState(1);
  const [address, setAddress] = useState({
    name: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });
  const [addressDetails, setAddressDetails] = useState(null);
  const [totalPrice, setTotalPrice] = useState(product.price ? (product.price * quantity) - 50 : null);

  

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    calculateTotalPrice(newQuantity);
  };

  const calculateTotalPrice = (newQuantity) => {
    if (product.price) {
      const totalPrice = (product.price * newQuantity) - 50;
      setTotalPrice(totalPrice);
    } else {
      setTotalPrice(null);
    }
  };

  const handleAddressSubmit = () => {
    if (
      !address.name.trim() ||
      !address.street.trim() ||
      !address.city.trim() ||
      !address.state.trim() ||
      !address.zip.trim()
    ) {
      Alert.alert('Error', 'Please fill in all address fields.');
      return;
    }

    setAddressDetails(address);
    setAddress({
      name: "",
      street: "",
      city: "",
      state: "",
      zip: "",
    });
    Alert.alert('Address Saved', 'Your address has been saved successfully.');
  };

  const handlePayment = () => {
    if (!addressDetails) {
      Alert.alert('Error', 'Please enter your address.');
      return;
    }
    navigation.navigate('Payment', { total: totalPrice, addressDetails });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.stepsContainer}>
        <Text style={styles.step}>Product</Text>
        <Text style={styles.stepActive}>Order Summary</Text>
        <Text style={styles.step}>Payment</Text>
      </View>

      <View style={styles.addressContainer}>
        <Text style={styles.label}>Deliver to:</Text>
        {addressDetails ? (
          <View style={styles.addressDetails}>
            <Text style={styles.addressText}>Name: {addressDetails.name}</Text>
            <Text style={styles.addressText}>Street: {addressDetails.street}</Text>
            <Text style={styles.addressText}>City: {addressDetails.city}</Text>
            <Text style={styles.addressText}>State: {addressDetails.state}</Text>
            <Text style={styles.addressText}>ZIP: {addressDetails.zip}</Text>
            <TouchableOpacity style={styles.changeButton} onPress={() => setAddressDetails(null)}>
              <Text style={styles.changeButtonText}>Change</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.addressInputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Name"
              value={address.name}
              onChangeText={(text) => setAddress({ ...address, name: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="Street"
              value={address.street}
              onChangeText={(text) => setAddress({ ...address, street: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="City"
              value={address.city}
              onChangeText={(text) => setAddress({ ...address, city: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="State"
              value={address.state}
              onChangeText={(text) => setAddress({ ...address, state: text })}
            />
            <TextInput
              style={styles.input}
              placeholder="ZIP Code"
              value={address.zip}
              onChangeText={(text) => setAddress({ ...address, zip: text })}
            />
            <TouchableOpacity style={styles.saveButton} onPress={handleAddressSubmit}>
              <Text style={styles.saveButtonText}>Save Address</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      <View style={styles.productInfo}>
        <Image
          source={{ uri: product.image }}
          style={styles.image}
        />
        <View style={styles.productDetails}>
          <Text style={styles.productTitle}>{product.title}</Text>
          <Text style={styles.productPrice}>₹{product.price.toFixed(2)}</Text>
          <Text style={styles.quantity}>Quantity: {product.quantity}</Text>
          {product.category === 'fashion' && (
            <Text style={styles.detail}>Size: {product.size}</Text>
          )}
          <View style={styles.colorContainer}>
            <Text style={styles.detail}>Color:</Text>
            <View style={[styles.colorIndicator, { backgroundColor: product.color }]} />
          </View>
        </View>
      </View>

      <View style={styles.paymentContainer}>
        <Text style={styles.paymentLabel}>You Have One Coupon</Text>
        <Text style={styles.paymentDetail}>Coupon Balance: 50 ₹</Text>
        <Text style={styles.paymentDetail}>Coupon expiring in 3 days</Text>
        <Text style={styles.paymentDetail}>Save extra 50 ₹ using your Coupon</Text>
      </View>

      <View style={styles.totalContainer}>
        <Text style={styles.totalLabel}>Total:</Text>
        <Text style={styles.totalPrice}> ₹{(product.price * product.quantity - 50).toFixed(2)}</Text>
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={handlePayment}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  stepsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  step: {
    fontSize: 16,
    color: '#888',
  },
  stepActive: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addressContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addressDetails: {
    marginBottom: 10,
  },
  addressText: {
    fontSize: 14,
    marginBottom: 5,
  },
  changeButton: {
    backgroundColor: '#007BFF',
    padding: 5,
    borderRadius: 5,
  },
  changeButtonText: {
    color: '#fff',
    fontSize: 14,
  },
  addressInputContainer: {
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    fontSize: 16,
    color: "black",
    borderWidth: 1,
    borderColor: '#ccc',
  },
  saveButton: {
    backgroundColor: '#008080',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 8,
    marginRight: 15,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  productPrice: {
    fontSize: 16,
    marginBottom: 5,
  },
  quantity: {
    fontSize: 16,
    marginBottom: 5,
  },
  detail: {
    fontSize: 14,
    marginBottom: 5,
  },
  colorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  colorIndicator: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: 5,
  },
  paymentContainer: {
    marginBottom: 20,
  },
  paymentLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  paymentDetail: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  totalLabel: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#FFC107',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default BuyNow;
