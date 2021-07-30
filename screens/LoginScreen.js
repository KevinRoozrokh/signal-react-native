import React, {useState, useEffect} from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView } from 'react-native'
import  { Button, Image } from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import {auth} from '../firebase';


const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            console.log(authUser)
            if(authUser){
                navigation.replace('Home')
            }
        });
        return unsubscribe
    }, [])

    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
        .catch(error => alert(error))
    }

    return (  
        <KeyboardAvoidingView style={styles.container} behavior='padding'>
            <StatusBar style='light'/>

            <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Signal_Blue_Icon.png",
        }}
        style={styles.image}
      />


            <View><Text>
          <center><h1>Welcome To Signal</h1></center>
            </Text>
            </View>
           
            <View style={styles.inputContainer}>
               
                <Button 
                    onPress={() => navigation.navigate('Signin')}
                    containerStyle={styles.button}
                    title='Login'
                    type='outline'
                />
                <Button
                    onPress={() => navigation.navigate("Signup")}
                    containerStyle={styles.button}
                    title="Signup"
                    type="outline"
                />
<View style={{height: 30}}/>
        <View>
        <a href="https://kevinroozrokh.github.io/" onclick="window.open(this.href);return false;" target="_blank"><center><p>Coded in React Native by Kevin Roozrokh</p></center></a>
          
          
        </View>


                
            </View>
        </KeyboardAvoidingView>
    );
}
 
export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'

    },
    inputContainer:{
        width: 300,
    },
    button:{
        alignSelf: 'center',
        width: 200,
        marginTop: 10
    },
    image: {
      width: 200,
      height: 200,
    },
});