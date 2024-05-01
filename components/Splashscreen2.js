import React from 'react';
import { useFonts, Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen2 = () => {
  const navigation = useNavigation();

  const navigateToTellMeMore = () => {
    navigation.navigate('TellMeMore'); // Navigate to TellMeMore screen
  };

  const navigateToSignup = () => {
    navigation.navigate('Signup');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.loginButton} onPress={navigateToSignup}>
        <Text style={styles.loginButtonText}>Log In</Text>
      </TouchableOpacity>
      <View style={styles.contentContainer}>
        <Image source={require('../assets/images/icon.png')} style={styles.icon} resizeMode="contain" />
        <Image source={require('../assets/images/splash-screen.png')} style={styles.logo} resizeMode="contain" />
        <Text style={styles.subtitleText}>Ready-to-eat Nutritional Meals{'\n'}Perfect for your Wellness</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={[styles.verticalButton, { width: Dimensions.get('window').width * 0.5 }]} onPress={navigateToTellMeMore}>
            <Text style={styles.buttonText}>Tell Me More</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.verticalButton, { width: Dimensions.get('window').width * 0.5 }]} onPress={navigateToSignup}>
            <Text style={styles.buttonText}>Plan Meal</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#faffc7',
  },
  contentContainer: {
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'Aleo_400Regular',
    color: '#E67F22'
  },
  logo: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.6,
  },
  icon: {
    width: Dimensions.get('window').width * 0.6,
    height: Dimensions.get('window').width * 0.2,
  },
  loginButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#be4a31',
    borderRadius: 10,
    marginTop: 20,
  },
  loginButtonText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: 'Aleo_400Regular',
  },
  buttonContainer: {
    marginTop: 20,
  },
  verticalButton: {
    backgroundColor: '#98bf64',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 17,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Aleo_400Regular'
  },
});

export default SplashScreen2;
