import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Dimensions, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Category from '../components/Categories';

const { width, height } = Dimensions.get('window');

const HomePage = ({ navigation }) => {
  console.log('HomePage rendered');
  
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
        {/* Carousel */}
        <View style={styles.carouselContainer}>
          <Swiper autoplay={true} style={styles.wrapper} showsButtons={false}>
            <View style={styles.slide}>
              <Image source={require('../assets/download.jpeg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/th.jpeg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/discount2.jpeg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/discount.jpeg')} style={styles.image} />
            </View>
            <View style={styles.slide}>
              <Image source={require('../assets/Trending3.jpeg')} style={styles.image} />
            </View>
          </Swiper>
        </View>

        {/* Categories */}
        <Category navigation={navigation} />

        {/* Promotions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Promotions</Text>
          <View style={styles.promotions}>
            <Promotion navigation={navigation} image={require('../assets/th.jpeg')} label="mobiles" discount="50 - 80% Off" />
            <Promotion navigation={navigation} image={require('../assets/download.jpeg')} label="fashion" discount="Upto 70% Off" />
            <Promotion navigation={navigation} image={require('../assets/images.jpeg')} label="Smart Gadgets" price="Spl. Price ₹1,399" />
          </View>
        </View>

        {/* Discounts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Discounts for You</Text>
          <View style={styles.discounts}>
            <Discount navigation={navigation} image={require('../assets/discount.jpeg')} category="mobiles" />
            <Discount navigation={navigation} image={require('../assets/discount2.jpeg')} category="televisions" />
           
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trending</Text>
          <View style={styles.promotions}>
            <Promotion2 navigation={navigation} image={require('../assets/Trending.jpeg')} label="Smart Gadgets" discount="50 - 80% Off" />
            <Promotion2 navigation={navigation} image={require('../assets/Trending2.jpeg')} label="mobiles" discount="Upto 70% Off" />
            <Promotion2 navigation={navigation} image={require('../assets/Trending3.jpeg')} label='fashion' price="Spl. Price ₹399" />
           
          </View>
        </View>

        {/* Deals of the Day */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Deals of the Day</Text>
          <View style={styles.promotions}>
            <Promotion3 navigation={navigation} image={require('../assets/deals.jpeg')} label="refrigerators" discount="Min. 5% Off" />
            <Promotion3 navigation={navigation} image={require('../assets/deals2.jpeg')} label="TVs & Appliances" discount="Min. 70% Off" />
          </View>
        </View>
      </ScrollView>

      <Footer navigation={navigation} />
    </View>
  );
};

const Promotion = ({ navigation, image, label, discount, price }) => {
  const handlePress = () => {
    navigation.navigate('ProductList', { category: label });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={image} style={styles.promoImage} />
      <Text style={styles.promoLabel}>{label}</Text>
      {discount && <Text style={styles.promoDiscount}>{discount}</Text>}
      {price && <Text style={styles.promoPrice}>{price}</Text>}
    </TouchableOpacity>
  );
};

const Discount = ({ navigation, image, category }) => {
  const handlePress = () => {
    navigation.navigate('ProductList', { category });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.discountCard}>
      <Image source={image} style={styles.discountImage} />
    </TouchableOpacity>
  );
};

const Promotion2 = ({ navigation, image, label, discount, price }) => {
  const handlePress = () => {
    navigation.navigate('ProductList', { category: label });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={image} style={styles.promoImage} />
      <Text style={styles.promoLabel}>{label}</Text>
      {discount && <Text style={styles.promoDiscount}>{discount}</Text>}
      {price && <Text style={styles.promoPrice}>{price}</Text>}
    </TouchableOpacity>
  );
};

const Promotion3 = ({ navigation, image, label, discount, price }) => {
  const handlePress = () => {
    navigation.navigate('ProductList', { category: label });
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.promoCard}>
      <Image source={image} style={styles.promoImage} />
      <Text style={styles.promoLabel}>{label}</Text>
      {discount && <Text style={styles.promoDiscount}>{discount}</Text>}
      {price && <Text style={styles.promoPrice}>{price}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 80,
  },
  carouselContainer: {
    height: height * 0.3, 
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  section: {
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  promotions: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    width: '28%', 
  },
  promoImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  promoLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: 'bold',
  },
  promoDiscount: {
    color: 'red',
    fontWeight: 'bold',
  },
  promoPrice: {
    color: 'green',
    fontWeight: 'bold',
  },
  discounts: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  discountCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    width: '48%', 
  },
  discountImage: {
    width: '100%',
    height: 100,
    resizeMode: 'contain',
  },
  promoCard: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    alignItems: 'center',
    width: '48%', 
  },
});

export default HomePage;
