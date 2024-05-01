import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Image, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailValid, setEmailValid] = useState(true);
//   const [passwordValid, setPasswordValid] = useState(true);
//   const [emailEditing, setEmailEditing] = useState(false);
//   const [passwordEditing, setPasswordEditing] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);

  // Keyboard visibility management
  Keyboard.addListener('keyboardDidShow', () => setKeyboardVisible(true));
  Keyboard.addListener('keyboardDidHide', () => setKeyboardVisible(false));

  // Navigation handlers
  const handleCancelPress = () => {
    navigation.goBack();
  };

  const handleButtonPress = (buttonName) => {
    setSelectedButton(buttonName === selectedButton ? null : buttonName);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
      {!keyboardVisible && (
        <Image source={require('../assets/images/wealgo.png')} style={styles.image} />
      )}
      <View style={[styles.formContainer, { marginTop: -20 }]}>
        <Text style={[styles.EnterText, { fontFamily: 'Aleo_700Bold' }]}>Select which contact details should we use to reset your password</Text>
         {/*<TextInput
          style={[styles.input, { fontFamily: 'Aleo_400Regular' }]}
          placeholder="Email"
          onChangeText={(text) => {
            setEmail(text);
            setEmailEditing(true);
            setEmailValid(true); // Clear validation message while typing
          }}
          onBlur={() => setEmailEditing(false)} // Update emailEditing state on blur
          value={email}
          keyboardType="email-address"
        />
        {!emailValid && !emailEditing && <Text style={styles.validationText}>Invalid email address</Text>}
        
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

        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.orText, { fontFamily: 'Aleo_400Regular' }]}>or</Text> */}

        <TouchableOpacity 
        style={[
            styles.button,
            styles.emailButton,
            // selectedButton === 'email' && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('email')}
        >    
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.phonenumberButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Phone Number</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.continueButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue</Text>
        </TouchableOpacity>
        <Text style={[styles.accountText, { fontFamily: 'Aleo_400Regular' }]}>Don't have account?</Text>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FAFFC7',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    image: {
      width: '80%',
      height: 150,
      resizeMode: 'contain',
      marginBottom: 50,
      marginTop: 45,
    },
    EnterText: {
      textAlign: 'start',
      color: '#AF5F17',
      marginBottom: 10,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#98BF64',
      paddingHorizontal: 20,
      paddingVertical: 3,
      width: '100%',
      height: 70,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
    },
    headerText: {
      color: '#FFFFFF',
      fontSize: 25,
    },
    
    formContainer: {
      width: '80%',
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
    orText: {
      textAlign: 'center',
      marginBottom: 20,
      color: '#AF5F17',
    },
    forgotpassText: {
      textAlign: 'start',
      marginBottom: 20,
      color: '#AF5F17',
    },
    button: {
      height: 33,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
    },
    emailButton: {
      backgroundColor: '#cbe097',
    },
    phonenumberButton: {
      backgroundColor: '#cbe097',
    },
    continueButton: {
        backgroundColor: '#e27c25',
      },
    signupButton: {
      paddingVertical: 20,
    },
    loginButton: {
      backgroundColor: '#FF9800',
      paddingVertical: 12,
    },
    loginButtonText:{
      color: '#E67F22',
      fontSize: 25,
    },
    buttonText: {
      color: '#fff',
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
    eyeIcon: {
      position: 'absolute',
      right: 30,
      bottom: 0.5,
      alignItems: 'center'
    },
    selectedButton: {
        color: 'white',
    },
  });