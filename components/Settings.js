import { Text, View, StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 
import { useAuth } from './Authentication';

const Settings = () => {

 const navigation = useNavigation();
 const { user, signOut } = useAuth();

 console.log("User in Settings:", user);

 const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const navigatetoChatbot = () => {
    navigation.navigate('Chatbot');
  };

  const handleSignOut = async () => {
    try {
      await signOut();  // Call the signOut function from useAuth
      console.log('User signed out successfully!');
      navigation.navigate('AuthScreen');
    } catch (error) {
      console.error('Sign out error:', error.message);
    }
  };


  return (
    <View>
      <Appbar.Header style={styles.appbar}>
      <TouchableOpacity style={styles.backButton}
        onPress={handleBackButtonPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{ fontFamily: 'Aleo-Regular', fontSize: 25, color: '#ffffff', textAlign: 'center', flex: 1, alignItems: 'center' }}>Settings</Text>
      </Appbar.Header>

      <View>
        <Text style={{textAlign: 'center', fontSize: 20, marginTop: 10, }}>{user ? `user: ${user.email}` : 'Not logged in'}</Text> 
      </View>

      <Card style={styles.buttonCard}>
        <View style={styles.buttonSection}>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>Help Center</Text>
          </Pressable>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>Give us your feedback</Text>
          </Pressable>
        </View>
        <View style={styles.buttonSection}>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>Terms & Conditions</Text>
          </Pressable>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>Privacy</Text> 
          </Pressable>
        </View>
        <View style={styles.buttonSection}>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>About our farmers</Text>
          </Pressable>
          <Pressable style={styles.buttonSet}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>About us</Text>
          </Pressable>
        </View>
        <View style={styles.buttonSection}>
            <Pressable style={styles.buttonSet} onPress={navigatetoChatbot}>
            <Text style={{ fontSize: 17, fontFamily: 'Aleo-Regular' }}>ChatBot Test</Text>
          </Pressable>
        </View>
      </Card>

      <Pressable style={styles.buttonSection} onPress={handleSignOut}>
        <Text style={{backgroundColor: '#E67F22', paddingTop: 3, paddingBottom: 3,  paddingLeft: 10, paddingRight: 10, color: "#ffffff", borderRadius: 5}}>Log out</Text>
      </Pressable>
      
    </View>
  );
};

const styles = StyleSheet.create({
  login: {
    marginTop: 30,
    backgroundColor: '#E67F22',
    width: 250,
    padding: 5,
    borderRadius: 5,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 26,
  },
  appbar: {
    backgroundColor: '#98BF64',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  buttonCard: {
    backgroundColor: 'transparent',
    shadowOffset: 0,
    shadowColor: 'transparent',
  },
  buttonSection: {
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  buttonSet: {
    backgroundColor: '#F6E7A8',
    marginTop: 3,
    marginBottom: 3,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#757575',
    borderRadius: 5,
    width: 340,
  },
});

export default Settings;
