import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Screen1 = () => {
  const navigation = useNavigation();
  const navigateToLogin = () => {
    navigation.navigate('Signup');
  };
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/screen1.png')} style={styles.image} resizeMode="contain" />
      <Text style={styles.subtitleText}>Healthy food meal options to choose from{'\n'}that suit your diet and appetite.</Text>
      <TouchableOpacity style={[styles.planMealButton, { width: Dimensions.get('window').width * 0.6 }]} onPress={navigateToLogin}>
        <Text style={styles.buttonText}>Plan Meal</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    padding: 20,
    backgroundColor: '#98bf64',
  },
  image: {
    width: Dimensions.get('window').width * 0.8, // Adjusted width to fit the screen width
    height: Dimensions.get('window').width * 0.8, // Adjusted height to maintain aspect ratio
  },
  subtitleText: {
    fontSize: 23,
    marginTop: 20,
    marginBottom: 40,
    textAlign: 'center',
    fontFamily: 'Aleo_400Regular',
    color: '#FAFFC7'
  },
  planMealButton: {
    backgroundColor: '#e67f22',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 20,
    color: '#ffffff',
    textAlign: 'center',
    fontFamily: 'Aleo_400Regular',
  },
});

export default Screen1;
