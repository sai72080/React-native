import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { WishlistContext } from '../context/WishlistContext';
import data from '../Data/data.json'; 
import Footer from '../components/Footer'; 

const ProductList = ({ navigation, route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const { wishlist, addToWishlist } = useContext(WishlistContext);

  useEffect(() => {
    if (data.products[category]) {
      setProducts(data.products[category].map(product => ({
        ...product,
        id: product.id.toString(),
      })));
    }
  }, [category]);

  const renderProduct = ({ item }) => {
    const isInWishlist = wishlist.some(product => product.id === item.id);
    return (
      <TouchableOpacity 
        style={styles.productCard} 
        onPress={() => navigation.navigate('Product', { product: item })}
      >
        <Image source={{ uri: item.image }} style={styles.productImage} />
        <Text style={styles.productName}>{item.title}</Text>
        <Text style={styles.productPrice}>₹{item.price}</Text>
        <Text style={styles.productRating}>Rating: {item.rating}★</Text>
        <TouchableOpacity onPress={() => addToWishlist(item)}>
          <Icon
            name={isInWishlist ? 'heart' : 'heart-outline'}
            type='material-community'
            color={isInWishlist ? 'red' : 'grey'}
          />
        </TouchableOpacity>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.productList}
      />
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 10,
  },
  productList: {
    paddingBottom: 80,
  },
  productCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productName: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
  },
  productPrice: {
    fontSize: 16,
    color: '#000',
    marginBottom: 10,
  },
  productRating: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
});

export default ProductList;
