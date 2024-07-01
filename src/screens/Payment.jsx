import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Footer from '../components/Footer';

const Payment = ({ route, navigation }) => {
  const { total = 0, addressDetails } = route.params || {};

  const handlePayment = () => {
    navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Payment Page</Text>
        {/* <View style={styles.addressContainer}>
          <Text style={styles.label}>Deliver to:</Text>
          <Text style={styles.addressText}>Name: {addressDetails.name}</Text>
          <Text style={styles.addressText}>Street: {addressDetails.street}</Text>
          <Text style={styles.addressText}>City: {addressDetails.city}</Text>
          <Text style={styles.addressText}>State: {addressDetails.state}</Text>
          <Text style={styles.addressText}>ZIP: {addressDetails.zip}</Text>
        </View> */}
        <Text style={styles.total}>Total: ₹{total.toFixed(2)}</Text>
        <Button title="Pay Now" onPress={handlePayment} />
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
});

export default Payment;
