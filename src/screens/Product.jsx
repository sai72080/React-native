import React, { useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { useAuth } from '../context/AuthContext';
import { CartContext } from '../context/CartContext';
import Footer from '../components/Footer';

const Product = ({ route, navigation }) => {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const { user } = useAuth();

  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (product.category === 'fashion' && (!selectedSize || !selectedColor)) {
      alert('Please select size and color');
      return;
    } else if (!selectedColor) {
      alert('Please select color');
      return;
    }
    addToCart({ ...product, size: selectedSize, color: selectedColor }, quantity);
    alert('Added to cart');
  };

  const handleBuyNow = () => {
    if (product.category === 'fashion' && (!selectedSize || !selectedColor)) {
      alert('Please select size and color');
      return;
    } else if (!selectedColor) {
      alert('Please select color');
      return;
    }

    if (!user) {
      Alert.alert(
        'Login Required',
        'You need to log in to proceed with the purchase.',
        [
          { text: 'Cancel', style: 'cancel' },
          { text: 'Login', onPress: () => navigation.navigate('Login') }
        ]
      );
    } else {
      navigation.navigate('BuyNow', { product: { ...product, size: selectedSize, color: selectedColor, quantity } });
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotalPrice = () => {
    return (product.price * quantity).toFixed(2);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          <Image source={{ uri: product.image }} style={styles.image} />
          <Text style={styles.name}>{product.title}</Text>
          <Text style={styles.price}>₹{calculateTotalPrice()}</Text>
          <Text style={styles.rating}>Rating: {product.rating}★</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Text style={styles.deliveryInfo}>Delivery in 6 days | Free Shipping</Text>

          {product.category === 'fashion' && (
            <View style={styles.sizeContainer}>
              <Text style={styles.sizeTitle}>Size:</Text>
              <View style={styles.sizes}>
                {['S', 'M', 'L', 'XL'].map(size => (
                  <TouchableOpacity
                    key={size}
                    style={[styles.sizeButton, selectedSize === size && styles.selectedSizeButton]}
                    onPress={() => setSelectedSize(size)}
                  >
                    <Text style={styles.sizeText}>{size}</Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          )}

          <View style={styles.colorContainer}>
            <Text style={styles.colorTitle}>Colors:</Text>
            <View style={styles.colors}>
              {['#d3d3d3', '#ff0000', '#0000ff', '#a52a2a', '#008000', '#000000'].map(color => (
                <TouchableOpacity
                  key={color}
                  style={[styles.colorButton, { backgroundColor: color }, selectedColor === color && styles.selectedColorButton]}
                  onPress={() => setSelectedColor(color)}
                />
              ))}
            </View>
          </View>

          <View style={styles.quantityContainer}>
            <Text style={styles.quantityTitle}>Quantity:</Text>
            <View style={styles.quantityControl}>
              <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>
              <Text style={styles.quantityText}>{quantity}</Text>
              <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleAddToCart}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.buyNowButton]} onPress={handleBuyNow}>
              <Text style={styles.buttonText}>Buy Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.reviewsContainer}>
            <Text style={styles.reviewsTitle}>Customer Reviews:</Text>
            {product.reviews.map((review, index) => (
              <View key={index} style={styles.review}>
                <Text style={styles.reviewUsername}>{review.username}</Text>
                <Text style={styles.reviewComment}>{review.comment}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  scrollContent: {
    padding: 10,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginBottom: 80,
  },
  image: {
    width: '100%',
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  price: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  rating: {
    fontSize: 20,
    color: '#666',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 10,
  },
  deliveryInfo: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  sizeContainer: {
    marginBottom: 20,
  },
  sizeTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  sizes: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sizeButton: {
    backgroundColor: '#e0e0e0',
    borderRadius: 20,
    padding: 10,
    marginHorizontal: 5,
  },
  selectedSizeButton: {
    backgroundColor: '#008080',
  },
  sizeText: {
    fontSize: 16,
    color: '#fff',
  },
  colorContainer: {
    marginBottom: 20,
  },
  colorTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  colors: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  colorButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginHorizontal: 5,
  },
  selectedColorButton: {
    borderWidth: 2,
    borderColor: '#000',
  },
  quantityContainer: {
    marginBottom: 20,
  },
  quantityTitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantityButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  quantityButtonText: {
    fontSize: 24,
    color: '#333',
  },
  quantityText: {
    fontSize: 20,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#008080',
    borderRadius: 8,
    padding: 15,
    width: '45%',
    alignItems: 'center',
  },
  buyNowButton: {
    backgroundColor: '#ff6347',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  reviewsContainer: {
    marginTop: 20,
  },
  reviewsTitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  review: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  reviewUsername: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  reviewComment: {
    fontSize: 16,
  },
});

export default Product;
