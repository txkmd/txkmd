import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeProvider, useTheme } from './ThemeContext';
import { Home, MyCards, Statistics, Settings } from './screens';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <ThemeProvider>
      <MainApp />
    </ThemeProvider>
  );
};

const MainApp = () => {
  const { theme } = useTheme();

  const screenOptions = {
    tabBarShowLabel: false,
    headerShown: false,
    tabBarStyle: {
      position: 'absolute',
      bottom: 0,
      right: 0,
      left: 0,
      elevation: 0,
      height: 80,
      width: '100%',
      backgroundColor: theme.tabBar,
    },
  };


  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={screenOptions}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/home.png')}
                  style={{ height: 30, width: 30, tintColor: focused ? theme.iconFocused : theme.icon }}
                />
                <Text style={{ fontSize: 12, color: focused ? theme.iconFocused : theme.text, marginBottom: 20 }}>
                  Home
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="My Cards"
          component={MyCards}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/wallet.png')}
                  style={{ height: 30, width: 30, tintColor: focused ? theme.iconFocused : theme.icon }}
                />
                <Text style={{ fontSize: 12, color: focused ? theme.iconFocused : theme.text, marginBottom: 20 }}>
                  MyCards
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={Statistics}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/pie-chart.png')}
                  style={{ height: 30, width: 30, tintColor: focused ? theme.iconFocused : theme.icon }}
                />
                <Text style={{ fontSize: 12, color: focused ? theme.iconFocused : theme.text, marginBottom: 20 }}>
                  Statistics
                </Text>
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={Settings}
          options={{
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  source={require('./assets/setting.png')}
                  style={{ height: 30, width: 30, tintColor: focused ? theme.iconFocused : theme.icon }}
                />
                <Text style={{ fontSize: 12, color: focused ? theme.iconFocused : theme.text, marginBottom: 20 }}>
                  Settings
                </Text>
              </View>
            ),
          }}
        />
      </Tab.Navigator>
     <StatusBar backgroundColor="#000" barStyle="light-content" />
    </NavigationContainer>
  );
};

export default App;
