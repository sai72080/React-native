import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
      <FontAwesome name="arrow-left" size={24} color="#000" />
      <Text style={styles.backButtonText}>Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  backButtonText: {
    marginLeft: 5,
    fontSize: 18,
    color: '#000',
  },
});

export default BackButton;
