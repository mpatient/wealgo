import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet, Dimensions } from 'react-native';

const SplashScreen1 = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('SplashScreen2');
    }, 5000); // Navigate to SplashScreen2 after 5 seconds
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/logo.png')}
          style={styles.image}
          resizeMode="contain"/>
      </View>
      <View style={styles.progressContainer}>
        <ActivityIndicator size="large" color="#be4a31" />
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
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: Dimensions.get('window').width * 0.5, // Adjusted width to fit the screen width
    height: Dimensions.get('window').width * 0.5, // Adjusted height to maintain aspect ratio
  },
  progressContainer: {
    position: 'absolute',
    bottom: 50,
  },
});

export default SplashScreen1;
