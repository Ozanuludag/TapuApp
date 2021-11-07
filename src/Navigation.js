import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AccountScreen from './pages/AccountScreen';
import ListScreen from './pages/ListScreen';
import { Image } from 'react-native'

const Tab = createBottomTabNavigator();

const Navigation = () => {

  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarHideOnKeyboard: true }}>
        <Tab.Screen name="Account" component={AccountScreen}
          options={{

            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/account.png')
                } />
            ),
          }}
        />
        <Tab.Screen name="List" component={ListScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/list.png')
                } />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Navigation;