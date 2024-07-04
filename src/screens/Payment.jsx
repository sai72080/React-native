import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Footer from '../components/Footer';
import { RadioButton } from 'react-native-paper';

const Payment = ({ route, navigation }) => {
  const { total = 0, addressDetails } = route.params || {};
  const [paymentMethod, setPaymentMethod] = useState('cashOnDelivery');

  const handlePayment = () => {
    Alert.alert('Payment Successful', 'Your payment has been processed successfully.', [
      { text: 'OK', onPress: () => navigation.navigate('Home') },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Payment Page</Text>
        {/* Uncomment this section to show address details */}
        {/* 
        <View style={styles.addressContainer}>
          <Text style={styles.label}>Deliver to:</Text>
          <Text style={styles.addressText}>Name: {addressDetails.name}</Text>
          <Text style={styles.addressText}>Street: {addressDetails.street}</Text>
          <Text style={styles.addressText}>City: {addressDetails.city}</Text>
          <Text style={styles.addressText}>State: {addressDetails.state}</Text>
          <Text style={styles.addressText}>ZIP: {addressDetails.zip}</Text>
        </View> 
        */}
        <Text style={styles.total}>Total: ₹{total.toFixed(2)}</Text>
        <View style={styles.paymentOptions}>
          <Text style={styles.paymentTitle}>How do you want to pay?</Text>
          <View style={styles.option}>
            <RadioButton
              value="cashOnDelivery"
              status={paymentMethod === 'cashOnDelivery' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethod('cashOnDelivery')}
            />
            <Text style={styles.optionText}>Cash on Delivery</Text>
          </View>
          <View style={styles.option}>
            <RadioButton
              value="upi"
              status={paymentMethod === 'upi' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethod('upi')}
            />
            <Text style={styles.optionText}>UPI</Text>
          </View>
          <View style={styles.option}>
            <RadioButton
              value="card"
              status={paymentMethod === 'card' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethod('card')}
            />
            <Text style={styles.optionText}>Card</Text>
          </View>
          <View style={styles.option}>
            <RadioButton
              value="netBanking"
              status={paymentMethod === 'netBanking' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethod('netBanking')}
            />
            <Text style={styles.optionText}>Net Banking</Text>
          </View>
          <View style={styles.option}>
            <RadioButton
              value="emi"
              status={paymentMethod === 'emi' ? 'checked' : 'unchecked'}
              onPress={() => setPaymentMethod('emi')}
            />
            <Text style={styles.optionText}>EMI</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay Now</Text>
        </TouchableOpacity>
      </View>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  addressContainer: {
    marginBottom: 20,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  addressText: {
    fontSize: 14,
    marginBottom: 5,
  },
  total: {
    fontSize: 18,
    marginBottom: 20,
  },
  paymentOptions: {
    width: '100%',
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  payButton: {
    backgroundColor: '#F97794',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Payment;
