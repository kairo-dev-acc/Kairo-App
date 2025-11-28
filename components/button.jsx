// -----------------------------------------------------------------------------
// Copyright (c) 2025 Kairo. All rights reserved.
//
// This file is part of the Kairo React Native mobile application.
// Unauthorized copying, modification, or distribution of this file,
// in whole or in part, is strictly prohibited without written permission.
// -----------------------------------------------------------------------------

import { Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ textName, TextColor, backgroundColor, onPressfunction }) {
  return (
    <TouchableOpacity
      className="
        px-4 
        py-4 
        rounded-full 
        items-center 
        justify-center 
        mx-[27px]
      "
      onPress={onPressfunction}
      style={{ backgroundColor }}
    >
      <Text
        className="text-center text-[17px] font-medium"
        style={{ color: TextColor }}
      >
        {textName}
      </Text>
    </TouchableOpacity>
  );
}
