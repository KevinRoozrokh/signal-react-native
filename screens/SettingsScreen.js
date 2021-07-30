import React, {useState, useLayoutEffect} from 'react';
import { View, KeyboardAvoidingView , StyleSheet, Switch } from 'react-native'
import {Image, Button, Input, Text} from 'react-native-elements'
import { StatusBar } from 'expo-status-bar';
import {auth} from '../firebase'


const SignupScreen = ({navigation}) => {


    useLayoutEffect(() => {
        navigation.setOptions({
            headerBackTitle: 'Back to Login'
        })
    }, [navigation])

const [switchValue, setSwitchValue] = useState(false);
      
      const toggleSwitch = (value) => {
        //onValueChange of the switch this function will be called
        setSwitchValue(value);
        //state changes according to switch
        //which will result in re-render the text
      };

    return (  
        <KeyboardAvoidingView behavior='padding' style={styles.container}>
            <StatusBar style='light'/>
            <Text h3 style={{marginBottom: 50}}>
                Signal Settings
            </Text>
         
      <Button
        onPress={() => navigation.navigate("")}
        containerStyle={styles.button}
        title="Appearance"
        type="outline"
      />
      <Button
        onPress={() => navigation.navigate("")}
        containerStyle={styles.button}
        title="Chat Settings"
        type="outline"
      />
        {/*Text to show the text according to switch condition*/}
        <Text>{switchValue ? 'Link Previews are ON' : 'Link Previews are OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 15 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      <Button
        onPress={() => navigation.navigate("")}
        containerStyle={styles.button}
        title="Notifications"
        type="outline"
      />
        {/*Text to show the text according to switch condition*/}
        <Text>{switchValue ? 'Notifications are ON' : 'Notification are OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 15 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />

      <Button
        onPress={() => navigation.navigate("GitHub")}
        containerStyle={styles.button}
        title="Privacy"
        type="outline"
      />
              {/*Text to show the text according to switch condition*/}
              <Text>{switchValue ? 'Read Receipts are ON' : 'Read Receipts are OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 15 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
        {/*Text to show the text according to switch condition*/}
        <Text>{switchValue ? 'Typing Indicators are ON' : 'Typing Indicators are OFF'}</Text>
        {/*Switch with value set in constructor*/}
        {/*onValueChange will be triggered after switch condition changes*/}
        <Switch
          style={{ marginTop: 15 }}
          onValueChange={toggleSwitch}
          value={switchValue}
        />
      <Button
        onPress={() => navigation.navigate("")}
        containerStyle={styles.button}
        title="? Help"
        type="outline"
      />
      


      <View style={{ height: 100 }} />
    </KeyboardAvoidingView>
  );
};
 
export default SignupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        backgroundColor:'white'
    },
    inputContainer: {
        width: 300,
    },
    button: {
        width: 200,
        marginTop: 10,
    },
    
})