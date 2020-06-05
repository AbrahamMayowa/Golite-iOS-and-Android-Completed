import 'react-native-gesture-handler'
import React from 'react';
import NavigationWrapper from './navigator'
import { NavigationContainer } from '@react-navigation/native'
import HomeScreen from './screens/HomeScreen'
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';



const App= () => {
  return (
   
        <NavigationContainer>
          <NavigationWrapper />
      </NavigationContainer>
  
    

   
  
  )
};

export default App;
