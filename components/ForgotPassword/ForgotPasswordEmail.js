import React, { useState } from 'react';
import { View, Text, Button, Image, TouchableOpacity, TextInput, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const ForgotPasswordEmail = () => {

  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(true);
  const [emailEditing, setEmailEditing] = useState(false);

  const navigation = useNavigation();
  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleContinuePress = () => {
    navigation.navigate('ForgotPasswordVerification')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={[styles.formContainer, { marginTop: -20 }]}>
        <Text style={[styles.EnterText, { fontFamily: 'Aleo_700Bold' }]}>Please Input your Email</Text>
         <TextInput
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFC7',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
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
  button: {
    height: 33,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  continueButton: {
      backgroundColor: '#e27c25',
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
});

export default ForgotPasswordEmail;
