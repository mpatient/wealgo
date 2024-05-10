import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Keyboard } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function ForgotPassword() {
  const navigation = useNavigation();

  const [selectedButton, setSelectedButton] = useState('');
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

  const handleContinuePress = () => {
    if (selectedButton) {
      if (selectedButton === 'email') {
        console.log(selectedButton);
        navigation.navigate('ForgotPasswordEmail');
        console.log('Email button was selected');
      } else if (selectedButton === 'pnumber') {
        navigation.navigate('ForgotPasswordNumber');
        console.log('Phone Number button was selected');
      }
    } else {
      // Handle case when no button is selected
      console.log('No button selected');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.formContainer, { marginTop: -20 }]}>
        <Text style={[styles.EnterText, { fontFamily: 'Aleo_700Bold' }]}>Select which contact details should we use to reset your password</Text>

        <TouchableOpacity 
        style={[
            styles.button,
            styles.emailButton,
            selectedButton === 'email' && styles.selectedButton,
            ]}
            onPress={() => handleButtonPress('email')}
        >    
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Email</Text>
        </TouchableOpacity>

        <TouchableOpacity 
        style={[
          styles.button, 
          styles.phonenumberButton,
          selectedButton === 'pnumber' && styles.selectedButton,
          ]}
          onPress={() => handleButtonPress('pnumber')}
        >
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Phone Number</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[
            styles.button, 
            styles.continueButton,
          ]}
          onPress={() => {
            handleContinuePress();
            console.log('Continue button pressed'); 
          }}
        >
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue</Text>
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
      textAlign: 'center',
      color: '#AF5F17',
      marginBottom: 10,
      justifyContent: 'center',
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
        // backgroundColor: 'yellow',
        borderColor: "#2b4a39",
        borderStyle: "solid",
        borderWidth: 2,
    },
  });