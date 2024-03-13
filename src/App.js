import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import home from './screens/home';
import myCart from './screens/myCart';
import payment from './screens/payment';
import confirmPayment from './screens/confirmPayment';
import myOrder from './screens/myOrder';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="myCart" component={myCart} options={{ headerShown: false }} />
    <Stack.Screen name="payment" component={payment} options={{ headerShown: false }} />
    <Stack.Screen name="confirmPayment" component={confirmPayment} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={home} />
    <Tab.Screen name="My Order" component={myOrder} />
  </Tab.Navigator>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const renderScreens = () => {
    if (isAuthenticated) {
      return <MainTabs />;
    } else {
      return <AuthStack />;
    }
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      </Stack.Navigator >
    </NavigationContainer>
  );
};

export default App;