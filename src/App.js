import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './screens/login';
import Home from './screens/home';
import category from './screens/category';
import profile from './screens/profile';
import myCart from './screens/myCart';
import payment from './screens/payment';
import confirmPayment from './screens/confirmPayment';
import MyOrder from './screens/myOrder';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => (
  <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MainTabs = () => (
  <Tab.Navigator screenOptions ={{headerShown:false}}> 
    <Tab.Screen name="Home" component={Home} />
    <Tab.Screen name="Category" component={category} />
    <Tab.Screen name="My Order" component={MyOrder} />
    <Tab.Screen name="Profile" component={profile} />
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
          <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false }} />
          <Stack.Screen name="MainTabs" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;