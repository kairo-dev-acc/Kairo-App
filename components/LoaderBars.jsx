// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import React, { useEffect, useRef } from "react";
import { Animated, View } from "react-native";

export function LoaderBars() {
  const bars = [
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
    useRef(new Animated.Value(1)).current,
  ];

  useEffect(() => {
    const animations = bars.map((bar, index) =>
      Animated.loop(
        Animated.sequence([
          Animated.timing(bar, {
            toValue: 0.3,
            duration: 300,
            delay: index * 120,
            useNativeDriver: true,
          }),
          Animated.timing(bar, {
            toValue: 1,
            duration: 300,
            useNativeDriver: true,
          }),
        ])
      )
    );

    animations.forEach((anim) => anim.start());
    return () => animations.forEach((anim) => anim.stop());
  }, []);

  return (
    <View className="flex-row items-center justify-center gap-1.5">
      {bars.map((bar, index) => (
        <Animated.View
          key={index}
          style={{ opacity: bar }}
          className="w-[6px] h-[6px] bg-white rounded-full"
        />
      ))}
    </View>
  );
}
