import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from '../screenFolder/Products';
import Home from '../screenFolder/Home';
import {StyleSheet, View} from 'react-native';
import NavigationFooter from '../components/NavigationFooter';
const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <View style={styles.container}>
      <Stack.Navigator
        // style={styles.container}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Products" component={Products} />
      </Stack.Navigator>

      <NavigationFooter />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 500,
    backgroundColor: 'skyblue',
  },
});
