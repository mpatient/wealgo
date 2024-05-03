import React, { useEffect, useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Image, Keyboard } from 'react-native';
import { Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { useNavigation } from '@react-navigation/native'; 

export default function ForgotPasswordConfirm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [confirmPasswordValid, setConfirmPasswordValid] = useState(true);
  const [emailEditing, setEmailEditing] = useState(false);
  const [passwordEditing, setPasswordEditing] = useState(false);
  const [confirmPasswordEditing, setConfirmPasswordEditing] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  
    const [fontsLoaded, setFontsLoaded] = useState(false);
    const inputRefs = useRef([]);
    const navigation = useNavigation();

    const handleConfirmPress = () => {
        navigation.navigate("Login");
      };

      useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
          setKeyboardVisible(true);
        });
        const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
          setKeyboardVisible(false);
        });
    
        return () => {
          keyboardDidShowListener.remove();
          keyboardDidHideListener.remove();
        };
      }, []);

 const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };

  const loadFonts = async () => {
    await Font.loadAsync({
      Aleo_700Bold,
      Aleo_400Regular,
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // Wait for the fonts to load
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
    </View>
    <View style={styles.header}>
      <TouchableOpacity style={styles.backButton}
        onPress={handleBackButtonPress}>
        <Text style={styles.backButtonText}>{'<'}</Text>
      </TouchableOpacity>
      <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Confirm</Text>
    </View>
    <View style={[styles.contentContainer]}>
      <View style={[styles.formContainer]}>
      <Text style={[styles.EnterText, { fontFamily: 'Aleo_700Bold' }]}>Select which contact details should we use to reset your password</Text>
        <View style={styles.passwordInput}>
          <TextInput
            style={[styles.input, { fontFamily: 'Aleo_400Regular', flex: 1 }]}
            placeholder="Password"
            onChangeText={(text) => {
            setPassword(text);
            setPasswordEditing(true);
            setPasswordValid(true); // Clear validation message while typing
            }}
            onBlur={() => setPasswordEditing(false)} // Update passwordEditing state on blur
            value={password}
            secureTextEntry={!passwordVisible}
          />
          {password.length > 0 && (
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons name={passwordVisible ? "eye-off" : "eye"} size={24} color="black" style={styles.eyeIcon} />
            </TouchableOpacity>
          )}
        </View>
        {!passwordValid && !passwordEditing && <Text style={styles.validationText}>Password must be at least 6 characters long</Text>}

        <View style={styles.passwordInput}>
        <TextInput
            style={[styles.input, { fontFamily: 'Aleo_400Regular', flex: 1 }]}
            placeholder="Confirm Password"
            onChangeText={(text) => {
            setConfirmPassword(text);
            setConfirmPasswordEditing(true);
            setConfirmPasswordValid(true); // Clear validation message while typing
            }}
            onBlur={() => setConfirmPasswordEditing(false)} // Update confirmPasswordEditing state on blur
            value={confirmPassword}
            secureTextEntry={!passwordVisible}
        />
        {confirmPassword.length > 0 && (
            <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <MaterialCommunityIcons name={passwordVisible ? "eye-off" : "eye"} size={24} color="black" style={styles.eyeIcon} />
            </TouchableOpacity>
        )}
        </View>

        {!confirmPasswordValid && !confirmPasswordEditing && <Text style={styles.validationText}>Passwords do not match</Text>}
      </View>
      
      <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={handleConfirmPress}>
        <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Confirm</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFC7',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  EnterText: {
    textAlign: 'center',
    color: '#AF5F17',
    marginBottom: 10,
    justifyContent: 'center',
  },
  header: {
    backgroundColor: '#98BF64',
    paddingVertical: 10,
    width: '100%',
    flexDirection: 'row', // Make the header content aligned horizontally
    alignItems: 'center', // Align content vertically
    paddingHorizontal: 10, // Add padding to the sides
  },
  headerText: {
    fontSize: 20,
    color: '#FFFFFF',
    flex: 1, // Allow text to take up remaining space
    textAlign: 'center', // Center text horizontally
  },
  
  formContainer: {
    width: '80%',
    
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    
  },
  input: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 30,
    marginBottom: 20,
    backgroundColor: '#FBD28552',
    color: '#AF5F17',
    textAlign: 'left',
  },
  validationText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 10
  },
  loginButton: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  loginButtonText:{
    color: '#ffff',
    fontSize: 15,
    padding: 10,
  },
  buttonText: {
    color: '#ffff',
    fontSize: 15,
  },
  accountText: {
    textAlign: 'center',
    color: '#AF5F17',
    marginTop: 10,
  },
  passwordInput: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  selectedButton: {
      // backgroundColor: 'yellow',
      borderColor: "#2b4a39",
      borderStyle: "solid",
      borderWidth: 2,
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});
