import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Image, Keyboard } from 'react-native';
import { useFonts, Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword} from '@firebase/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDSPnbx_SnZqQ1M-E0RAV46LC9G5XASHus",
  authDomain: "weal-go.firebaseapp.com",
  projectId: "weal-go",
  storageBucket: "weal-go.appspot.com",
  messagingSenderId: "636084120715",
  appId: "1:636084120715:web:5b865b847ebb7df53c788e",
  measurementId: "G-L5SSL6CSFW"
};

const app = initializeApp(firebaseConfig);


export default function Login() {
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
  const [modalVisible, setModalVisible] = useState(false);
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const navigation = useNavigation();


  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ForgotPassword');
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

  let [fontsLoaded] = useFonts({
    Aleo_700Bold,
    Aleo_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={[styles.headerText, styles.headerTitle, { fontFamily: 'Aleo_700Bold' }]}>Login</Text>
      </View>
      {!keyboardVisible && (
        <Image source={require('../assets/images/wealgo.png')} style={styles.image} />
      )}
      <View style={[styles.formContainer, { marginTop: -20 }]}>
        <Text style={[styles.EnterText, { fontFamily: 'Aleo_700Bold' }]}>Enter your credentials</Text>
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

        <TouchableOpacity onPress={navigateToForgotPassword}>
          <Text style={[styles.forgotpassText, { fontFamily: 'Aleo_700Regular' }]}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.loginButton]}
          >
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Login</Text>
        </TouchableOpacity>

        <Text style={[styles.orText, { fontFamily: 'Aleo_400Regular' }]}>or</Text>

        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue with Facebook</Text>
        </TouchableOpacity>
        <Text style={[styles.accountText, { fontFamily: 'Aleo_400Regular' }]}>Don't have account?</Text>
        {!keyboardVisible && (
        <TouchableOpacity style={[styles.button, styles.signupButton]} onPress={navigateToSignup}>
          <Text style={[styles.loginButtonText, { fontFamily: 'Aleo_700Bold' }]}>Signup</Text>
        </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const handleLogin = () => {
  // Handle login functionality here
};

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
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
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
});
