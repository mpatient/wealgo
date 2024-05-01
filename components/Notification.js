import { Text, View, StyleSheet, Pressable, TouchableOpacity} from 'react-native';
import React from 'react';
import { Appbar, Card } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native'; 


const Notification = () => {

  const handleBackButtonPress = () => {
    navigation.goBack(); // Navigate back to the previous screen
  };
  const navigation = useNavigation(); 

  return(
    <View>
    <Appbar.Header style={styles.appbar}>
        <TouchableOpacity style={styles.backButton}
        onPress={handleBackButtonPress}>
          <Text style={styles.backButtonText}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={{fontFamily: 'Aleo-Regular', fontSize: 25, color: '#ffffff',  margin: 'auto', }}>Notification</Text>
      </Appbar.Header>

      <View style={{margin: 'auto', height: 400, fontFamily: 'Aleo-Regular'}}>
        <Text style={{textAlign: 'center', margin: 'auto',}}> No Notifications</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  appbar: {
    backgroundColor: '#98BF64',
    flexDirection: 'row', // Ensure items are aligned horizontally
    alignItems: 'center', // Align items vertically
    
  },
  backButton: {
    paddingRight: 80,
    paddingLeft: 10,
  },
  backButtonText: {
    fontSize: 20,
    color: '#FFFFFF',
  },
});

export default Notification;