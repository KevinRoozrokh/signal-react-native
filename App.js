
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import "firebaseui";
import "firebase/firestore";
import "firebase/auth";
import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import LoginScreen from './screens/LoginScreen';
import SignupScreen from './screens/SignupScreen';
import HomeScreen from './screens/HomeScreen';
import AddChatScreen from './screens/AddChatScreen';
import ChatScreen from './screens/ChatScreen';
import SignInScreen from './screens/SignInScreen';
import SettingsScreen from './screens/SettingsScreen';



const Stack = createStackNavigator();

const globalScreenOptions = {
headerStyle: { backgroundColor: "#2C6BED"},
headerTitleStyle: { color: "white" },
headerTintColor: "white",
}

export default function App() {
  return (
   
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
      <Stack.Screen  
      options={{title: "Signal"}}
      name="Login"
      component={LoginScreen} />

      <Stack.Screen  
      options={{title: "Home"}}
      name="Home"
      component={HomeScreen} />

      <Stack.Screen  
      options={{title: "Signal Registration"}}
      name="Signup"
      component={SignupScreen} />

      <Stack.Screen 
      options={{title: "Add Chat"}}
      name='AddChat'
      component={AddChatScreen} />
      
      <Stack.Screen 
      options={{title: "Chat"}}
      name='Chat'
      component={ChatScreen} />

      <Stack.Screen 
      options={{title: "Signal Account Login"}}
      name='Signin'
      component={SignInScreen} />

      <Stack.Screen 
      options={{title: "Settings"}}
      name='Settings'
      component={SettingsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
    
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
