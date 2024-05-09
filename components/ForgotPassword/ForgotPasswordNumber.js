import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { SendDirectSms } from 'react-native-send-direct-sms';

const ForgotPasswordNumber = () => {
  const [mobileNumber, setMobileNumber] = useState('');
  const [bodySMS, setBodySMS] = useState('');

  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.goBack();
  };

  const handleContinuePress = () => {
    if (!mobileNumber) {
      alert('Please enter your mobile number');
      return;
    }

    const verificationNumber = generateVerificationNumber();
    setBodySMS(verificationNumber.toString());

    sendSmsData(mobileNumber, bodySMS);

    // Navigate to the next screen or perform any other action
    // navigation.navigate('ForgotPasswordVerification');
  };

  const generateVerificationNumber = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000); // Generate a random 4-digit number
    return randomCode;
  };

  const sendSmsData = (mobileNumber, bodySMS) => {
    SendDirectSms(mobileNumber, bodySMS)
      .then((res) => console.log('SMS sent successfully:', res))
      .catch((err) => console.log('Failed to send SMS:', err));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleBackButtonPress}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.EnterText}>Please Input your Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Number"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          keyboardType="numeric"
        />
        <TouchableOpacity 
          style={[styles.button, styles.continueButton]}
          onPress={handleContinuePress}
        >
          <Text style={styles.buttonText}>Continue</Text>
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
  },
  EnterText: {
    textAlign: 'center',
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
  buttonText: {
    fontFamily: 'Aleo_700Bold',
  },
});

export default ForgotPasswordNumber;
