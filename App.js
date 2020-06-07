import 'react-native-gesture-handler'
import React, {useEffect} from 'react';
import NavigationWrapper from './navigator'
import { NavigationContainer } from '@react-navigation/native'
import SplashScreen from 'react-native-splash-screen'
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
  useEffect(()=>{
    SplashScreen.hide()
  }, [])
  return (
   
        <NavigationContainer>
          <NavigationWrapper />
      </NavigationContainer>
  
    

   
  
  )
};

export default App;
