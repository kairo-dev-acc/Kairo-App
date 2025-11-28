import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";

export default function WhatNewCard({ image, title }) {
  return (
    <TouchableOpacity className="w-[200px] h-[128px] rounded-xl overflow-hidden mr-3">
      <Image source={image} className="w-full h-full" />

      {/* Overlay */}
      <View className="absolute bottom-0 left-0 right-0 p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}>
        <Text className="text-white text-[14px] font-medium">{title}</Text>
      </View>
    </TouchableOpacity>
  );
}
