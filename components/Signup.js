import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Modal, Image, Keyboard } from 'react-native';
import { useFonts, Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { initializeApp } from '@firebase/app';
import { getAuth, createUserWithEmailAndPassword} from '@firebase/auth';


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


export default function Signup() {
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

  const navigateToVerification = async () => {
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    const isConfirmPasswordValid = password === confirmPassword;

    setEmailValid(isEmailValid);
    setPasswordValid(isPasswordValid);
    setConfirmPasswordValid(isConfirmPasswordValid);

    if (isEmailValid && isPasswordValid && isConfirmPasswordValid) {
      try {
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Do something with the created user, if needed
        console.log('User created:', user);
        // Navigate to verification or any other screen
        navigation.navigate('Verification');
      } catch (error) {
        console.error('Error creating user:', error.message);
      }

    }
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleCancelPress = () => {
    navigation.goBack();
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

  const validateEmail = (text) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(text);
  };

  const validatePassword = (text) => {
    return text.length >= 6;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleCancelPress}>
          <Text style={[styles.headerText, { fontFamily: 'Aleo_700Bold' }]}>Cancel</Text>
        </TouchableOpacity>
        <Text style={[styles.headerText, styles.headerTitle, { fontFamily: 'Aleo_700Bold' }]}>Sign Up</Text>
      </View>
      <View>

      </View>
      <View style={[styles.formContainer, { marginTop: -20 }]}>
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

        <TouchableOpacity style={[styles.button, styles.signupButton]}
          onPress={navigateToVerification}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={[styles.orText, { fontFamily: 'Aleo_400Regular' }]}>or</Text>
        <TouchableOpacity style={[styles.button, styles.googleButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue with Google</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.facebookButton]}>
          <Text style={[styles.buttonText, { fontFamily: 'Aleo_700Bold' }]}>Continue with Facebook</Text>
        </TouchableOpacity>
        <Text style={[styles.accountText, { fontFamily: 'Aleo_400Regular' }]}>Already have an account?</Text>
      </View>
      {!keyboardVisible && (
        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={navigateToLogin}>
          <Text style={[styles.loginButtonText, { fontFamily: 'Aleo_700Bold' }]}>Log In</Text>
        </TouchableOpacity>
      )}
      {!keyboardVisible && (
        <View style={styles.footer}>
          <Text style={{ color: 'transparent' }}>Footer</Text>
        </View>
      )}
      {!keyboardVisible && (
        <Image source={require('../assets/images/wealgo.png')} style={styles.image} />
      )}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
  button: {
    height: 30,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 13,
  },
  googleButton: {
    backgroundColor: '#DB4437',
  },
  facebookButton: {
    backgroundColor: '#3B5998',
  },
  loginButton: {
    paddingVertical: 20,
  },
  signupButton: {
    backgroundColor: '#FF9800',
    paddingVertical: 12,
  },
  loginButtonText:{
    color: '#E67F22',
    fontSize: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 13,
  },
  accountText: {
    textAlign: 'center',
    marginBottom: 10,
    color: '#AF5F17',
  },
  footer: {
    backgroundColor: '#98BF64',
    paddingVertical: 50,
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  headerTitle: {
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  image: {
    width: '80%',
    height: 160,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: 0,
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
