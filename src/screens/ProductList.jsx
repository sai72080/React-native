import React, { useEffect, useState, useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, Switch } from 'react-native';
import { Icon } from 'react-native-elements';
import { WishlistContext } from '../context/WishlistContext';
import data from '../Data/data.json'; 
import Footer from '../components/Footer'; 

const ProductList = ({ navigation, route }) => {
  const { category } = route.params;
  const [products, setProducts] = useState([]);
  const [isGridView, setIsGridView] = useState(true); 
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
        style={isGridView ? styles.productCard : styles.productRow} 
        onPress={() => navigation.navigate('Product', { product: item })}
      >
        <Image source={{ uri: item.image }} style={isGridView ? styles.productImageGrid : styles.productImageList} />
        <View style={styles.productInfo}>
          <Text style={[styles.productName, { textAlign: isGridView ? 'center' : 'left' }]}>{item.title}</Text>
          <Text style={styles.productPrice}>₹{item.price}</Text>
          <Text style={styles.productRating}>Rating: {item.rating}★</Text>
          <TouchableOpacity onPress={() => addToWishlist(item)}>
            <Icon
              name={isInWishlist ? 'heart' : 'heart-outline'}
              type='material-community'
              color={isInWishlist ? 'red' : 'grey'}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };

  const toggleView = () => {
    setIsGridView(prevState => !prevState);
  };

  return (
    <View style={styles.container}>
      <View style={styles.toggleContainer}>
        <Text>List View</Text>
        <Switch value={isGridView} onValueChange={toggleView} />
        <Text>Grid View</Text>
      </View>
      <FlatList
        data={products}
        renderItem={renderProduct}
        keyExtractor={item => item.id}
        numColumns={isGridView ? 2 : 1}
        key={isGridView ? 'grid' : 'list'}
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
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
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
  productRow: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImageGrid: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
  },
  productImageList: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  productInfo: {
    marginLeft: 10,
    flex: 1,
  },
  productName: {
    fontSize: 16,
    marginVertical: 10,
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
