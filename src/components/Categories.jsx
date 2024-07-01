import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Icon, Text } from 'react-native-elements';
import { TouchableOpacity } from 'react-native';


const Category = () => {
  const navigation = useNavigation();

  const categories = [
    { icon: 'tshirt-crew', label: 'fashion' },
    { icon: 'cellphone', label: 'mobiles' },
    { icon: 'airplane', label: 'Cheapest Flights' },
    { icon: 'headphones', label: 'Smart Gadgets' },
    { icon: 'television', label: 'TVs & Appliances' },
    { icon: 'fridge', label: 'refrigerators' },
    { icon: 'face-man', label: 'Beauty & Grooming' },
  ];

  return (
    <ScrollView horizontal={true} style={styles.categoriesContainer}>
      <View style={styles.categories}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} onPress={() => navigation.navigate('ProductList', { category: category.label })} style={styles.category}>
            <Icon name={category.icon} type="material-community" size={30} />
            <Text style={styles.categoryLabel}>{category.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoriesContainer: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  category: {
    alignItems: 'center',
    margin: 10,
    width: 60,
  },
  categoryLabel: {
    marginTop: 5,
    fontSize: 12,
  },
});

export default Category;
