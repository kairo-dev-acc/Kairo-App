// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { View, TextInput } from 'react-native';
import React from 'react';

export default function Input({ value, onChange, placeholder }) {
  return (
    <View>
      <TextInput
        className="
          h-12 
          px-3 
          py-4 
          rounded-lg 
          text-[17px] 
          font-normal 
          mx-[27px]
          border
        "
        placeholder={placeholder}
        value={value}
        onChangeText={onChange}
        style={{
          borderColor: value ? "#000000ff" : "#ccc",
        }}
      />
    </View>
  );
}
