import React from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Nutrition = () => {
    const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const navigateToNotifications = () => {
    navigation.navigate('Notification');
  };
  const navigation = useNavigation();
  const navigateToHome = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={styles.container}>
      {/* Header Container */}
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Nutrition</Text>
      </View>

      {/* Grid Container */}
      <View style={[styles.gridContainer, { marginTop: 100 }]}>
        {[...Array(4)].map((_, index) => (
          <TouchableOpacity key={index} style={[styles.gridItem, { backgroundColor: '#98BF64' }]}>
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/keto-diet.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
            <Text style={styles.gridItemText}>Keto Diet</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Bottom Navigation */}
      <View style={styles.bottomNavigationContainer}>
        <View style={styles.bottomNavigation}>
          <TouchableOpacity style={styles.iconButton} onPress={navigateToNotifications}>
            <MaterialIcons name="notifications-active" size={27} color="black" />
            <Text style={styles.iconLabel}>Notifications</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="restaurant-menu" size={27} color="black" />
            <Text style={styles.iconLabel}>Meals</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={navigateToHome}>
            <MaterialCommunityIcons name="home-outline" size={27} color="black" />
            <Text style={styles.iconLabel}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="food-variant" size={27} color="orange" />
            <Text style={styles.iconLabel}>Nutrition</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={navigateToSettings}>
            <MaterialIcons name="settings" size={27} color="black" />
            <Text style={styles.iconLabel}>Settings</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFFC7',
  },
  headerContainer: {
    backgroundColor: '#98BF64',
    paddingVertical: 15,
    paddingHorizontal: 50, // Added horizontal padding
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 100, // Adjusted position below the header
  },
  gridItem: {
    width: '40%',
    aspectRatio: 1,
    margin: 10,
    borderRadius: 10,
    overflow: 'hidden', // Ensure child Image does not exceed parent's bounds
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    borderRadius: 10,
    backgroundColor: '#98BF64', // Background color for the image section at the box
    width: '100%',
    height: '100%',
  },
  gridItemText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  bottomNavigationContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: '#AACB76', 
    
  },
  bottomNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 15,
    paddingBottom: 2,
  },
  iconButton: {
    alignItems: 'center',
    padding: 5,
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 5,
    color: '#FAFFC7', // Change text color to contrast with the background color
  },
});

export default Nutrition;