import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/screens/Home';
import Categories from './src/components/Categories';
import Cart from './src/screens/Cart';
import Account from './src/screens/AccountScreen';
import Login from './src/screens/LoginScreen';
import SignUp from './src/screens/SignupScreen';
import ProductList from './src/screens/ProductList';
import Product from './src/screens/Product';
import Payment from './src/screens/Payment';
import ProfilePage from './src/components/ProfilePage';
import AddAddressPage from './src/components/AddAddressPage';
import RewardsPage from './src/components/RewardsPage';
import WishlistPage from './src/components/WishlistPage';
import HelpCenterPage from './src/components/HelpCenterPage';
import OrdersPage from './src/components/OrderPage';
import BuyNow from './src/screens/BuyNow';
import { CartProvider } from './src/context/CartContext';
import { AuthProvider } from './src/context/AuthContext';
import { WishlistProvider } from './src/context/WishlistContext';
import BackButton from './src/components/BackButton';

const Stack = createStackNavigator();

const App = () => {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <NavigationContainer>
            <Stack.Navigator
              initialRouteName="Home"
              // screenOptions={{
              //   headerLeft: () => <BackButton />,
              //   headerStyle: { backgroundColor: '#fff' },
              //   headerTintColor: '#000',
              //   headerTitleStyle: { fontWeight: 'bold' },
              // }}
            >
              <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
              <Stack.Screen name="Categories" component={Categories} />
              <Stack.Screen name="Cart" component={Cart} />
              <Stack.Screen name="Account" component={Account} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ProductList" component={ProductList} />
              <Stack.Screen name="Product" component={Product} />
              <Stack.Screen name="Payment" component={Payment} />
              <Stack.Screen name="Profile" component={ProfilePage} />
              <Stack.Screen name="AddAddress" component={AddAddressPage} />
              <Stack.Screen name="Rewards" component={RewardsPage} />
              <Stack.Screen name="Wishlist" component={WishlistPage} />
              <Stack.Screen name="Help" component={HelpCenterPage} />
              <Stack.Screen name="Orders" component={OrdersPage} />
              <Stack.Screen name="BuyNow" component={BuyNow} />
            </Stack.Navigator>
          </NavigationContainer>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
};

export default App;
