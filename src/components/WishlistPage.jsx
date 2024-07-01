import React, { useContext } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook
import { WishlistContext } from '../context/WishlistContext';
import Header from '../components/Header';

const WishlistPage = () => {
  const navigation = useNavigation(); // Access navigation object
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleRemoveFromWishlist = (productId) => {
    removeFromWishlist(productId);
  };

  const navigateToProduct = (product) => {
    navigation.navigate('Product', { product }); 
  };

  return (
    <View style={styles.container}>
      {/* <Header /> */}
      <View style={styles.contentContainer}>
        <Text style={styles.headerText}>My Wishlist</Text>
        {wishlist.length > 0 ? (
          <FlatList
            data={wishlist}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigateToProduct(item)}> 
                <View style={styles.wishlistItem}>
                  <Image source={{ uri: item.image }} style={styles.productImage} />
                  <Text style={styles.productName}>{item.title}</Text> 
                  <Text style={styles.productPrice}>₹{item.price}</Text>
                  <TouchableOpacity onPress={() => handleRemoveFromWishlist(item.id)}>
                    <Text style={styles.removeButton}>Remove</Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        ) : (
          <Text style={styles.infoText}>Your wishlist is empty.</Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#623AA2',
    marginBottom: 20,
  },
  infoText: {
    fontSize: 16,
    color: '#000',
  },
  wishlistItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    width: '100%',
    alignItems: 'center',
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
  removeButton: {
    fontSize: 14,
    color: 'red',
    marginTop: 5,
  },
});

export default WishlistPage;
