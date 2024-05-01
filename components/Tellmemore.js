import React, { useState } from 'react';
import { View, Animated } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-swiper';
import Screen1 from './Screen1';
import Screen2 from './Screen2';
import Screen3 from './Screen3';

const Stack = createStackNavigator();

const TellMeMore = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  return ( 
    <Stack.Navigator initialRouteName="SwipeScreen" headerMode="none">
      <Stack.Screen name="SwipeScreen">
        {() => (
          <SwipeScreen
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const SwipeScreen = ({ currentIndex, setCurrentIndex }) => {
  const progressBarWidth = new Animated.Value(0);

  const onIndexChanged = index => {
    setCurrentIndex(index);
    Animated.timing(progressBarWidth, {
      toValue: (index + 1) * 100, // Assuming each screen has equal width
      duration: 300, // Duration of animation
      useNativeDriver: false,
    }).start();
  };

  return (
    <View style={{ flex: 1 }}>
      <Swiper
        loop={false}
        showsPagination={true}
        dotStyle={{ backgroundColor: '#aaa', width: 10, height: 10, margin: 3, borderRadius: 5 }}
        activeDotStyle={{ backgroundColor: '#000', width: 10, height: 10, margin: 3, borderRadius: 5 }}
        activeDotColor="#000"
        dotColor="#aaa"
        index={currentIndex}
        onIndexChanged={onIndexChanged}
      >
        <SwiperScreen component={Screen1} />
        <SwiperScreen component={Screen2} />
        <SwiperScreen component={Screen3} />
      </Swiper>
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: progressBarWidth,
          height: 2,
          backgroundColor: 'blue',
        }}
      />
    </View>
  );
};

const SwiperScreen = ({ component: Component }) => {
  return (
    <View style={{ flex: 1 }}>
      <Component />
    </View>
  );
};

export default TellMeMore;
