import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import * as Font from 'expo-font';
import { useNavigation, useRoute } from '@react-navigation/native'; 
// import { generateVerificationNumber } from './ForgotPasswordEmail';


export default function ForgotPasswordVerification() {
  const [verificationCode, setVerificationCode] = useState(['', '', '', '']);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isCodeValid, setIsCodeValid] = useState(true);
  const [codeEditing, setIsCodeEditing] = useState(false);
  const inputRefs = useRef([]);
  const navigation = useNavigation();
  const route = useRoute();
  const { randomCode } = route.params;

  const handleVerifyNowPress = () => {
    const enteredCode = verificationCode.join('')
    console.log(enteredCode)

    setIsCodeValid(enteredCode === randomCode.toString());

    if (enteredCode === randomCode.toString()) {
      navigation.navigate('Home');
    }
    else{
      setIsCodeValid(false);
    }
  };

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

  const handleInputChange = (text, index) => {
    const newVerificationCode = [...verificationCode];
    newVerificationCode[index] = text;
    setVerificationCode(newVerificationCode);

    if (text.length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    } else if (text.length === 1 && index < 3) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const renderInputs = () => {
    console.log(randomCode)
    return verificationCode.map((code, index) => (
      <TextInput
        ref={(ref) => (inputRefs.current[index] = ref)}
        key={index.toString()}
        style={[styles.codeInput, code.length === 0 && styles.emptyInput, { fontFamily: 'Aleo_400Regular' }]}
        maxLength={1}
        keyboardType="numeric"
        value={code}
        onChangeText={(text) => {
          handleInputChange(text, index)
          setIsCodeEditing(true);
        }}
        onBlur={() => setIsCodeEditing(false)}
      />
      
    ));
  };

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
        <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Verification</Text>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text style={[styles.instructionText, { fontFamily: 'Aleo_400Regular' }]}>
            Please enter the verification code sent to you
          </Text>
          <View style={styles.codeContainer}>{renderInputs()}</View>
          {!isCodeValid && !codeEditing && <Text style={styles.validationText}>Invalid Verification Code</Text>}
          <TouchableOpacity style={styles.resendButton}>
            <Text style={[styles.resendButtonText, { fontFamily: 'Aleo_400Regular' }]}>I didn't receive a code. Resend</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.verifyButton}
            onPress={handleVerifyNowPress}
            >
            <Text style={[styles.verifyButtonText, { fontFamily: 'Aleo_700Bold' }]}>Verify now</Text>
          </TouchableOpacity>
        </View>
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
  backButton: {
    padding: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    width: '80%',
    alignItems: 'center',
  },
  instructionText: {
    fontSize: 16,
    color: '#AF5F17',
    marginBottom: 20,
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  codeInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: '#AF5F17',
    borderRadius: 5,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: '#FAFFC7',
    color: '#AF5F17',
  },
  emptyInput: {
    backgroundColor: '#F0F0F0',
  },
  resendButton: {
    marginBottom: 20,
  },
  resendButtonText: {
    color: '#AF5F17',
    textDecorationLine: 'underline',
  },
  verifyButton: {
    backgroundColor: '#FF6600',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  verifyButtonText: {
    color: '#FFFFFF',
  },
  validationText: {
    color: 'red',
    marginBottom: 10,
    fontSize: 10
  },
});