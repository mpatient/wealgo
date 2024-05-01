import React from 'react';
import { useFonts, Aleo_700Bold, Aleo_400Regular } from '@expo-google-fonts/aleo';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const navigateToNutrition = () => {
    navigation.navigate('Nutrition');
  };
  const navigateToSettings = () => {
    navigation.navigate('Settings');
  };
  const navigateToNotifications = () => {
    navigation.navigate('Notification');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome to</Text>
        <View style={styles.imageContainer}>
        <Image source={require('../assets/images/logo.png')} style={styles.logo} resizeMode="contain"/>
        </View>
        <Text style={styles.headerText}>Ready-to-eat Nutritional Meals</Text>
        <Text style={styles.headerText}>Perfect for your Wellness</Text>
      </View>

      <View style={styles.boxContainer}> 
        <View style={styles.textBoxContainer}>
          <Text style={styles.boxText}>
            Healthy food meals options to choose from that suits your diet and appetite
          </Text>
        </View>
        <Image source={require('../assets/images/home.png')} style={styles.imageStyle} resizeMode="contain" />
      </View>

      <TouchableOpacity style={styles.planMealButton}>
        <Text style={styles.planMealButtonText}>Plan Meal</Text>
      </TouchableOpacity>

      {/* Container for icons */}
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
          <TouchableOpacity style={styles.iconButton}>
            <MaterialCommunityIcons name="home-outline" size={27} color="orange" />
            <Text style={styles.iconLabel}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton} onPress={navigateToNutrition}>
            <MaterialCommunityIcons name="food-variant" size={27} color="black" />
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
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'orange',
  },
  imageContainer:{
    padding: 20,
  },
  logo: {
    width: 200,  
    height: 200, 
    marginBottom: 10,
  },
  boxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#AACB76',
    padding: 15,
    borderRadius: 10,
    marginBottom: 30,
    width: '90%',
    position: 'relative',
  },
  textBoxContainer: {
    flex: 1,
    marginRight: 170,
  },
  boxText: {
    color: 'white',
    fontFamily: 'Aleo',
    fontSize: 16,
  },
  imageStyle: {
    width: 230,
    height: 150,
    position: 'absolute',
    top: '70%',
    right: -30,
    transform: [{ translateY: -75 }],
    
  },
  planMealButton: {
    backgroundColor: 'orange',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginBottom: 40,
  },
  planMealButtonText: {
    color: 'white',
    fontWeight: 'bold',
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
    color: 'white',
  },
});

export default Home;
