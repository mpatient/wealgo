import { View, StyleSheet, Pressable, TextInput, Text, Button} from 'react-native';
import React, { useState } from 'react';

const RegistrationForm = () => {
      //empty text,  for text inputed
  const [textInput, setInputText] = useState(''); //set empty text

  const InputHandle = (text) =>{
     setInputText(text);
  }

  const ButtonHandle = () => {
    Alert.alert('entered text:', textInput);
  }
  

  return (
    <View style={styles.container}>
      <Text style={styles.fontText}>
        Select your Region
      </Text>
      <TextInput
        style={styles.inputBox}
        placeholder="Phone number"
        onChangeText={InputHandle}
        value={textInput}
      />
      <TextInput
        style={styles.inputBox}
        placeholder="Phone number"
        onChangeText={InputHandle}
        value={textInput}
      />

      <Text style={styles.fontText}>
        or
      </Text>

      <Pressable style={styles.signInGoogle}>
          <Text style={{fontFamily: 'Aleo-Regular', fontSize: 15, color: '#ffffff'}}>Continue with Google</Text>
      </Pressable>
       <Pressable style={styles.signInFacebook}>
          <Text style={{fontFamily: 'Aleo-Regular', fontSize: 15, color: '#ffffff'}}>Continue with Facebook</Text>
      </Pressable>
      
      <Text style={styles.fontTextAcc}>
        Already have an Account?
      </Text>

      <Pressable style={styles.logInBtn}>
          <Text style={{fontFamily: 'Aleo-Regular', fontSize: 15, color: '#ffffff'}}>Log in</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  fontText: {
    fontFamily: 'Aleo-Regular',
    color: '#AF5F17',
    marginBottom: 20,
  },

  fontTextAcc: {
    fontFamily: 'Aleo-Regular',
    color: '#AF5F17',
    marginBottom: 5,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },

  inputBox: {
    fontFamily: 'Aleo-Regular',
    color: '#AF5F17',
    width: 260,
    backgroundColor: 'rgba(251,210,133,0.6)',
    padding: 5,
    marginBottom: 20,
    borderRadius: 4,
    shadowColor: 'rgba(0,0,0,0.4)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },

  signInGoogle: {
    backgroundColor: 'rgba(239,57,26,0.7)',
    width: 260,
    padding: 6,
    borderRadius: 4,
    marginBottom: 20,
     alignItems: 'center',
  },

  signInFacebook: {
    backgroundColor: '#1F5581',
    width: 260,
    padding: 6,
    borderRadius: 4,
    marginBottom: 20,
     alignItems: 'center',
  },

  logInBtn: {
    width: 260,
    padding: 6,
    backgroundColor: '#E67F22',
    borderRadius: 4,
    alignItems: 'center',
  }


  
});

export default RegistrationForm;