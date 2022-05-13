import React, { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { View, Text } from 'react-native';

import { styles } from './styles';
import { theme } from '../../styles/theme';

import Animated ,
  { 
    useSharedValue, 
    useAnimatedStyle, 
    withTiming, 
    Easing 
  } from 'react-native-reanimated';

export function Header() {
  const opacity = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value
    }
  });

  function loadingAnimation(){
    opacity.value = withTiming(1, {
      duration: 2000,
      easing: Easing.ease
    });
  }

  useEffect(() => {
   loadingAnimation();
  }, []);

  return (
    <Animated.View style={[styles.container,  animatedStyle]}>
      <Feather
        name="arrow-left"
        color={theme.colors.brown}
        size={32}
      />

      <View>
        <Text style={styles.title}>
          Xands Food
        </Text>

        <Text style={styles.subtitle}>
          Special BR pizza
        </Text>
      </View>
    </Animated.View>
  );
}