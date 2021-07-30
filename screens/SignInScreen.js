import React, { useState, useEffect } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from "react-native";
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from "firebase";
import "firebaseui";
import "firebase/firestore";
import "firebase/auth";
import { StatusBar } from 'expo-status-bar';


   // Configure FirebaseUI
   const uiConfig = {
    signInFlow: 'popup',
    signInSuccessUrl: '/signedIn',
    // We will display Google and Facebook as auth providers.
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    };
  
  function SignInScreen() {{
    const [isSignedIn, setIsSignedIn] = useState(false);
  
    // Listen to the Firebase Auth state and set the local state.
    useEffect(() => {
      const unregisterAuthObserver = firebase.auth().onAuthStateChanged(user => {
        setIsSignedIn(!!user);
      });
      return () => unregisterAuthObserver(); // Make sure we un-register Firebase observers when the component unmounts.
    }, []);
  
    if (!isSignedIn) {
      return (

<KeyboardAvoidingView style={styles.container} behavior='padding'>
            <StatusBar style='light'/>

              
          
            <View>
          <center><h1>Signal Login</h1></center>
            </View>


            <View>
          <p>Login into your Signal account: </p>
            </View>
            <View>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />

          <a href="https://kevinroozrokh.github.io/" onclick="window.open(this.href);return false;" target="_blank"><center><p>Coded in React Native by Kevin Roozrokh</p></center></a>

            </View>
        </KeyboardAvoidingView>
      );
    }



    return (
      <View>
        <h1>My App</h1>
        <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
        <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
      </View>
    );
  }}
  
  export default SignInScreen;

  const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
   
})