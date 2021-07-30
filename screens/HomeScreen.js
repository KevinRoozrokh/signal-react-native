import React, { useEffect, useState, useLayoutEffect } from "react";
import { ActivityIndicator, View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { Avatar } from "react-native-elements";
import { TouchableOpacity } from "react-native-gesture-handler";
import CustomListItem from "../components/CustomListItem";
import { auth, db } from "../firebase";
import { FontAwesome } from "@expo/vector-icons";



const HomeScreen = ({ navigation }) => {
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  const signOutUser = () => {
    auth.signOut().then(() => {
      navigation.replace("Login");
    });
  };

  useEffect(() => {
    setLoading(true);
    const unsubscribe = db.collection("chats").onSnapshot((snapshot) => {
      setChats(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    setLoading(false);

    return unsubscribe;
  }, []);

  useLayoutEffect(() => {
    setLoading(true);
    navigation.setOptions({
      title: "Signal",
      headerStyle: { backgroundColor: "#2C6EBD" },
      headerTitleStyle: { color: "white" },
      headerTintColor: "white",
      headerLeft: () => (
        <View style={{ 
          marginLeft: 20, 
          flexDirection: "row",
          justifyContent: "space-between",
           }}>
          <TouchableOpacity onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.5}>
            <Avatar rounded source={{ uri: auth?.currentUser?.photoURL }}>
            </Avatar>
          </TouchableOpacity>

          

        </View>
      ),
      headerRight: () => (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: 150,
            marginRight: 20,
          }}
        >
         <TouchableOpacity onPress={signOutUser} activeOpacity={0.5}>
          <FontAwesome name="sign-out" size={36} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Home")} activeOpacity={0.5}>
          <FontAwesome name="home" size={36} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("Settings")}
            activeOpacity={0.5}>
          <FontAwesome name="gear" size={36} color="white" />
          </TouchableOpacity>
        
          <TouchableOpacity
            onPress={() => navigation.navigate("AddChat")}
            activeOpacity={0.5}
          >
            <FontAwesome name="pencil" size={33} color="white" />
          </TouchableOpacity>
          </View>
      ),
    });
    setLoading(false);
  }, [navigation]);

  const enterChat = (id, chatName) => {
    navigation.navigate("Chat", {
      id: id,
      chatName: chatName,
    });
  };

  return (
    loading ? <ActivityIndicator size="large" color="gray" style={{ flex: 0.7 }}/> :
    <SafeAreaView>
      <ScrollView style={styles.container}>
        {chats.map(({ id, data: { chatName } }) => (
          <CustomListItem
            key={id}
            id={id}
            chatName={chatName}
            enterChat={enterChat}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
