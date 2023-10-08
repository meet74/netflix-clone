import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated } from 'react-native';

interface BottomSheetProps {
  isVisible: boolean;
  onClose: () => void;
  height:number
}

const BottomSheet: React.FC<BottomSheetProps> = ({ isVisible, onClose,height }) => {
  const translateY = useRef(new Animated.Value(4000)).current;

  const showBottomSheet = () => {
    Animated.spring(translateY, {
      toValue: -height,
      useNativeDriver: false,
    }).start();
  };

  const hideBottomSheet = () => {
    Animated.spring(translateY, {
      toValue: 4000,
      useNativeDriver: false,
    }).start(() => onClose());
  };

  useEffect(() => {
    if (isVisible) {
      showBottomSheet();
    } else {
      hideBottomSheet();
    }
  }, [isVisible]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.9)',
        
        height:height
      }}
    >
      <Animated.View
        style={{
            backgroundColor: 'rgba(0,0,0,0.9)',
          padding: 16,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          transform: [{ translateY }],
          height:height
        }}
      >
        <Text>Content of the Bottom Sheet</Text>
        <TouchableOpacity onPress={onClose}>
          <Text style = {{color:"white"}}>Close</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

export default BottomSheet;
